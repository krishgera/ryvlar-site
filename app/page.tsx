"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShimmeringText } from "@/components/animate-ui/text/shimmering";
import Footer from "@/components/custom/Footer";

export default function Home() {
    useEffect(() => {
        const targets = document.querySelectorAll('.intersection-observer');

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); 
                        // Stop observing the element once the animation has triggered
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                // This threshold ensures the callback fires reliably
                // for elements already in the viewport on load.
                threshold: 0.1,
            }
        );

        targets.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => {
            targets.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div
            className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory font-[quicksand] items-center justify-start">
            {/* Hero Section */}
            <div
                className={"w-full h-full flex flex-col items-center justify-center pt-20 snap-start relative min-h-screen"}>
                <div className={'flex flex-col items-center relative border border-transparent p-10 rounded-xl '}>
                    <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                    {/*<h1 className={'text-5xl z-10 text-white mb-4 text-nowrap flex flex-row gap-2'}>*/}
                    {/*    Unified Intelligence. Real Risk. Clear Properties.*/}
                    {/*</h1>*/}
                    <ShimmeringText text={"Unified Intelligence. Real Risk. Clear Priorities."} className={"text-3xl md:text-5xl text-center px-2"}/>
                    {/* Desktop / Tablet version with lines */}
                    <div className="hidden md:flex flex-row z-10 w-full max-w-2xl items-center gap-10 mt-4 mb-8">
                        <div className="h-[1px] w-full bg-white/90"/>
                        <h1 className="text-xl text-white/70 text-center px-2 text-nowrap">Kevlar® level digital resilience.</h1>
                        <div className="h-[1px] w-full bg-white/90"/>
                    </div>
                    {/* Mobile plain text version */}
                    <div className="flex md:hidden z-10 w-full mt-4 mb-8">
                        <h1 className="text-base text-white/70 text-center px-4">Kevlar® level digital resilience.</h1>
                    </div>
                </div>
            </div>

            {/* Three Angles Section */}
            <div className={" z-20 w-full flex flex-col items-center justify-center snap-start"}>
                <div
                    className={"w-full flex flex-col justify-center items-center gap-4 z-10   pt-10 border-t border-white/20 min-h-screen"}>
                    <div className={"text-2xl md:text-4xl text-center mb-3 flex flex-row items-center gap-2 intersection-observer"}>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className=" dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <p> Three Angles </p>
                        </HoverBorderGradient>
                        <p> of Cyber Risk </p>
                    </div>
                    <div className={"flex flex-col md:flex-row items-start justify-center gap-6 md:gap-2 w-full px-4 intersection-observer"}>
                        <Card
                            className={"flex flex-col relative w-full h-full max-w-md items-center px-8 py-6 bg-black border-none rounded-xl"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <CardTitle className={"text-2xl font-thin text-nowrap"}>
                                Digital Risk Intelligence
                            </CardTitle>
                            <Separator className={"bg-gradient-to-r from-white/20 via-white to-white/20 -my-2 "}/>
                            <CardDescription className={"text-justify"}>
                                Stay ahead of breaches and leaks with continuous monitoring of stolen credentials,
                                sensitive data, and dark-web chatter. Gain early warnings of threats targeting your
                                organization, vendors, or employees, before threat actors can exploit them.
                            </CardDescription>
                            <Button variant={"secondary"}
                                    className={"mt-auto bg-transparent items-center flex flex-row border-white/50 font-thin border"}>
                                <h1>Explore</h1>
                                <ArrowRight className={"font-thin text-white/60"}/>
                            </Button>
                        </Card>
                        <Card
                            className={"flex flex-col relative w-full max-w-md items-center px-8 py-6 bg-black border-none rounded-xl"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <CardTitle className={"text-2xl font-thin text-nowrap"}>
                                External Attack Surface Management
                            </CardTitle>
                            <Separator
                                className={"bg-gradient-to-r from-white/20 via-white  to-white/20 -my-2 "}/>
                            <CardDescription className={"text-justify"}>
                                Bring exposures and assets into one auditable workspace for investigating and,
                                reporting. Validate risks with evidence, prioritize what matters, and give security
                                leaders the context needed for fast, confident decisions.
                            </CardDescription>
                            <Button variant={"secondary"}
                                    className={" mt-auto bg-transparent items-center flex flex-row border-white/50 font-thin border"}>
                                <h1>Explore</h1>
                                <ArrowRight className={"font-thin text-white/60"}/>
                            </Button>
                        </Card>
                        <Card
                            className={"flex flex-col relative w-full h-full max-w-md items-center px-8 py-6 bg-black border-none rounded-xl"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <CardTitle className={"text-2xl font-thin text-nowrap"}>
                                Evidence Workspace
                            </CardTitle>
                            <Separator className={"bg-gradient-to-r from-white/20 via-white to-white/20 -my-2 "}/>
                            <CardDescription className={"text-justify"}>
                                Bring exposures and assets into one auditable workspace for invesitgating and
                                reporting. Validate risks with evidence, prioritize what matters, and give security
                                leaders the context needed for fast, confident decisions.
                            </CardDescription>
                            <Button variant={"secondary"}
                                    className={"bg-transparent mt-auto items-center flex flex-row border-white/50 font-thin border"}>
                                <h1>Explore</h1>
                                <ArrowRight className={"font-thin text-white/60"}/>
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Key Capabilities Section */}
            <div className={"bg-black z-20 px-2 w-full flex flex-col items-center justify-center snap-start"}>
                <div className={"w-full flex flex-col items-center justify-center py-20 min-h-screen"}>
                    <h1 className={"text-cyan-300 mt-10 intersection-observer"}>Key Capabilities</h1>
                    <div
                        className={"flex flex-row w-full max-w-7xl items-center gap-10 z-10 mt-2 mb-4 intersection-observer"}>
                        <div className={"h-[1px] w-full bg-white"}/>
                        <h1 className={"whitespace-nowrap text-2xl md:text-4xl text-center"}>What Ryvlar Delivers</h1>
                        <div className={"h-[1px] w-full bg-white"}/>
                    </div>
                    <h1 className={"text-center text-white/70 max-w-lg intersection-observer"}>Ryvlar is a
                        next-generation Digital Risk Platform
                        aimed
                        for small to medium sized enterprises in tackling emerging threats.</h1>
                    <div className={"mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto"}>
                        <div
                            className={"flex flex-col ml-auto max-w-md items-center gap-4 relative transition-all p-10 rounded-xl duration-300 intersection-observer"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <Image src={"/icons/lucide/mouse-pointer-click.svg"} alt={"cctv"} width={80} height={80}/>
                            <h1 className={"text-2xl"}>Breach Monitoring</h1>
                            <p className={"text-white/70 text-justify text-sm"}>Instantly detect exposed credentials and data leaks
                                tied to your domains and employees.
                                Stay ahead of breaches
                                before attackers
                                weaponize them.</p>
                        </div>
                        <div
                            className={"flex flex-col mr-auto max-w-md items-center gap-4 p-10 rounded-xl relative intersection-observer"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <Image src={"/icons/lucide/git-graph.svg"} alt={"cctv"} width={80} height={80}/>
                            <h1 className={"text-2xl"}>Threat Intelligence</h1>
                            <p className={"text-white/70 text-justify text-sm"}>Track dark-web chatter and threat actor
                                activity relevant to your organization. Gain actionable context on emerging risks, not noise.</p>
                        </div>
                        <div
                            className={"flex flex-col ml-auto max-w-md items-center gap-4 p-10 rounded-xl relative intersection-observer"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <Image src={"/icons/lucide/brain-circuit.svg"} alt={"cctv"} width={80} height={80}/>
                            <h1 className={"text-2xl"}>Domain Intelligence</h1>
                            <p className={"text-white/70 text-justify text-sm"}>Continuously map your external attack surface-
                                domains, subdomains, and
                                exposed services, so you see what attackers sees.</p>
                        </div>
                        <div
                            className={"flex flex-col mr-auto max-w-md items-center gap-4 p-10 rounded-xl relative intersection-observer"}>
                            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                            <Image src={"/icons/lucide/circle-gauge.svg"} alt={"cctv"} width={80} height={80}/>
                            <h1 className={"text-2xl"}>Evidence Board</h1>
                            <p className={"text-white/70 text-justify text-sm"}>Visualize and connect findings across
                                assets, leaks, and threats
                                in one investigation board. Simplify incident response and reporting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    );
}
