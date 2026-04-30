import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { siteConfig } from "../../data/settings";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-gradient font-semibold text-lg shrink-0"
          >
            Jonas Abde
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {siteConfig.navLinks.map(({ label, href }) => {
              const isActive = location.pathname === href;
              return (
                <Link
                  key={href}
                  to={href}
                  className={`relative text-pearl/80 hover:text-pearl transition-colors duration-200 ${
                    isActive ? "text-pearl font-semibold" : ""
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
            <Button to="/kontakt" variant="primary" size="sm">
              Kontakt
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-pearl rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Luk menu" : "Åbn menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div
              className={`px-4 pb-4 pt-2 space-y-1 ${
                scrolled ? "glass" : "bg-surface-dark/80 backdrop-blur-md"
              }`}
            >
              {siteConfig.navLinks.map(({ label, href }) => {
                const isActive = location.pathname === href;
                return (
                  <Link
                    key={href}
                    to={href}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/20 text-pearl font-semibold"
                        : "text-pearl/80 hover:text-pearl hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button to="/kontakt" variant="primary" size="md" className="w-full">
                  Kontakt
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
