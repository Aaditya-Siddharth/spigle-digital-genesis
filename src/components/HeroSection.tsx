
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Modern abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/5 to-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-secondary/5 to-primary/10 blur-3xl"></div>
      </div>
      
      <div className="absolute top-40 right-10 animate-pulse">
        <Star fill="currentColor" className="text-yellow-300 h-6 w-6" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse delay-300">
        <Star fill="currentColor" className="text-secondary/40 h-8 w-8" />
      </div>
      
      {/* Animated circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block rounded-full bg-gradient-to-br from-primary/5 to-secondary/5"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-medium text-sm">Transforming Digital Experiences</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={itemVariants}
            >
              Create
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> extraordinary </span>
              digital experiences
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              variants={itemVariants}
            >
              We craft innovative digital solutions that elevate your brand and transform how you connect with your audience.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              variants={itemVariants}
            >
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-primary/20 px-8 font-medium group"
                >
                  Explore Services
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-gray-300 hover:border-primary hover:text-primary transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="Happy Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">100+ Happy Clients</div>
                <div className="text-gray-500">Join our success stories</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Digital Innovation"
                  className="rounded-2xl h-[500px] w-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-10 -right-10 h-24 w-24 bg-white p-3 rounded-xl shadow-xl"
            >
              <div className="bg-green-50 h-full w-full rounded-lg flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" className="text-green-500">
                  <path fill="currentColor" d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41-1.41L9,16.17z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute bottom-10 -left-10 h-28 w-28 bg-white p-3 rounded-xl shadow-xl"
            >
              <div className="bg-blue-50 h-full w-full rounded-lg flex flex-col items-center justify-center text-center p-2">
                <div className="text-xs text-gray-400">Performance</div>
                <div className="text-blue-500 text-xl font-bold">+214%</div>
                <div className="h-2 w-full bg-gray-100 rounded-full mt-1">
                  <div className="h-2 w-3/4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
