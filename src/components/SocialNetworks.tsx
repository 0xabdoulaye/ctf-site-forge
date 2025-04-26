
import { Github, Linkedin } from "lucide-react";

// Création de composants personnalisés pour les icônes manquantes
const TryHackMe = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-custom">
    <path d="M10.54 5.57L5.31 12.15L5.31 19.5H18.69V12.15L13.46 5.57M18.69 19.5V24H5.31V19.5M10.54 5.57V0H13.46V5.57" />
  </svg>
);

const CTFTime = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-custom">
    <path d="M3 3v18h18" />
    <path d="M7 17l4-4 4 4 6-6" />
  </svg>
);

export const SocialNetworks = () => {
  const networks = [
    {
      name: "TryHackMe",
      icon: TryHackMe,
      url: "https://tryhackme.com/team/guineaoffensivesecurity",
      description: "Suivez notre progression sur les challenges"
    },
    {
      name: "HackTheBox",
      icon: Github, // Using Github as placeholder for HackTheBox
      url: "https://www.hackthebox.com/teams/guineaoffensivesecurity",
      description: "Découvrez nos machines hackées"
    },
    {
      name: "CTFTime",
      icon: CTFTime,
      url: "https://ctftime.org/team/12345", // Example URL
      description: "Notre classement dans les compétitions CTF"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/guinea-offensive-security",
      description: "Suivez notre actualité professionnelle"
    },
  ];

  return (
    <div className="py-20 bg-[#141B2D]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Nous Suivre</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {networks.map((network, index) => (
            <a 
              key={index} 
              href={network.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border border-accent rounded-lg hover:neon-border transition-all duration-300 group"
            >
              <network.icon className="w-12 h-12 text-secondary group-hover:text-accent transition-colors mb-4" />
              <h3 className="text-xl font-bold mb-2 text-secondary">{network.name}</h3>
              <p className="text-muted-foreground">{network.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
