import { Mail, MessageSquare } from "lucide-react";

const Join = () => {
  return (
    <div className="py-20 bg-[#141B2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Rejoindre l'équipe GOS
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-lg text-muted-foreground">
            Nous sommes toujours à la recherche de nouveaux talents en cybersécurité passionnés par les CTF et la communauté. 
          </p>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Comment nous rejoindre ?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="mailto:join@guineaoffensivesecurity.com"
                className="flex items-center justify-center px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyez-nous un email
              </a>
              <a
                href="https://discord.gg/gos"
                className="flex items-center justify-center px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Rejoignez notre Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;