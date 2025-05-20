
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatingShapes = [
    { top: "10%", left: "5%", size: "100px", delay: 0, duration: 12 },
    { top: "60%", left: "10%", size: "60px", delay: 1, duration: 15 },
    { top: "20%", left: "80%", size: "120px", delay: 2, duration: 20 },
    { top: "70%", left: "85%", size: "70px", delay: 0.5, duration: 18 },
    { top: "40%", left: "90%", size: "50px", delay: 1.5, duration: 14 },
  ];

  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-24 pb-16">
      {/* Abstract floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block opacity-20 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: shape.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: shape.delay,
          }}
        />
      ))}

      {/* Hero content */}
      <div className="container-custom mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Transforming Businesses Since 2015
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-primary">Transform</span> Your Business with{" "}
              <span className="text-secondary">Digital Innovation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mt-6"
              variants={itemVariants}
            >
              At Spigle, we don't just build websites, apps, or strategies—we build dreams, one pixel and plan at a time.
            </motion.p>
            
            <motion.blockquote 
              className="text-lg italic border-l-4 border-secondary pl-4 my-6 text-gray-600"
              variants={itemVariants}
            >
              "As copilots of innovation, we're here to turbocharge your growth while making complex solutions look effortless (and a little fun too). Let's create brilliance together!"
            </motion.blockquote>
            
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <Link to="/services">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-6 px-8 rounded-lg hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center gap-3">
                  Explore our services <ArrowRight size={18} className="animate-pulse" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="py-6 px-8 rounded-lg text-lg border-2 hover:bg-primary/5">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-full transform -translate-x-10 -translate-y-10"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Digital Innovation"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 relative z-10 border-8 border-white"
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -right-12 -bottom-8 w-24 h-24 bg-gradient-to-br from-secondary to-purple-700 rounded-xl z-20 shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              
              <motion.div
                className="absolute -left-16 top-20 w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-lg z-20 shadow-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
