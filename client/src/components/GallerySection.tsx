import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Search } from "lucide-react";

// Use the team images we downloaded
import img1 from "@/assets/team_1.jpg";
import img2 from "@/assets/team_2.jpg";
import img3 from "@/assets/team_3.jpg";
// Re-use hero for variety
import img4 from "@/assets/hero-finance.png"; 

export default function GallerySection() {
  const images = [
    { src: img1, alt: "Executive Team Meeting", category: "Our Team" },
    { src: img4, alt: "Headquarters Lobby", category: "Office" },
    { src: img2, alt: "Client Consultation", category: "Services" },
    { src: img3, alt: "Annual Strategy Session", category: "Events" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", alt: "Corporate Office Exterior", category: "Office" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop", alt: "Team Collaboration", category: "Culture" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Environment</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Life at Apex Financial</h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our workspace, our people, and the culture of excellence we cultivate every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Search className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-serif font-bold text-lg">{img.alt}</p>
                    <p className="text-emerald-300 text-sm">{img.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
