import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import generated hero image
import heroImage from "@/assets/hero-finance.png";

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const slides = [
    {
      image: heroImage,
      title: "Trusted Financial Excellence in Nigeria",
      subtitle: "A composite firm of Certified National Accountants delivering exceptional audit, taxation, and financial advisory services to commercial, non-commercial, and government organizations across Nigeria.",
      cta: "Explore Services",
      link: "/services"
    }
  ];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-[600px] md:h-[700px]">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-2xl space-y-6 animate-in slide-in-from-left-10 duration-700 fade-in">
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-slate-100/90 font-light max-w-lg drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  {/* <div className="pt-4">
                    <Link href={slide.link}>
                      <Button size="lg" className="text-base px-8 py-6 rounded-none border-2 border-primary bg-primary hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl">
                        {slide.cta}
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 bg-transparent text-white border-white/30 hover:bg-white/20" />
          <CarouselNext className="right-8 bg-transparent text-white border-white/30 hover:bg-white/20" />
        </div>
      </Carousel>
    </section>
  );
}
