"use client";

import { Heart, Users, Globe, Zap, Shield, AlertTriangle, Star, ArrowRight, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import WorldMap from "@/components/ui/world-map";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useState } from "react";
import { DemoRequestForm } from "@/components/DemoRequestForm";

function DemoRequestModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center text-lg group px-6 py-6">
          Get a Demo
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-black/90 backdrop-blur-sm border-0 p-0 overflow-hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <DemoRequestForm onClose={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

const AboutUsPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            About Ryvlar
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Empowering organizations with next-generation digital risk protection and security intelligence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            At Ryvlar, we prioritize security-first solutions that empower organizations to anticipate, detect, and neutralize digital threats with confidence and reliability.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen py-20 flex items-center px-4 sm:px-6 lg:px-8 snap-start">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative p-8 bg-transparent border-white/10 hover:border-white/30 transition-colors duration-300 h-full overflow-hidden group">
              <div className="absolute inset-0 -z-10">
                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-7 h-7 text-white/90" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3 text-white/90">Integrity</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We uphold the highest standards of honesty and ethics in all our actions.
              </p>
            </Card>

            <Card className="relative p-8 bg-transparent border-white/10 hover:border-white/30 transition-colors duration-300 h-full overflow-hidden group">
              <div className="absolute inset-0 -z-10">
                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto">
                <Users className="w-7 h-7 text-white/90" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3 text-white/90">Collaboration</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Working together to achieve common goals and deliver exceptional results.
              </p>
            </Card>

            <Card className="relative p-8 bg-transparent border-white/10 hover:border-white/30 transition-colors duration-300 h-full overflow-hidden group">
              <div className="absolute inset-0 -z-10">
                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-7 h-7 text-white/90" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3 text-white/90">Innovation</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Continuously pushing boundaries to create cutting-edge security solutions.
              </p>
            </Card>

            <Card className="relative p-8 bg-transparent border-white/10 hover:border-white/30 transition-colors duration-300 h-full overflow-hidden group">
              <div className="absolute inset-0 -z-10">
                <GlowingEffect spread={60} glow={true} disabled={false} proximity={48} inactiveZone={0.1} movementDuration={3}/>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-7 h-7 text-white/90" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3 text-white/90">Global Impact</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Committed to making a positive difference worldwide through our technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-start">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
                  <Zap className="w-7 h-7 text-white/90" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-white/90">Real-Time Alerts</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Immediate notifications to keep you ahead of potential threats with minimal noise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
                  <Shield className="w-7 h-7 text-white/90" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-white/90">Advanced Analytics</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Deep insights through data-driven analysis for smarter security decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
                  <AlertTriangle className="w-7 h-7 text-white/90" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-white/90">Threat Intelligence</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Comprehensive threat data to anticipate and mitigate risks effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
                  <Star className="w-7 h-7 text-white/90" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-white/90">Custom Dashboards</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Tailored views to monitor what matters most to your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="min-h-0 h-auto pt-[20vh] py-12 sm:pt-[15vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 snap-start relative">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-3xl md:text-4xl font-light mb-4 sm:mb-6">
            Where We Operate
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
            Ryvlar operates globally, providing unparalleled digital risk protection and security intelligence across multiple continents and industries.
          </p>
          <div className="w-full h-[220px] sm:h-[300px] md:h-[350px] relative mb-6 sm:mb-8">
            <div className="relative w-full h-full">
              <WorldMap 
                dots={[
                  { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 51.5074, lng: -0.1278 } }, // NY to London
                  { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 48.8566, lng: 2.3522 } },  // NY to Paris
                  { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 35.6762, lng: 139.6503 } }, // NY to Tokyo
                  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 48.8566, lng: 2.3522 } },   // London to Paris
                  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 35.6762, lng: 139.6503 } }, // London to Tokyo
                  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 35.6762, lng: 139.6503 } },  // Paris to Tokyo
                  { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 1.3521, lng: 103.8198 } }, // NY to Singapore
                  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 1.3521, lng: 103.8198 } },  // London to Singapore
                  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 1.3521, lng: 103.8198 } },   // Paris to Singapore
                  { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 1.3521, lng: 103.8198 } }, // Tokyo to Singapore
                ]}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto px-2 sm:px-0 relative z-20">
            <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg">
              <div className="text-lg sm:text-xl font-light mb-1">10+</div>
              <div className="text-white/60 text-xs">Countries</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg">
              <div className="text-lg sm:text-xl font-light mb-1">24/7</div>
              <div className="text-white/60 text-xs">Security Ops</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg">
              <div className="text-lg sm:text-xl font-light mb-1">99.9%</div>
              <div className="text-white/60 text-xs">Uptime</div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-3 sm:p-4 rounded-lg">
              <div className="text-lg sm:text-xl font-light mb-1">100+</div>
              <div className="text-white/60 text-xs">Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 snap-start">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Ready to secure your digital future?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading organizations that trust Ryvlar for their security needs.
          </p>
          <DemoRequestModal />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-white/60 text-sm"> 2023 Ryvlar. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-white/60 hover:text-white/90 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white/90 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-white/60 hover:text-white/90 text-sm transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;