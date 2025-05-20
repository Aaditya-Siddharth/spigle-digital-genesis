
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
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
    >
      {imgUrl && (
        <div className="w-full h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow relative z-20">
        <motion.div 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="p-4 bg-gradient-to-br from-secondary/80 to-secondary rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white shadow-md"
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-8 flex-grow">{description}</p>
        <Link to={link} className="mt-auto">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white group-hover:bg-secondary group-hover:text-white group flex items-center gap-2">
            <span>Learn More</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
