
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Clock, Target, LineChart, HeartHandshake } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex items-start space-x-4"
  >
    <div className="mt-1 text-secondary">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const features = {
    expertise: [
      {
        icon: <Users size={24} />,
        title: "Expert Team",
        description: "Our specialists bring years of expertise across diverse industries and technologies."
      },
      {
        icon: <CheckCircle size={24} />,
        title: "Certified Professionals",
        description: "Team members hold prestigious certifications in their respective fields."
      },
      {
        icon: <LineChart size={24} />,
        title: "Data-Driven Approach",
        description: "We leverage analytics and insights to make informed strategic decisions."
      },
    ],
    approach: [
      {
        icon: <Users size={24} />,
        title: "Human-Centered Design",
        description: "We prioritize user needs and experiences in everything we create."
      },
      {
        icon: <HeartHandshake size={24} />,
        title: "Collaborative Process",
        description: "Your insights are integrated throughout our development process."
      },
      {
        icon: <Target size={24} />,
        title: "Tailored Solutions",
        description: "Custom-built strategies and products for your specific challenges."
      },
    ],
    innovation: [
      {
        icon: <Users size={24} />,
        title: "Emerging Technologies",
        description: "We stay ahead with AI, blockchain, and other cutting-edge tech."
      },
      {
        icon: <Clock size={24} />,
        title: "Rapid Prototyping",
        description: "Test concepts quickly to validate ideas before full development."
      },
      {
        icon: <CheckCircle size={24} />,
        title: "Continuous Improvement",
        description: "Regular updates and improvements based on performance metrics."
      },
    ],
  };

  const images = {
    expertise: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    approach: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    innovation: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Why Choose Spigle?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Excellence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another digital agency – we're your strategic partner committed to your long-term success
          </p>
        </motion.div>
        
        <Tabs defaultValue="expertise" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 p-1 rounded-full bg-gray-100 relative h-auto">
              {["expertise", "approach", "innovation"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  onMouseEnter={() => setHoveredTab(tab)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="relative z-10 px-6 py-3 data-[state=active]:text-white rounded-full capitalize text-sm md:text-base"
                >
                  {hoveredTab === tab && tab !== "expertise" && (
                    <motion.div
                      layoutId="tab-background"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ borderRadius: 9999 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.25 }}
                    />
                  )}
                  {tab === "expertise" && (
                    <motion.div
                      layoutId="tab-background"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ borderRadius: 9999 }}
                      initial={false}
                      transition={{ type: "spring", bounce: 0.25 }}
                    />
                  )}
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <div className="mt-10">
            {Object.entries(features).map(([key, featureList]) => (
              <TabsContent key={key} value={key} className="w-full animate-fade-in focus-visible:outline-none focus-visible:ring-0">
                <Card className="overflow-hidden border-0 shadow-xl rounded-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <motion.div 
                      className="p-8 lg:p-12 order-2 lg:order-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        {key === "expertise" && "Industry-Leading Expertise"}
                        {key === "approach" && "Human-Centered Approach"}
                        {key === "innovation" && "Culture of Innovation"}
                      </h3>
                      <p className="text-gray-700 mb-8">
                        {key === "expertise" && "Our team consists of seasoned professionals with deep expertise across multiple disciplines and industries."}
                        {key === "approach" && "We prioritize the human element in everything we do, creating solutions that resonate with real people."}
                        {key === "innovation" && "Innovation is in our DNA. We explore emerging technologies to bring forward-thinking solutions to our clients."}
                      </p>
                      
                      <div className="space-y-8">
                        <AnimatePresence mode="wait">
                          {featureList.map((feature, index) => (
                            <Feature
                              key={`${key}-${index}`}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                            />
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="lg:h-auto order-1 lg:order-2 min-h-[300px]"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
                        <img
                          src={images[key as keyof typeof images]}
                          alt={key}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default WhyChooseUs;
