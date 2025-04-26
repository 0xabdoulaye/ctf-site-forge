
import { Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <div className="matrix-bg min-h-screen flex items-center justify-center relative pt-16">
      <div className="text-center z-10 p-8">
        <Terminal className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Guinea Offensive Security
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
          Une équipe de professionnels curieux et passionnés par la cybersécurité en Guinée Conakry
        </p>
        <div className="neon-border border border-accent p-4 inline-block">
          <p className="text-accent">$ ./conquerir_le_cyberespace</p>
        </div>
      </div>
    </div>
  );
};
