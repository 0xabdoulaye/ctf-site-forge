
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Navbar } from "@/components/Navbar";
import { Accomplishments } from "@/components/Accomplishments";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Accomplishments />
      <About />
      <Team />
      <SocialNetworks />
      <Footer />
    </main>
  );
};

export default Index;
