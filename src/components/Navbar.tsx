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
    <nav className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-b border-blue-400 py-2 px-6 flex items-center justify-between shadow-lg sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-extrabold text-blue-300 hover:text-white transition-colors">
          GOS
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base font-semibold px-2 py-1 rounded transition-colors ${
              pathname === link.to
                ? "bg-blue-700 text-blue-200 shadow"
                : "text-blue-100 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}