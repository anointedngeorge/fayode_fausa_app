import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team_1.jpg";
import teamImage2 from "@/assets/team_2.jpg";
import teamImage3 from "@/assets/team_3.jpg";
import { MissionAndVision } from "@/components/MissionAndVision";
import { ProfileComponent } from "@/components/ProfileComponent";

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
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">About Apex Financial</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A legacy of trust, precision, and partnership. We go beyond the numbers to build lasting value for our clients.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Three Decades of Financial Excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 1995, Apex Financial began with a simple mission: to provide transparent, high-quality accounting services to local businesses. Today, we have grown into a premier financial advisory firm, serving international corporations, non-profits, and high-net-worth individuals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our approach combines traditional accounting rigor with modern financial technologies. We don't just report history; we help you shape your future through data-driven insights and strategic foresight.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-serif text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={teamImage2} alt="Office" className="rounded-lg shadow-lg w-full h-64 object-cover translate-y-8" />
              <img src={teamImage3} alt="Meeting" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
              
      
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
      <GallerySection />

      <Footer />
    </div>
  );
}
