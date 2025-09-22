"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Menu, X} from "lucide-react";
import {DemoRequestForm} from "./DemoRequestForm";
import {RainbowButton} from "@/components/magicui/rainbow-button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all font-[quicksand] duration-300 ${scrolled ? 'bg-black/80' : 'bg-transparent'} backdrop-blur-sm`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-start h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src={"/dark.svg"} alt="Ryvlar Logo" height={30} width={30} className="-mr-1"/>
                            <span className="text-xl font-semibold">yvlar</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 ml-12">
                        <Link href="/features" className="text-sm hover:text-zinc-300 transition-colors">
                            Features
                        </Link>
                        <Link href="/modules" className="text-sm hover:text-zinc-300 transition-colors">
                            Modules
                        </Link>
                        <Link href="/pricing" className="text-sm hover:text-zinc-300 transition-colors">
                            Pricing
                        </Link>
                        <Link href="/about" className="text-sm hover:text-zinc-300 transition-colors">
                            About
                        </Link>
                    </div>

                    <div className={"w-full"}/>

                    <div className="hidden md:flex items-center space-x-3">
                        <Button variant="ghost" size="sm" onClick={() => window.open("mailto:support@ryvlar.com")} className="text-sm">
                            Contact Us
                        </Button>
                        <DemoRequestForm/>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-md`}>
                <div className="px-4 pt-2 pb-4 space-y-2">
                    <Link
                        href="/features"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="/modules"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Modules
                    </Link>
                    <Link
                        href="/pricing"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <div className="pt-2 space-y-2 border-t border-white/10 mt-2">
                        <Link href={"mailto:support@ryvlar.com"}>
                            <Button variant={"outline"} className="w-full justify-center">
                                Contact Us
                            </Button>
                        </Link>
                        <div onClick={() => setIsOpen(false)}>
                            <DemoRequestForm/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


