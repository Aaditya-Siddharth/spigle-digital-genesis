
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  imgUrl?: string;
}

const ServiceCard = ({ title, description, icon, link, imgUrl }: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      {imgUrl && (
        <div className="w-full h-56 overflow-hidden">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        <div className="p-3 bg-secondary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-secondary">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="outline" className="mt-auto border-secondary text-secondary hover:bg-secondary hover:text-white group-hover:bg-secondary group-hover:text-white">
            <span>Learn More</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
