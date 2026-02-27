import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team_1.jpg";
import teamImage2 from "@/assets/team_2.jpg";
import teamImage3 from "@/assets/team_3.jpg";
import { MissionAndVision } from "@/components/MissionAndVision";
import { ProfileComponent } from "@/components/ProfileComponent";
import { AboutComponent } from "@/components/AboutComponent";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: TrendingUp, value: "$2B+", label: "Assets Advised" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Kayode Fasua & Company</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             is a composite firm of Certified National Accountants, Management and Financial Consultants 
             offering unique professional services to organizations in Nigeria,
              including commercial, non-commercial, and government establishments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <AboutComponent />
              
      
      <MissionAndVision  />

      

      <ProfileComponent show_container={true} />

      
      {/* Values Section */}
      {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground">The principles that guide every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We adhere to the highest ethical standards. Transparency and honesty are the foundations of our practice." },
              { title: "Precision", desc: "In finance, details matter. We pride ourselves on accuracy and thoroughness in every audit and report." },
              { title: "Partnership", desc: "We are not just service providers; we are your partners in growth, dedicated to your long-term success." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}






      {/* Gallery Section */}
      {/* <GallerySection /> */}

      <Footer />
    </div>
  );
}
