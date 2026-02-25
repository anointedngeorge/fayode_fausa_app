import React from 'react'
import auditIcon from "@/assets/service-audit.png";
import taxIcon from "@/assets/service-tax.png";
import ServiceCard from "@/components/ServiceCard";
import advisoryIcon from "@/assets/service-advisory.png";
import teamImage from "@/assets/team_1.jpg";
import teamImage2 from "@/assets/team_2.jpg";
import { ImageAsset } from "@/data/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";






export const ServiceComponent = () => {


    const services = [
        {
          title: "Audit & Assurance",
          description: "High-quality audit services in accordance with International Standards on Auditing (ISA) and relevant regulatory frameworks, promoting transparency and accountability.",
          icon: auditIcon
        },
        {
          title: "Tax Planning",
          description: "Comprehensive tax planning, compliance, and advisory services to ensure regulatory compliance for clients across sectors while minimizing tax burden.",
          icon: taxIcon
        },
        {
          title: "Business Advisory",
          description: "Strategic financial advisory including risk assessment, capital structure analysis, investment analysis, and long-term financial stability planning.",
          icon: advisoryIcon
        },
        {
          title: "Forensic Accounting",
          description: "Expert forensic investigation, fraud detection and prevention, forensic auditing, and litigation support for organizations and regulatory bodies.",
          icon: advisoryIcon
        },
        {
          title: "Management Consulting",
          description: "Business performance analysis, financial modeling, organizational restructuring, and strategic planning to support sustainable growth.",
          icon: advisoryIcon
        },
        {
          title: "Public Sector Accounting",
          description: "Specialized IPSAS implementation, public financial management, government accountability frameworks, and fiscal policy advisory services.",
          icon: advisoryIcon
        },
    
    
    
      ];



  return (
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
  )
}
