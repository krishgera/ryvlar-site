// This file will contain all your main page content.
"use client";

import Image from "next/image";
import { ArrowRight, Copyright } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Flip3D } from "@/components/ui/3d-flip";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";

const HomeContent = () => {
    // Paste all the JSX from your original page.tsx file here.
    return (
        <>
            {/* Hero Section */}
            <Flip3D direction="up">
              <div className="w-full flex flex-col items-center justify-center pt-16 sm:pt-20 relative min-h-[80vh] sm:min-h-screen px-4 sm:px-6">
                <div className="flex flex-col items-center relative border border-transparent p-6 sm:p-10 rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
                    <div className="absolute inset-0 -z-10">
                        <GlowingEffect 
                            spread={60} 
                            glow={true} 
                            disabled={false} 
                            proximity={48} 
                            inactiveZone={0.5} 
                            movementDuration={3}
                        />
                    </div>
                    <h1 className="text-3xl sm:text-5xl z-10 text-white mb-4 text-center font-light leading-tight">
                        Unified Intelligence.<br className="sm:hidden"/>
                        <span className="hidden sm:inline"> </span>Real Risk.<br className="sm:hidden"/>
                        <span className="hidden sm:inline"> </span>Clear Properties.
                    </h1>
                    <div className="flex flex-col sm:flex-row w-full max-w-2xl items-center gap-4 sm:gap-10 mt-4 sm:mt-6 mb-6 sm:mb-8">
                        <div className="hidden sm:block h-[1px] w-full bg-white/90"/>
                        <p className="text-sm sm:text-base md:text-xl text-white/70 text-center">
                            Kevlar® level digital resilience.<br className="sm:hidden"/>
                            <span className="hidden sm:inline"> </span>Focus On Real &#34;Threat&#34;.
                        </p>
                        <div className="hidden sm:block h-[1px] w-full bg-white/90"/>
                    </div>
                </div>
              </div>
            </Flip3D>

            {/* Three Angles Section */}
            <Flip3D direction="right">
              <div className={"bg-black w-full flex flex-col items-center justify-center z-20"}>
                <div className="w-full flex flex-col justify-center items-center gap-6 sm:gap-8 pt-10 sm:pt-16 border-t border-white/20 min-h-screen px-4 sm:px-6">
                    <h1 className="text-2xl sm:text-4xl text-center font-light">
                        <HoverBorderGradient
                            containerClassName="rounded-full mx-auto sm:inline-block"
                            as="div"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2 sm:py-1 mb-2 sm:mb-0"
                        >
                            <p className="text-sm sm:text-base">Three Angles</p>
                        </HoverBorderGradient>
                        <span className="block sm:inline-block mt-2 sm:mt-0 sm:ml-2">of Cyber Risk</span>
                    </h1>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
                            {/* Card 1 */}
                            <Card className="relative rounded-xl overflow-hidden group h-full bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="absolute inset-0 -z-10">
                                    <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                                </div>
                                <div className="p-6 sm:p-8 h-full flex flex-col">
                                    <CardTitle className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
                                        Digital Risk Intelligence
                                    </CardTitle>
                                    <Separator className="bg-white/20 mb-3 sm:mb-4"/>
                                    <CardDescription className="text-sm sm:text-base text-white/70 flex-grow">
                                        Get intelligence on potential threats affecting your brand. From vendor risk 
                                        management to darkweb monitoring.
                                    </CardDescription>
                                    <Button variant="secondary" className="mt-4 bg-transparent items-center flex flex-row border-white/50 font-thin border">
                                        <span>Explore</span>
                                        <ArrowRight className="ml-2 font-thin text-white/60"/>
                                    </Button>
                                </div>
                            </Card>

                            {/* Card 2 */}
                            <Card className="relative rounded-xl overflow-hidden group h-full bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="absolute inset-0 -z-10">
                                    <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                                </div>
                                <div className="p-6 sm:p-8 h-full flex flex-col">
                                    <CardTitle className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
                                        Attack Surface Management
                                    </CardTitle>
                                    <Separator className="bg-white/20 mb-3 sm:mb-4"/>
                                    <CardDescription className="text-sm sm:text-base text-white/70 flex-grow">
                                        Continuously identify, monitor, and manage potential vulnerabilities across your digital
                                        assets. Reduce security risks by addressing exposure points before they can be exploited.
                                    </CardDescription>
                                    <Button variant="secondary" className="mt-4 bg-transparent items-center flex flex-row border-white/50 font-thin border">
                                        <span>Explore</span>
                                        <ArrowRight className="ml-2 font-thin text-white/60"/>
                                    </Button>
                                </div>
                            </Card>

                            {/* Card 3 */}
                            <Card className="relative rounded-xl overflow-hidden group h-full bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="absolute inset-0 -z-10">
                                    <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                                </div>
                                <div className="p-6 sm:p-8 h-full flex flex-col">
                                    <CardTitle className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
                                        Attacker Movement Simulation
                                    </CardTitle>
                                    <Separator className="bg-white/20 mb-3 sm:mb-4"/>
                                    <CardDescription className="text-sm sm:text-base text-white/70 flex-grow">
                                        Simulate an attacker&#39;s potential movement across your infrastructure to
                                        surgically mitigate the most important vulnerabilities.
                                    </CardDescription>
                                    <Button variant="secondary" className="mt-4 bg-transparent items-center flex flex-row border-white/50 font-thin border">
                                        <span>Explore</span>
                                        <ArrowRight className="ml-2 font-thin text-white/60"/>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
              </div>
            </Flip3D>

            {/* Key Capabilities Section */}
            <Flip3D direction="left">
              <div className="w-full flex flex-col items-center justify-center z-20 bg-neutral-900">
                <div className="w-full flex flex-col items-center justify-center py-12 sm:py-20 min-h-screen px-4 sm:px-6">
                    <h1 className="text-cyan-300 text-sm sm:text-base font-medium tracking-wider">KEY CAPABILITIES</h1>
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mt-4 max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-4xl font-light leading-tight">
                            Comprehensive Security Intelligence
                        </h2>
                        <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-cyan-500 my-2 sm:my-4"></div>
                        <p className="text-sm sm:text-base text-white/60 max-w-2xl">
                            Our platform provides end-to-end security intelligence to protect your organization from evolving threats.
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6">
                        {/* Capability Card 1 */}
                        <div className="flex flex-col items-center gap-4 relative p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="absolute inset-0 -z-10">
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-full">
                                <Image 
                                    src={"/icons/lucide/mouse-pointer-click.svg"} 
                                    alt="Breach Monitoring" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 sm:w-16 sm:h-16"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-center">Breach Monitoring</h3>
                            <p className="text-white/70 text-center text-sm sm:text-base">
                                Instantly detect exposed credentials and data leaks tied to your domains
                                and employees. Stay ahead of breaches before attackers weaponize them.
                            </p>
                        </div>

                        {/* Capability Card 2 */}
                        <div className="flex flex-col items-center gap-4 relative p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="absolute inset-0 -z-10">
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-full">
                                <Image 
                                    src={"/icons/lucide/git-graph.svg"} 
                                    alt="Dynamic Dashboards" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 sm:w-16 sm:h-16"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-center">Threat Intelligence</h3>
                            <p className="text-white/70 text-center text-sm sm:text-base">
                                Track dark-web chatter and threat actor activity relevant to your organization.
                                Gain actionable context on emerging risks, not noise.
                            </p>
                        </div>

                        {/* Capability Card 3 */}
                        <div className="flex flex-col items-center gap-4 relative p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="absolute inset-0 -z-10">
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-full">
                                <Image 
                                    src={"/icons/lucide/brain-circuit.svg"} 
                                    alt="AI Analysis" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 sm:w-16 sm:h-16"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-center">Domain Intelligence</h3>
                            <p className="text-white/70 text-center text-sm sm:text-base">
                                Continuously map your external attack surface- domains, subdomains, and exposed services,
                                so you see what attackers sees.
                            </p>
                        </div>
                        {/* Capability Card 4 */}
                        <div className="flex flex-col items-center gap-4 relative p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="absolute inset-0 -z-10">
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-full">
                                <Image 
                                    src={"/icons/lucide/shield-check.svg"} 
                                    alt="Compliance" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 sm:w-16 sm:h-16"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-center">Evidence Board</h3>
                            <p className="text-white/70 text-center text-sm sm:text-base">
                                Visualize and connect findings across assets, leaks, and threats in one investigation board.
                                Simplify incident response and reporting.
                            </p>
                        </div>
                        {/* Capability Card 5 */}
                        <div className="flex flex-col items-center gap-4 relative p-6 sm:p-8 rounded-xl bg-black/20 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="absolute inset-0 -z-10">
                                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
                            </div>
                            <div className="p-4 bg-cyan-500/10 rounded-full">
                                <Image 
                                    src={"/icons/lucide/circle-gauge.svg"} 
                                    alt="Threat Analysis" 
                                    width={60} 
                                    height={60}
                                    className="w-12 h-12 sm:w-16 sm:h-16"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-center">Real-time Threat Analysis</h3>
                            <p className="text-white/70 text-center text-sm sm:text-base">
                                Real-time alerting and monitoring of assets, adversaries and emerging threats.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            </Flip3D>

            {/* Footer Section */}
            <Flip3D direction="up">
              <div className={"min-h-52 py-10 w-full border-t border-transparent bg-[#111] z-20"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="flex flex-row items-center">
                                <Image src={"/dark.svg"} alt={"Ryvlar Logo"} height={30} width={30} className={"mr-2"}/>
                                <span className="-ml-3">yvlar</span>
                            </Link>
                            <p className="text-sm text-white/70">
                                Ryvlar helps enterprises identify exposures, monitor threats, and respond faster
                                to digital risks.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Products</h3>
                            <Link href="/rem" className="text-sm text-white/70 hover:text-white">
                                Digital Risk Intelligence
                            </Link>
                            <Link href="/asm" className="text-sm text-white/70 hover:text-white">
                                Attack Surface Management
                            </Link>
                            <Link href="/ams" className="text-sm text-white/70 hover:text-white">
                                Attacker Movement Simulation
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <Link href="/about" className="text-sm text-white/70 hover:text-white">About Us</Link>
                            <Link href="/careers" className="text-sm text-white/70 hover:text-white">Careers</Link>
                            <Link href="/contact" className="text-sm text-white/70 hover:text-white">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">Privacy Policy</Link>
                            <Link href="/terms" className="text-sm text-white/70 hover:text-white">Terms of Service</Link>
                            <Link href="/security" className="text-sm text-white/70 hover:text-white">Security</Link>
                        </div>
                    </div>
                    <div className="mt-8 py-8 border-t border-transparent flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-row items-center gap-2">
                            <Copyright className="h-4 w-4"/>
                            <span className="text-sm text-white/70">2025 Ryvlar Ltd. All rights reserved.</span>
                        </div>
                        <div className="flex flex-row gap-6">
                            <Link href="https://www.linkedin.com/company/ryvlar" className="text-white/70 hover:text-white">
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </Flip3D>
        </>
    );
};

export default HomeContent;