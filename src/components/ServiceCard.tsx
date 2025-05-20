
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  imgUrl?: string;
}

const ServiceCard = ({ title, description, icon, link, imgUrl }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {imgUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4 text-secondary">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="outline" className="mt-auto text-secondary border-secondary hover:bg-secondary hover:text-white">
            Learn More <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
