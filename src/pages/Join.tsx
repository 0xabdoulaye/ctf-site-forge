
import { Navbar } from "@/components/Navbar";
import { Shield, Users, Lightbulb, Trophy } from "lucide-react";

const Join = () => {
  return (
    <div className="min-h-screen bg-[#0A0E17]">
      <Navbar />
      <div className="pt-32 pb-20 bg-[#141B2D]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Rejoignez l'équipe</h1>
          <p className="text-secondary text-xl max-w-2xl">
            Guinea Offensive Security recherche constamment des talents passionnés par la cybersécurité pour renforcer notre équipe
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Pourquoi nous rejoindre ?</h2>
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div>
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Participez à des compétitions</h3>
                  <p className="text-muted-foreground">
                    Représentez la Guinée lors de compétitions internationales de cybersécurité et mesurez-vous aux meilleurs.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Développez vos compétences</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez de mentorat et de formation continue auprès d'experts reconnus dans divers domaines de la cybersécurité.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Contribuez à la sécurité</h3>
                  <p className="text-muted-foreground">
                    Participez à des programmes de bug bounty et aidez à sécuriser des infrastructures critiques en Guinée et au-delà.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Intégrez une communauté</h3>
                  <p className="text-muted-foreground">
                    Rejoignez un réseau de professionnels passionnés partageant les mêmes valeurs et ambitions pour la cybersécurité en Guinée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Comment postuler</h2>
            <div className="p-6 border border-accent rounded-lg neon-border">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondary mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-[#0A0E17] border border-accent/50 rounded-md"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-[#0A0E17] border border-accent/50 rounded-md"
                    placeholder="votre.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className="block text-secondary mb-2">Domaine de spécialité</label>
                  <select
                    id="specialty"
                    className="w-full p-3 bg-[#0A0E17] border border-accent/50 rounded-md"
                  >
                    <option value="">Sélectionnez une spécialité</option>
                    <option value="web">Sécurité Web</option>
                    <option value="reverse">Reverse Engineering</option>
                    <option value="crypto">Cryptographie</option>
                    <option value="network">Sécurité Réseau</option>
                    <option value="forensics">Forensics</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-secondary mb-2">Expérience</label>
                  <textarea
                    id="experience"
                    rows={4}
                    className="w-full p-3 bg-[#0A0E17] border border-accent/50 rounded-md"
                    placeholder="Décrivez votre expérience en cybersécurité, vos participations à des CTF, vos certifications..."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="links" className="block text-secondary mb-2">Liens (GitHub, LinkedIn, CTFTime, etc.)</label>
                  <textarea
                    id="links"
                    rows={2}
                    className="w-full p-3 bg-[#0A0E17] border border-accent/50 rounded-md"
                    placeholder="https://github.com/votrenom, https://linkedin.com/in/votrenom..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-accent text-black font-bold rounded-md hover:bg-accent/80 transition-colors"
                >
                  Envoyer ma candidature
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Autres façons de nous rejoindre</h2>
          <p className="text-muted-foreground mb-6">
            Si vous préférez nous contacter directement ou en savoir plus avant de postuler, voici d'autres options:
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:join@guineaoffensivesecurity.com" className="px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all">
              Envoyez-nous un email
            </a>
            <a href="https://discord.gg/gos" className="px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all">
              Rejoignez notre Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
