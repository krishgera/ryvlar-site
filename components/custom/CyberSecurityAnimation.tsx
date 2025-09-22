"use client";

import { useEffect, useRef } from "react";

// --- Configuration Constants ---
const COLORS = {
    NODE_DEFAULT: "#ffffff77", // DeepSkyBlue
    NODE_VULNERABLE: "#ff9999", // OrangeRed
    NODE_RESOLVED: "#77ffff", // LimeGreen
    CONNECTION: "#ffffff66",
    ATTACK_PATH: "#ccc",
    PATCHER: "#4cb9b9",
};

const ANIMATION_CONFIG = {
    MAX_DOTS: 70, // Reduced for a cleaner look
    MIN_DOT_DISTANCE: 45,
    MAX_CONNECTION_DISTANCE: 150,
    VULNERABLE_NODE_PERCENTAGE: 0.35,
    MIN_VULNERABLE_NODES: 8,
    ATTACK_CLUSTERS: 4,
    ATTACK_STEPS_INTERVAL: 250,
    PATCHER_COUNT_PER_NODE: 2,
    DUST_PARTICLE_COUNT: 60, // Reduced for less clutter
    DOT_DAMPING: 0.99, // For smoother node movement
    PULSE_AMPLITUDE: 0.40,
    STAGE_DURATIONS: {
        BUILDING: 5000,
        IDLE: 3000,
        SCANNING: 4000,
        ATTACK: 6000,
        RESOLVE: 15000,
        TRANSITION: 5000,
    },
} as const;

// --- Type Definitions ---
type Dot = {
    x: number; y: number; vx: number; vy: number;
    isVulnerable: boolean; isResolved: boolean; isSlatedForVulnerability?: boolean;
};
type IndexedDot = Dot & { index: number };
type Network = { dots: Dot[] };
type Patcher = { x: number; y: number; targetDot: Dot; trail: { x: number, y: number }[] };
type DustParticle = { x: number; y: number; r: number; s: number; o: number };
type AnimationState = "BUILDING" | "IDLE" | "SCANNING" | "ATTACK" | "RESOLVE" | "FADE";

/**
 * CyberSecurityAnimation
 * A client component that renders a cybersecurity-themed hero animation.
 */
export default function CyberSecurityAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hudRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const hud = hudRef.current;
        if (!canvas || !container || !hud) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let currentState: AnimationState = "BUILDING";
        let stateTimer = 0;
        let network: Network = { dots: [] };
        const scanner = { x: -200, lastX: -200 };
        let attackPath = { paths: [] as number[][], currentPathIndex: 0, currentSegmentIndex: 0, lastStepTime: 0 };
        let resolution = { patchers: [] as Patcher[] };
        let dustParticles: DustParticle[] = [];
        let rafId = 0;

        const resizeCanvas = () => {
            const rect = container.getBoundingClientRect();
            const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const setHud = (text: string) => {
            if (hud) hud.textContent = text;
        };

        const resetAnimation = () => {
            const rect = container.getBoundingClientRect();
            network = { dots: [] };
            dustParticles = [];
            for (let i = 0; i < ANIMATION_CONFIG.DUST_PARTICLE_COUNT; i++) {
                dustParticles.push({
                    x: Math.random() * rect.width, y: Math.random() * rect.height,
                    r: Math.random() * 1.5, s: 0.1 + Math.random() * 0.3, o: 0.05 + Math.random() * 0.1,
                });
            }
            currentState = "BUILDING";
            stateTimer = Date.now();
            setHud("Building Attack Surface...");
        };

        const drawBackground = () => {
            const rect = container.getBoundingClientRect();
            dustParticles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 255, 255, ${p.o})`;
                ctx.fill();
                p.x += (Math.random() - 0.5) * p.s;
                p.y += (Math.random() - 0.5) * p.s;
                if (p.x < 0) p.x = rect.width; if (p.y < 0) p.y = rect.height;
                if (p.x > rect.width) p.x = 0; if (p.y > rect.height) p.y = 0;
            });
        };

        const drawNode = (dot: Dot, time: number) => {
            const pulse = 1 + ANIMATION_CONFIG.PULSE_AMPLITUDE * (Math.sin(time / 400 + dot.x) + 1);
            const baseRadius = dot.isVulnerable ? 3 : 2;

            let color = COLORS.NODE_DEFAULT;
            if (dot.isResolved) color = COLORS.NODE_RESOLVED;
            else if (dot.isVulnerable) color = COLORS.NODE_VULNERABLE;

            // Outer glow
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, (baseRadius + 2) * pulse, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.2;
            ctx.fill();

            // Inner core
            ctx.beginPath();
            ctx.globalAlpha = 1;
            ctx.arc(dot.x, dot.y, baseRadius * pulse, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        };

        const drawAndAnimateNetwork = (time: number) => {
            const rect = container.getBoundingClientRect();
            network.dots.forEach((dot) => {
                dot.vx *= ANIMATION_CONFIG.DOT_DAMPING;
                dot.vy *= ANIMATION_CONFIG.DOT_DAMPING;
                dot.x += dot.vx; dot.y += dot.vy;
                if (dot.x < 10 || dot.x > rect.width - 10) dot.vx *= -1;
                if (dot.y < 10 || dot.y > rect.height - 10) dot.vy *= -1;
            });

            network.dots.forEach((dot) => {
                network.dots.forEach((otherDot) => {
                    const dist = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);
                    if (dist < ANIMATION_CONFIG.MAX_CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(otherDot.x, otherDot.y);
                        ctx.strokeStyle = COLORS.CONNECTION;
                        ctx.globalAlpha = Math.max(0, (1 - dist / ANIMATION_CONFIG.MAX_CONNECTION_DISTANCE)) * 0.5;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                });
            });

            network.dots.forEach((dot) => drawNode(dot, time));
        };

        // --- K-Means and Pathing (Unchanged) ---
        const performKMeansClustering = (dots: IndexedDot[], k: number): IndexedDot[][] => {
            const rect = container.getBoundingClientRect();
            let centroids = dots.slice(0, k).map((dot) => ({ x: dot.x, y: dot.y }));
            let clusters: IndexedDot[][] = [];

            for (let iter = 0; iter < 10; iter++) {
                clusters = Array.from({ length: k }, () => []);
                dots.forEach((dot) => {
                    const closestCentroidIndex = centroids.reduce((closestIndex, centroid, i, arr) => {
                        const dist = Math.hypot(dot.x - centroid.x, dot.y - centroid.y);
                        const closestDist = Math.hypot(dot.x - arr[closestIndex].x, dot.y - arr[closestIndex].y);
                        return dist < closestDist ? i : closestIndex;
                    }, 0);
                    clusters[closestCentroidIndex].push(dot);
                });

                centroids = clusters.map((cluster) => {
                    if (cluster.length === 0) return { x: Math.random() * rect.width, y: Math.random() * rect.height };
                    const { x, y } = cluster.reduce((acc, dot) => ({ x: acc.x + dot.x, y: acc.y + dot.y }), { x: 0, y: 0 });
                    return { x: x / cluster.length, y: y / cluster.length };
                });
            }
            return clusters;
        };

        const createPathWithinCluster = (cluster: IndexedDot[]) => {
            const unvisited = [...cluster];
            const path: number[] = [];
            if (unvisited.length > 0) {
                let currentDot = unvisited.shift()!;
                path.push(currentDot.index);
                while (unvisited.length > 0) {
                    const nearestIndex = unvisited.reduce((nearest, dot, i, arr) => {
                        const dist = Math.hypot(currentDot.x - dot.x, currentDot.y - dot.y);
                        const nearestDist = Math.hypot(currentDot.x - arr[nearest].x, currentDot.y - arr[nearest].y);
                        return dist < nearestDist ? i : nearest;
                    }, 0);
                    currentDot = unvisited[nearestIndex];
                    path.push(currentDot.index);
                    unvisited.splice(nearestIndex, 1);
                }
            }
            return path;
        };


        // --- Animation Stages ---
        const buildStage = () => {
            const rect = container.getBoundingClientRect();
            if (network.dots.length < ANIMATION_CONFIG.MAX_DOTS) {
                for (let i = 0; i < 10; i++) {
                    const newX = 10 + Math.random() * (rect.width - 20);
                    const newY = 10 + Math.random() * (rect.height - 20);
                    const isTooClose = network.dots.some(dot => Math.hypot(newX - dot.x, newY - dot.y) < ANIMATION_CONFIG.MIN_DOT_DISTANCE);
                    if (!isTooClose) {
                        network.dots.push({ x: newX, y: newY, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, isVulnerable: false, isResolved: false });
                        break;
                    }
                }
            }
            drawAndAnimateNetwork(Date.now());
            if (Date.now() - stateTimer > ANIMATION_CONFIG.STAGE_DURATIONS.BUILDING) {
                currentState = "IDLE";
                stateTimer = Date.now();
                setHud("Network Established. Monitoring...");
            }
        };

        const idleStage = () => {
            drawAndAnimateNetwork(Date.now());
            if (Date.now() - stateTimer > ANIMATION_CONFIG.STAGE_DURATIONS.IDLE) {
                currentState = "SCANNING"; stateTimer = Date.now(); scanner.x = -200; scanner.lastX = -200;
                network.dots.forEach((d) => (d.isSlatedForVulnerability = false));
                const shuffledIndices = network.dots.map((_, i) => i).sort(() => 0.5 - Math.random());
                const count = Math.min(network.dots.length - 1, Math.max(ANIMATION_CONFIG.MIN_VULNERABLE_NODES, Math.floor(network.dots.length * ANIMATION_CONFIG.VULNERABLE_NODE_PERCENTAGE)));
                for (let i = 0; i < count; i++) {
                    network.dots[shuffledIndices[i]].isSlatedForVulnerability = true;
                }
                setHud("Scanning for Vulnerabilities...");
            }
        };

        const scanStage = () => {
            const rect = container.getBoundingClientRect();
            const now = Date.now();
            const progress = Math.min((now - stateTimer) / ANIMATION_CONFIG.STAGE_DURATIONS.SCANNING, 1);
            drawAndAnimateNetwork(now);
            scanner.lastX = scanner.x; scanner.x = rect.width * progress;

            network.dots.forEach((dot) => {
                if (dot.isSlatedForVulnerability && !dot.isVulnerable && dot.x > scanner.lastX && dot.x <= scanner.x) {
                    dot.isVulnerable = true;
                }
            });

            const gradient = ctx.createLinearGradient(scanner.x - 120, 0, scanner.x, 0);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");
            ctx.fillStyle = gradient;
            ctx.fillRect(scanner.x - 120, 0, 120, rect.height);

            if (progress >= 1) {
                currentState = "ATTACK"; stateTimer = Date.now();
                attackPath = { paths: [], currentPathIndex: 0, currentSegmentIndex: 0, lastStepTime: 0 };
                const vulnerableDots = network.dots.map((d, i) => ({ ...d, index: i })).filter((d) => d.isVulnerable);
                if (vulnerableDots.length > 4) {
                    const k = Math.min(ANIMATION_CONFIG.ATTACK_CLUSTERS, Math.max(2, Math.floor(vulnerableDots.length / 5)));
                    const clusters = performKMeansClustering(vulnerableDots, k);
                    clusters.forEach((cluster) => { if (cluster.length > 1) attackPath.paths.push(createPathWithinCluster(cluster)); });
                }
                setHud("Analyzing Attack Vectors...");
            }
        };

        const attackStage = (timestamp: number) => {
            drawAndAnimateNetwork(timestamp);
            if (timestamp - attackPath.lastStepTime > ANIMATION_CONFIG.ATTACK_STEPS_INTERVAL) {
                attackPath.lastStepTime = timestamp;
                if (attackPath.currentPathIndex < attackPath.paths.length) {
                    attackPath.currentSegmentIndex++;
                    const currentPath = attackPath.paths[attackPath.currentPathIndex];
                    if (attackPath.currentSegmentIndex >= currentPath.length) {
                        attackPath.currentPathIndex++; attackPath.currentSegmentIndex = 1;
                    }
                }
            }

            const drawPath = (path: number[], maxSegment: number) => {
                for (let i = 0; i < maxSegment - 1; i++) {
                    const startNode = network.dots[path[i]];
                    const endNode = network.dots[path[i + 1]];
                    if (startNode && endNode) {
                        ctx.beginPath();
                        ctx.moveTo(startNode.x, startNode.y);
                        ctx.lineTo(endNode.x, endNode.y);
                        ctx.strokeStyle = COLORS.ATTACK_PATH;
                        ctx.lineWidth = 1.5;
                        ctx.shadowColor = COLORS.ATTACK_PATH;
                        ctx.shadowBlur = 10;
                        ctx.stroke();
                        ctx.shadowBlur = 0;
                        ctx.lineWidth = 1;
                    }
                }
            };

            for (let i = 0; i < attackPath.currentPathIndex; i++) drawPath(attackPath.paths[i], attackPath.paths[i].length);
            if (attackPath.currentPathIndex < attackPath.paths.length) drawPath(attackPath.paths[attackPath.currentPathIndex], attackPath.currentSegmentIndex);

            const isAttackFinished = attackPath.paths.length > 0 && attackPath.currentPathIndex >= attackPath.paths.length;
            if (isAttackFinished || Date.now() - stateTimer > ANIMATION_CONFIG.STAGE_DURATIONS.ATTACK) {
                currentState = "RESOLVE"; stateTimer = Date.now(); resolution = { patchers: [] };
                network.dots.forEach((d) => {
                    if (d.isVulnerable && !d.isResolved) {
                        for (let i = 0; i < ANIMATION_CONFIG.PATCHER_COUNT_PER_NODE; i++) {
                            resolution.patchers.push({ x: Math.random() * container.getBoundingClientRect().width, y: Math.random() * container.getBoundingClientRect().height, targetDot: d, trail: [] });
                        }
                    }
                });
                setHud("Deploying Countermeasures...");
            }
        };

        const resolveStage = () => {
            drawAndAnimateNetwork(Date.now());
            const allResolved = true;

            resolution.patchers.forEach((p) => {
                const dx = p.targetDot.x - p.x; const dy = p.targetDot.y - p.y;
                p.x += dx * 0.05; p.y += dy * 0.05;
                p.trail.unshift({ x: p.x, y: p.y });
                if (p.trail.length > 10) p.trail.pop();
                if (Math.hypot(dx, dy) < 5) p.targetDot.isResolved = true;

                // Draw Trail
                p.trail.forEach((pos, index) => {
                    ctx.beginPath();
                    const radius = (1 - index / p.trail.length) * 2.5;
                    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = COLORS.PATCHER;
                    ctx.globalAlpha = (1 - index / p.trail.length) * 0.5;
                    ctx.fill();
                });
                ctx.globalAlpha = 1;
            });

            if (network.dots.every(d => !d.isVulnerable || d.isResolved) || Date.now() - stateTimer > ANIMATION_CONFIG.STAGE_DURATIONS.RESOLVE) {
                currentState = "FADE"; stateTimer = Date.now(); setHud("System Secured.");
            }
        };

        const fadeStage = () => {
            const progress = Math.min((Date.now() - stateTimer) / ANIMATION_CONFIG.STAGE_DURATIONS.TRANSITION, 1);
            drawAndAnimateNetwork(Date.now());
            ctx.fillStyle = `rgba(0,0,0,${progress})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (progress >= 1) resetAnimation();
        };

        const animate = (ts: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            switch (currentState) {
                case "BUILDING": buildStage(); break; case "IDLE": idleStage(); break;
                case "SCANNING": scanStage(); break; case "ATTACK": attackStage(ts); break;
                case "RESOLVE": resolveStage(); break; case "FADE": fadeStage(); break;
            }
            rafId = window.requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        resetAnimation();
        rafId = window.requestAnimationFrame(animate);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener("resize", resizeCanvas);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="hero w-full h-full bg-slate-900">
            <div className="hero-row-2">
                <div id="hud" ref={hudRef} className="hud"></div>
                <div id="animation-container" ref={containerRef} className="animation-container">
                    <canvas ref={canvasRef} className="canvas" />
                </div>
            </div>

            <style jsx>{`
                .hero {
                    display: flex; flex-direction: column;
                    height: 80vh; padding: 20px;
                    overflow: hidden; background-color: #000;
                    color: white; font-family: 'Courier New', Courier, monospace;
                }
                .hero-row-2 {
                    display: flex; flex-direction: column;
                    align-items: center; margin-top: 20px; width: 100%;
                }
                .hud {
                    font-size: 1.6em; font-family: 'Quicksand', sans-serif;
                    color: #fff; min-height: 2em; margin-bottom: 6px;
                    user-select: none; letter-spacing: 1px; white-space: nowrap;
                    overflow: hidden; text-overflow: ellipsis; max-width: 95vw;
                }
                .animation-container {
                    width: 150vh; height: 50vh;
                    margin: 0px auto 0; position: relative;
                }
                .animation-container::after {
                    content: ''; position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%);
                }
                .canvas {
                    width: 100%; height: 100%;
                }
                @media (max-width: 700px) {
                    .animation-container { height: 50vh; }
                    .hud { font-size: 1.3em; }
                }
                @media (min-width: 1600px) {
                    .animation-container { height: 70vh; }
                    .hud { font-size: 1.8em; }
                }
            `}</style>
        </div>
    );
}