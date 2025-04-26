
import { Code2, Lock, Network, Shield } from "lucide-react";

export const Team = () => {
  const members = [
    {
      name: "Alex Chen",
      role: "Team Lead",
      specialty: "Reverse Engineering",
      icon: Code2,
    },
    {
      name: "Sarah White",
      role: "Security Analyst",
      specialty: "Web Exploitation",
      icon: Shield,
    },
    {
      name: "Marcus Brown",
      role: "Cryptographer",
      specialty: "Cryptography",
      icon: Lock,
    },
    {
      name: "Julia Lee",
      role: "Network Specialist",
      specialty: "Network Security",
      icon: Network,
    },
  ];

  return (
    <div className="py-20 bg-[#0A0E17]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="p-6 border border-accent rounded-lg neon-border">
              <member.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2 text-secondary">{member.name}</h3>
              <p className="text-primary mb-1">{member.role}</p>
              <p className="text-muted-foreground">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
