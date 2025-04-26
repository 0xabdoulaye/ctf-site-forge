
import { Award, Shield, Star } from "lucide-react";

export const Accomplishments = () => {
  const achievements = [
    {
      title: "Top 10 CTFTime",
      description: "Classés parmi les 10 meilleures équipes africaines sur CTFTime en 2024",
      icon: Award,
    },
    {
      title: "CVE Découverts",
      description: "5 CVE découverts par nos membres dans des systèmes critiques",
      icon: Shield,
    },
    {
      title: "HackTheBox Masters",
      description: "2 membres parmi les Pro Hackers sur HackTheBox",
      icon: Star,
    },
  ];

  return (
    <div className="py-20 bg-[#0A0E17]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Nos Exploits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="p-6 border border-accent rounded-lg neon-border">
              <item.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
