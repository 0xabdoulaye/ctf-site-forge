
import { Shield, Trophy, Users } from "lucide-react";

export const About = () => {
  return (
    <div className="py-20 bg-[#141B2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">À Propos de GOS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Shield className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Expertise Technique</h3>
            <p className="text-muted-foreground">
              Spécialisés en reverse engineering, cryptographie, et exploitation web en Guinée et au-delà.
            </p>
          </div>
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Trophy className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Compétitions</h3>
            <p className="text-muted-foreground">
              Participation active aux CTF internationaux avec des classements de premier plan pour une équipe africaine.
            </p>
          </div>
          <div className="p-6 border border-accent rounded-lg neon-border">
            <Users className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2 text-secondary">Communauté</h3>
            <p className="text-muted-foreground">
              Formation de la prochaine génération de talents en cybersécurité en Guinée à travers des ateliers et mentorat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
