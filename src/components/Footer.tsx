
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden pt-20 pb-10">
      {/* Abstract Shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary to-transparent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary to-transparent opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-gray-700/50">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary/90 to-secondary bg-clip-text text-transparent">
                Spigle
              </h3>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Transforming businesses through innovative digital solutions. 
              Your success is our mission.
            </p>
            
            <div className="flex space-x-4 pt-2">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 hover:bg-primary/90 text-gray-300 hover:text-white transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="text-primary" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@spigle.com" className="hover:underline">
                  info@spigle.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin size={18} className="text-primary" />
                <span>123 Innovation Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
                { label: "Blog", path: "https://blog.spigle.com" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", path: "/services/web-development" },
                { label: "App Development", path: "/services/app-development" },
                { label: "Branding", path: "/services/branding" },
                { label: "Digital Marketing", path: "/services/digital-marketing" },
                { label: "Business Analytics", path: "/services/business-analytics" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Spigle. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-all hover:shadow-primary/20 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
