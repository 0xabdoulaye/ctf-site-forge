
import { Navbar } from "@/components/Navbar";
import { Award, Star, Zap, Users } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-[#0A0E17]">
      <Navbar />
      <div className="pt-32 pb-20 bg-[#141B2D]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Sponsorisez-nous</h1>
          <p className="text-secondary text-xl max-w-2xl">
            Soutenez l'excellence guinéenne en cybersécurité et associez votre marque à l'innovation et l'expertise technique
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Pourquoi nous sponsoriser ?</h2>
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div>
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Visibilité internationale</h3>
                  <p className="text-muted-foreground">
                    Associez votre marque à une équipe qui représente la Guinée lors d'événements internationaux de cybersécurité.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Innovation et expertise</h3>
                  <p className="text-muted-foreground">
                    Démontrez votre engagement envers l'innovation technologique et la sécurité numérique.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Renforcement de la communauté</h3>
                  <p className="text-muted-foreground">
                    Contribuez au développement des compétences en cybersécurité en Guinée et dans toute l'Afrique de l'Ouest.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div>
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Accès aux talents</h3>
                  <p className="text-muted-foreground">
                    Entrez en contact avec les meilleurs talents guinéens en cybersécurité pour vos besoins en sécurité informatique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Niveaux de partenariat</h2>
            
            <div className="space-y-6">
              <div className="p-6 border border-accent rounded-lg neon-border">
                <h3 className="text-xl font-bold text-accent mb-2">Niveau Platine</h3>
                <p className="text-muted-foreground mb-4">
                  Partenaire principal avec visibilité maximale
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary mb-4">
                  <li>Logo sur tous nos équipements et communications</li>
                  <li>Mention lors de toutes les compétitions et conférences</li>
                  <li>Accès à des ateliers de sensibilisation pour vos équipes</li>
                  <li>Audit de sécurité annuel pour votre entreprise</li>
                </ul>
                <p className="text-primary font-bold">Contactez-nous pour les tarifs</p>
              </div>
              
              <div className="p-6 border border-accent/70 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-2">Niveau Gold</h3>
                <p className="text-muted-foreground mb-4">
                  Partenaire majeur
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary mb-4">
                  <li>Logo sur notre site web et supports promotionnels</li>
                  <li>Mention lors des compétitions majeures</li>
                  <li>Session de formation en cybersécurité pour vos équipes</li>
                </ul>
                <p className="text-primary font-bold">Contactez-nous pour les tarifs</p>
              </div>
              
              <div className="p-6 border border-accent/50 rounded-lg">
                <h3 className="text-xl font-bold text-secondary mb-2">Niveau Silver</h3>
                <p className="text-muted-foreground mb-4">
                  Partenaire de soutien
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary mb-4">
                  <li>Logo sur notre site web</li>
                  <li>Mention sur nos réseaux sociaux</li>
                  <li>Invitation à nos événements</li>
                </ul>
                <p className="text-primary font-bold">Contactez-nous pour les tarifs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Intéressé à devenir partenaire ?</h2>
          <p className="text-muted-foreground mb-6">
            Contactez-nous pour discuter d'un partenariat sur mesure qui répond à vos objectifs spécifiques.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:sponsors@guineaoffensivesecurity.com" className="px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all">
              Contactez notre équipe partenariats
            </a>
            <a href="tel:+224123456789" className="px-6 py-3 border border-accent rounded-md text-accent hover:neon-border transition-all">
              Appelez-nous: +224 12 345 6789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
