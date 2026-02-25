import { ImageAsset } from "@/data/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export const AboutComponent = () => {
  const features = [
    "Integrity",
    "Excellence",
    "Confidentiality",
    "Innovation",
    "Objectivity",
    "Commitment",
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl -z-10" />
            <img
              src={ImageAsset.about}
              alt="Our Team"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-l-4 border-primary">
              <p className="font-serif text-4xl font-bold text-primary mb-1">
                98%
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Client Retention Rate Over 10 Years
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                About our firm
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Integrity at the Core
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Kayode Fasua & Company is a composite firm of Certified National
              Accountants, Management and Financial Consultants offering unique
              professional services to organizations in Nigeria, including
              commercial, non-commercial, and government establishments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to providing insightful financial solutions,
              enhancing transparency, strengthening governance structures, and
              supporting our clients in achieving long-term financial
              stability."
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With nine principal officers bringing decades of diverse
              experience across professional practice, industry, commerce, and
              financial institutions, we deliver results grounded in technical
              excellence and ethical integrity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Registered with the Corporate Affairs Commission and fully
              licensed by the Association of National Accountants of Nigeria
              (ANAN), we operate in full compliance with regulatory standards.
            </p>
            <h3 className="text-3xl text-red-400">Our Core Values</h3>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
