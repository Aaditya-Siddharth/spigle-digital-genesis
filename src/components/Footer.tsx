
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Spigle</h3>
            <p className="text-gray-300 max-w-xs">
              Transforming businesses through innovative digital solutions. 
              Your success is our mission.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:info@spigle.com" className="hover:underline">
                  info@spigle.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>123 Innovation Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://blog.spigle.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="hover:text-gray-300 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="hover:text-gray-300 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-gray-300 transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-gray-300 transition-colors">
                  Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link to="/services/business-analytics" className="hover:text-gray-300 transition-colors">
                  Business Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Location</h4>
            <div className="rounded-lg overflow-hidden h-[200px] bg-gray-700">
              {/* This would be replaced with an actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800">
                <p className="text-sm text-center">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Spigle. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
