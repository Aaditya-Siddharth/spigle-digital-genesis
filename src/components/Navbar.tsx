
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import QuoteModal from "./QuoteModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Learn", path: "https://blog.spigle.com", external: true },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Spigle</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium hover:text-secondary transition-colors ${
                        isActive(item.path)
                          ? "text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium hover:text-secondary transition-colors ${
                        isActive(item.path)
                          ? "text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <QuoteModal />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden ${
            isOpen
              ? "max-h-[400px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } transition-all duration-300 overflow-hidden`}
        >
          <div className="bg-white py-4 px-4 rounded-b-lg shadow-lg">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block font-medium py-2 ${
                        isActive(item.path)
                          ? "text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block font-medium py-2 ${
                        isActive(item.path)
                          ? "text-secondary"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-2 py-2">
                <QuoteModal />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
