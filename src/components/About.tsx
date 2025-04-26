
import { Shield, Trophy, Users } from "lucide-react";

export const About = () => {
  return (
    <div className="py-20 bg-[#141B2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">About ByteBreachers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Elite Security</h3>
            <p className="text-muted-foreground">
              Specializing in reverse engineering, cryptography, and web exploitation.
            </p>
          </div>
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Trophy className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Top Rankings</h3>
            <p className="text-muted-foreground">
              Consistently ranked in the top 1% globally in major CTF competitions.
            </p>
          </div>
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Users className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Strong Team</h3>
            <p className="text-muted-foreground">
              A diverse team of security researchers, developers, and analysts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
