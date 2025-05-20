
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
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gray-200 h-full"
    >
      {imgUrl && (
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
            {icon}
          </div>
        </div>
      )}
      
      <div className={`p-6 ${!imgUrl ? "pt-10" : ""} relative`}>
        {!imgUrl && (
          <div className="absolute -top-6 left-6">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white shadow-lg"
            >
              {icon}
            </motion.div>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3 mt-2 text-primary group-hover:text-secondary transition-all duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        
        <Link to={link} className="inline-block">
          <Button 
            variant="ghost" 
            className="group/btn p-0 h-auto hover:bg-transparent"
          >
            <span className="text-secondary font-medium group-hover/btn:pr-1 transition-all">Explore</span>
            <ArrowRight size={18} className="ml-1 text-secondary transition-all duration-300 group-hover/btn:translate-x-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
