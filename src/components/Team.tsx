
import { Code2, Lock, Network, Shield } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Team = () => {
  const members = [
    {
      name: "Mamadou Diallo",
      role: "Team Lead",
      specialty: "Reverse Engineering",
      icon: Code2,
      image: "/team/mamadou.jpg",
      linkedin: "https://linkedin.com/in/mamadou-diallo",
    },
    {
      name: "Fatoumata Camara",
      role: "Security Analyst",
      specialty: "Web Exploitation",
      icon: Shield,
      image: "/team/fatoumata.jpg",
      linkedin: "https://linkedin.com/in/fatoumata-camara",
    },
    {
      name: "Ibrahim Bah",
      role: "Cryptographer",
      specialty: "Cryptographie",
      icon: Lock,
      image: "/team/ibrahim.jpg",
      linkedin: "https://linkedin.com/in/ibrahim-bah",
    },
    {
      name: "Aissatou Touré",
      role: "Network Specialist",
      specialty: "Network Security",
      icon: Network,
      image: "/team/aissatou.jpg",
      linkedin: "https://linkedin.com/in/aissatou-toure",
    },
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Notre Équipe</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="p-6 border border-accent/30 rounded-lg hover:border-accent transition-all duration-300">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2 text-primary">{member.name}</h3>
                <p className="text-accent mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.specialty}</p>
                <member.icon className="w-8 h-8 text-accent mb-4" />
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  Voir le profil
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
