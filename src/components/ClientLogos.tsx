
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "TechCorp", logo: "https://via.placeholder.com/150x80?text=TechCorp" },
  { name: "InnovateLabs", logo: "https://via.placeholder.com/150x80?text=InnovateLabs" },
  { name: "FutureBrands", logo: "https://via.placeholder.com/150x80?text=FutureBrands" },
  { name: "GlobalSolutions", logo: "https://via.placeholder.com/150x80?text=GlobalSolutions" },
  { name: "NextGen", logo: "https://via.placeholder.com/150x80?text=NextGen" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm mb-3">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Companies that trust us
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                filter: "brightness(1.1)",
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-lg p-6 w-[150px] h-[80px] flex items-center justify-center">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="max-h-12 max-w-full grayscale group-hover:grayscale-0 transition-all duration-300" />
                  ) : (
                    <div className="text-lg font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                      {client.name}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientLogos;
