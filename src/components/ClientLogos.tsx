
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
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
            Trusted by Industry Leaders
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-2"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="w-full h-20 bg-white rounded-xl shadow-md flex items-center justify-center p-4 border border-gray-100"
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-12" />
              ) : (
                <div className="text-lg font-bold text-gray-400">{client.name}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
