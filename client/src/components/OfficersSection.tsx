import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Search } from "lucide-react";

// Use the team images we downloaded
import img1 from "@/assets/team_1.jpg";
import img2 from "@/assets/team_2.jpg";
import img3 from "@/assets/team_3.jpg";
// Re-use hero for variety
import img4 from "@/assets/hero-finance.png";
import { ImageAsset } from "@/data/image";

export default function OfficersSection() {
  const officers = [
  {
    name: "Dr. Kayode Olushola Fasua",
    credentials: ["FCNA", "FCTI"],
    title: "Managing Partner",
    initials: "KF",
    color: "#E65100",
    src:"",
    alt:""
  },
  {
    name: "S. A. Apanpa",
    credentials: ["FCNA", "FCTI"],
    title: "Principal Officer",
    initials: "SA",
    color: "#1565C0",
    src:"",
    alt:""
  },
  {
    name: "Adejoh Otama Elias",
    credentials: ["FCNA", "ACTI"],
    title: "Principal Officer",
    initials: "AE",
    color: "#1B5E20",
    src:"",
    alt:""
  },
  {
    name: "S. A. Kure",
    credentials: ["CNA", "ACTI"],
    title: "Principal Officer",
    initials: "SK",
    color: "#4A148C",
    src:"",
    alt:""
  },
  {
    name: "Dr. Adedotun Apanpa",
    credentials: ["CNA", "CCrFA"],
    title: "Principal Officer",
    initials: "DA",
    color: "#B71C1C",
    src:"",
    alt:""
  },
  {
    name: "Ranti Fagbola",
    credentials: ["CNA", "ACTI"],
    title: "Principal Officer",
    initials: "RF",
    color: "#006064",
    src:"",
    alt:""
  },
  {
    name: "Danzy Yassar Asogya",
    credentials: ["CNA", "ACTI"],
    title: "Principal Officer",
    initials: "DY",
    color: "#E65100",
    src:"",
    alt:""
  },
  {
    name: "Orjiir Gbande",
    credentials: ["CNA"],
    title: "Principal Officer",
    initials: "OG",
    color: "#37474F",
    src:"",
    alt:""
  },
];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
            Our Environment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nine Principal Officers
          </h2>
          <p className="text-muted-foreground text-lg">
            They have behind them wealth of several years of diverse experience
            in professional practice, industry, commerce and financial
            institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map((officer, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={officer.src || ImageAsset.about}
                    alt={officer.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Search className="h-6 w-6" />
                    </div>
                  </div> */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-serif font-bold text-lg">
                      {officer.alt}
                    </p>
                    <p className="text-emerald-300 text-sm">{officer.name}</p>
                    <p className="text-emerald-300 text-sm">{officer.title}</p>

                     {/* Credentials */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {officer.credentials.map((c) => (
                          <span
                            key={c}
                            style={{
                              background: `${officer.color}18`,
                              border: `1px solid ${officer.color}40`,
                              color: officer.color,
                              padding: "4px 10px", borderRadius: 2,
                              fontFamily: "monospace", fontSize: 10,
                              letterSpacing: "0.1em", fontWeight: 600,
                              transition: "background 0.2s",
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0">
                <img
                  src={officer.src || ImageAsset.about}
                  alt={officer.alt}
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
