
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 md:p-12 shadow-xl">
      <div className="absolute top-10 right-10 text-secondary/10">
        <Quote size={120} strokeWidth={0.5} />
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
            className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/3 flex justify-center z-10">
              {testimonial.image ? (
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-white shadow-xl">
                  <User size={40} className="text-primary/50" />
                </div>
              )}
            </div>
            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left z-10">
              <div className="flex justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-700">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {testimonial.name}
                </div>
                <div className="text-gray-500">{testimonial.position}</div>
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
              className={`w-10 h-1.5 rounded-full transition-all ${
                index === currentIndex ? "bg-primary" : "bg-gray-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-lg border-gray-200 pointer-events-auto hover:bg-gray-50 hover:border-primary/50"
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
          className="rounded-full bg-white shadow-lg border-gray-200 pointer-events-auto hover:bg-gray-50 hover:border-primary/50"
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
