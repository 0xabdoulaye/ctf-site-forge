import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Accomplishments } from "@/components/Accomplishments";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-blue-50">
      <Navbar />
      <main>
        <Hero />
        <Accomplishments />
        <About />
        <Team />
        <SocialNetworks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;