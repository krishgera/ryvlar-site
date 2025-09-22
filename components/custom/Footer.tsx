import Link from "next/link";
import Image from "next/image";
import {Copyright} from "lucide-react";

export default function Footer() {
    return (
        <div className={"min-h-52 py-10 w-full border-t border-transparent  snap-start"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex flex-row items-center">
                            <Image src={"/dark.svg"} alt={"Ryvlar Logo"} height={30} width={30}
                                   className={"mr-2"}/>
                            <span className="-ml-3">yvlar</span>
                        </Link>
                        <p className="text-sm text-white/70">Ryvlar helps enterprises identify
                            exosures, monitor threats
                            and respond faster to digital risks.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Products</h3>
                        <Link href="/rem" className="text-sm text-white/70 hover:text-white">Digital Risk
                            Intelligence</Link>
                        <Link href="/asm" className="text-sm text-white/70 hover:text-white">Attack Surface
                            Management</Link>
                        <Link href="/ams" className="text-sm text-white/70 hover:text-white">Attacker Movement
                            Simulation</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <Link href="/about" className="text-sm text-white/70 hover:text-white">About Us</Link>
                        <Link href="/careers" className="text-sm text-white/70 hover:text-white">Careers</Link>
                        <Link href="/contact" className="text-sm text-white/70 hover:text-white">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <Link href="/privacypolicy" className="text-sm text-white/70 hover:text-white">Privacy
                            Policy</Link>
                        <Link href="/terms" className="text-sm text-white/70 hover:text-white">Terms of
                            Service</Link>
                        <Link href="/security"
                              className="text-sm text-white/70 hover:text-white">Security</Link>
                    </div>
                </div>
                <div
                    className="mt-8 py-8 border-t border-transparent flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-row items-center gap-2">
                        <Copyright className="h-4 w-4"/>
                        <span className="text-sm text-white/70">2025 Ryvlar Ltd. All rights reserved.</span>
                    </div>
                    <div className="flex flex-row gap-6">
                        <Link href="https://www.linkedin.com/company/ryvlar"
                              className="text-white/70 hover:text-white">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}