"use client";

import { ShimmeringText } from "@/components/animate-ui/text/shimmering";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Lock, EyeOff, Server, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SecurityCompliancePage() {
    const complianceFrameworks = [
        {
            name: "SOC 2 Type II",
            description: "Ryvlar maintains SOC 2 Type II compliance, ensuring the highest standards of security, availability, and confidentiality for your data.",
            icon: <Shield className="w-8 h-8 text-cyan-400" />
        },
        {
            name: "ISO 27001",
            description: "Our Information Security Management System (ISMS) is ISO 27001 certified, demonstrating our commitment to information security best practices.",
            icon: <Lock className="w-8 h-8 text-cyan-400" />
        },
        {
            name: "GDPR",
            description: "We comply with the General Data Protection Regulation (GDPR) to protect the data privacy rights of all EU citizens.",
            icon: <EyeOff className="w-8 h-8 text-cyan-400" />
        },
        {
            name: "HIPAA",
            description: "For healthcare organizations, we offer HIPAA-compliant solutions to protect sensitive patient health information.",
            icon: <FileText className="w-8 h-8 text-cyan-400" />
        },
        {
            name: "NIST CSF",
            description: "Our security controls align with the NIST Cybersecurity Framework to manage and reduce cybersecurity risks.",
            icon: <Server className="w-8 h-8 text-cyan-400" />
        }
    ];

    const securityFeatures = [
        "End-to-end encryption for data in transit and at rest",
        "Multi-factor authentication (MFA) for all user accounts",
        "Regular third-party security audits and penetration testing",
        "Continuous monitoring and threat detection",
        "Role-based access control (RBAC)",
        "Regular security awareness training for all employees",
        "Incident response and business continuity planning"
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-900/20 to-black">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <ShimmeringText text="Security & Compliance" className="text-4xl md:text-6xl" />
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto">
                        Enterprise-grade security and compliance to protect your most sensitive data
                    </p>
                </div>
            </div>

            {/* Security Overview */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="text-cyan-400">Security</span> First Approach
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                At Ryvlar, security isn&#39;t just a feature—it&#39;s the foundation of everything we build.
                                Our platform is designed with multiple layers of security to protect your data and 
                                ensure continuous compliance with industry standards.
                            </p>
                            <div className="space-y-4 mt-8">
                                {securityFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <Check className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <p className="text-white/90">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="relative w-full h-full">
                                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-3xl" />
                                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10">
                                            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                                            <p className="text-white/70 text-sm">Protecting your data with industry-leading security measures</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Frameworks */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Compliance <span className="text-cyan-400">Standards</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            We maintain the highest industry standards to ensure your data is always protected
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {complianceFrameworks.map((framework, index) => (
                            <Card key={index} className="p-6 bg-black/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full">
                                <div className="flex items-center mb-4">
                                    {framework.icon}
                                    <h3 className="text-xl font-semibold ml-3">{framework.name}</h3>
                                </div>
                                <p className="text-white/70">{framework.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Centers & Infrastructure */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="relative w-full h-full">
                                    <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-3xl" />
                                    <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <Server className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                                            <h3 className="text-2xl font-semibold mb-2">Global Infrastructure</h3>
                                            <p className="text-white/70">Hosted in top-tier, SOC 2 Type II compliant data centers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Secure <span className="text-cyan-400">Infrastructure</span>
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                Ryvlar&#39;s infrastructure is built on a foundation of security and reliability,
                                with multiple layers of protection to ensure your data is always secure and available.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-black/40 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-cyan-400 mb-2">99.99%</div>
                                    <p className="text-sm text-white/70">Uptime SLA</p>
                                </div>
                                <div className="p-4 bg-black/40 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-cyan-400 mb-2">256-bit</div>
                                    <p className="text-sm text-white/70">Encryption</p>
                                </div>
                                <div className="p-4 bg-black/40 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
                                    <p className="text-sm text-white/70">Security Monitoring</p>
                                </div>
                                <div className="p-4 bg-black/40 rounded-lg border border-white/10">
                                    <div className="text-2xl font-bold text-cyan-400 mb-2">30+</div>
                                    <p className="text-sm text-white/70">Global Data Centers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Have questions about our security?
                    </h2>
                    <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                        Our security team is ready to answer any questions you may have about our 
                        security practices and compliance certifications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg">
                            Contact Security Team
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg">
                            Request Compliance Documents
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
