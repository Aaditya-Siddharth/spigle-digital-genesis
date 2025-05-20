
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  image?: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
      <div className="absolute top-4 right-6 text-secondary">
        <Quote size={48} className="opacity-20" />
      </div>
      
      <div className="h-[400px] relative flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              {testimonial.image ? (
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-white shadow-xl">
                  <User size={48} className="text-secondary/50" />
                </div>
              )}
            </div>
            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className="text-yellow-500"
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium italic text-gray-700">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-lg text-primary">{testimonial.name}</div>
                <div className="text-secondary">{testimonial.position}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                setAutoplay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-secondary w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm pointer-events-auto hover:bg-white"
          onClick={() => {
            goToPrev();
            setAutoplay(false);
          }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm pointer-events-auto hover:bg-white"
          onClick={() => {
            goToNext();
            setAutoplay(false);
          }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
