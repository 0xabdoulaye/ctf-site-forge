
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Contact />
    </main>
  );
};

export default Index;
