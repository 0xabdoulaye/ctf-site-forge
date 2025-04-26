
import { Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <div className="matrix-bg min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 p-8">
        <Terminal className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          ByteBreachers
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8">
          Elite CTF Team | Breaking Boundaries in CyberSecurity
        </p>
        <div className="neon-border border border-accent p-4 inline-block">
          <p className="text-accent">$ ./join_the_hunt</p>
        </div>
      </div>
    </div>
  );
};
