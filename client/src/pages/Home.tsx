import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Images

import { AboutComponent } from "@/components/AboutComponent";
import { ServiceComponent } from "@/components/ServiceComponent";
import { ProfileComponent } from "@/components/ProfileComponent";
import OfficersSection from "@/components/OfficersSection";

export default function Home() {
  

 
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Preview Section */}
      <AboutComponent />

      {/* Services Section */}
      <ServiceComponent />


      {/* Profile section */}

      <ProfileComponent show_container={true} />

      {/* Officers section */}
      <OfficersSection />

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-secondary/30 h-1/2" /> {/* Half background */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-fg-card rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-emerald-400 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-5xl font-bold">Ready to Elevate Your Financial Strategy?</h2>
                <p className="text-emerald-100 text-lg leading-relaxed max-w-xl">
                  Schedule a consultation with our experts today. We'll analyze your current standing and map out a path to sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                    <p className="text-sm text-emerald-200 uppercase tracking-wider font-semibold">Call Us</p>
                    <p className="text-xl font-bold">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                    <p className="text-sm text-emerald-200 uppercase tracking-wider font-semibold">Email Us</p>
                    <p className="text-xl font-bold">contact@apexfinancial.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-1">
                 {/* Reusing Contact Form component but simpler styling context */}
                 <div className="bg-white rounded-lg p-2">
                   <ContactForm />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
