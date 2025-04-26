
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Terminal } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-50 bg-[#0A0E17]/80 backdrop-blur-sm border-b border-accent/30">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="w-6 h-6 text-accent" />
          <span className="text-xl font-bold text-primary">GOS</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-secondary hover:text-primary transition-colors">
                  Accueil
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="text-secondary hover:text-primary transition-colors">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/join" className="text-secondary hover:text-primary transition-colors">
                  Rejoindre l'équipe
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/sponsors" className="text-secondary hover:text-primary transition-colors">
                  Nous sponsoriser
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
