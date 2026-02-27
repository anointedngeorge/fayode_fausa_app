import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Reuse icons
import auditIcon from "@/assets/service-audit.png";
import taxIcon from "@/assets/service-tax.png";
import advisoryIcon from "@/assets/service-advisory.png";
import { ServiceComponent } from "@/components/ServiceComponent";

export default function Services() {
  const allServices = [
    {
      title: "Audit & Assurance",
      description: "Comprehensive financial statement audits, reviews, and compilations ensuring accuracy and regulatory compliance.",
      icon: auditIcon
    },
    {
      title: "Corporate Tax Planning",
      description: "Strategic tax planning to minimize liabilities while maintaining full compliance with evolving tax laws.",
      icon: taxIcon
    },
    {
      title: "Business Advisory",
      description: "Strategic consulting for mergers, acquisitions, and operational efficiency improvements.",
      icon: advisoryIcon
    },
    {
      title: "Forensic Accounting",
      description: "Investigative accounting services for litigation support and fraud detection.",
      icon: auditIcon // Reusing for demo
    },
    {
      title: "Wealth Management",
      description: "Personalized investment strategies and estate planning for high-net-worth individuals.",
      icon: taxIcon // Reusing for demo
    },
    {
      title: "Payroll & Bookkeeping",
      description: "Full-service payroll processing and monthly bookkeeping to keep your operations running smoothly.",
      icon: advisoryIcon // Reusing for demo
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique business needs.
          </p>
        </div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </div>

      <ServiceComponent />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss how we can tailor our services to meet your specific financial goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="shadow-lg">Get in Touch</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
