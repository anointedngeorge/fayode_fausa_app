import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Images
import auditIcon from "@/assets/service-audit.png";
import taxIcon from "@/assets/service-tax.png";
import advisoryIcon from "@/assets/service-advisory.png";
import teamImage from "@/assets/team_1.jpg";
import teamImage2 from "@/assets/team_2.jpg";

export default function Home() {
  const services = [
    {
      title: "Audit & Assurance",
      description: "Rigorous independent audits that provide clarity and confidence to stakeholders.",
      icon: auditIcon
    },
    {
      title: "Tax Planning",
      description: "Strategic tax optimization to minimize liability and ensure full compliance.",
      icon: taxIcon
    },
    {
      title: "Business Advisory",
      description: "Data-driven insights to drive growth, efficiency, and market expansion.",
      icon: advisoryIcon
    }
  ];

  const features = [
    "Certified Public Accountants (CPA)",
    "30+ Years of Experience",
    "Tailored Financial Strategies",
    "Global Regulatory Compliance"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Preview Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-tl-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl -z-10" />
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-l-4 border-primary">
                <p className="font-serif text-4xl font-bold text-primary mb-1">98%</p>
                <p className="text-sm text-muted-foreground font-medium">Client Retention Rate Over 10 Years</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">About Apex Financial</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Driving Financial Success With Precision & Integrity
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Apex Financial, we believe that numbers tell a story. Our mission is to help you write a success story through meticulous accounting, strategic planning, and unwavering commitment to your financial health.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">World-Class Financial Solutions</h2>
            <p className="text-muted-foreground text-lg">
              We offer a comprehensive suite of services designed to meet the complex needs of modern businesses and high-net-worth individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <a className="inline-flex items-center text-primary font-semibold hover:underline">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-secondary/30 h-1/2" /> {/* Half background */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
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
