
import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16 bg-secondary">
      <div className="text-center z-10 p-8">
        <Terminal className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Guinea Offensive Security
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Une équipe de professionnels curieux et passionnés par la cybersécurité en Guinée Conakry
        </p>
        <Link to="/join">
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-secondary transition-all duration-300"
          >
            Rejoindre l'équipe
          </Button>
        </Link>
      </div>
    </div>
  );
};
