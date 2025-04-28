import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/blog", label: "Blog" },
  { to: "/join", label: "Rejoindre" },
  { to: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full bg-[#141B2D] border-b border-accent py-2 px-4 flex items-center justify-between z-20 relative">
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-accent hover:opacity-80 transition-all">
          GOS
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base font-medium transition-all ${
              pathname === link.to
                ? "text-accent underline underline-offset-4"
                : "text-primary hover:text-accent"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}