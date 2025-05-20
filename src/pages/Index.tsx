
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Database, Truck, Wrench, Brain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Link } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      quote: "Working with Spigle transformed our business. Their strategic approach to our digital presence not only increased our visibility but directly contributed to a 45% growth in revenue.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      rating: 5
    },
    {
      name: "Michael Chang",
      position: "Marketing Director, Global Retail",
      quote: "The team at Spigle doesn't just deliver projects—they deliver results. Their deep expertise in digital marketing helped us reach new audiences and increase our conversion rates significantly.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      position: "Founder, Sustainable Solutions",
      quote: "From concept to execution, Spigle understood our vision perfectly. They built a platform that not only looks beautiful but functions exactly as we needed—and they did it on time and on budget.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      rating: 5
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Client Section */}
      <ClientLogos />

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-white"
      >
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive digital solutions to elevate your business in the modern marketplace
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              title="Web Development"
              description="Custom websites and web applications built with the latest technologies to engage your audience and grow your business."
              icon={<Code size={36} />}
              link="/services/web-development"
              imgUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            />
            <ServiceCard
              title="App Development"
              description="Native and cross-platform mobile applications that deliver seamless user experiences across all devices."
              icon={<Smartphone size={36} />}
              link="/services/app-development"
              imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            />
            <ServiceCard
              title="Branding"
              description="Strategic brand development that communicates your unique value proposition and connects with your target audience."
              icon={<Palette size={36} />}
              link="/services/branding"
              imgUrl="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            />
            <ServiceCard
              title="Digital Marketing & SEO"
              description="Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers."
              icon={<TrendingUp size={36} />}
              link="/services/digital-marketing"
              imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            />
            <ServiceCard
              title="Business Analytics"
              description="Advanced data analytics and business intelligence tools to make informed decisions and optimize performance."
              icon={<Database size={36} />}
              link="/services/business-analytics"
              imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            />
            <ServiceCard
              title="Supply Chain Optimization"
              description="Streamlined procurement and supply chain management to reduce costs and improve efficiency."
              icon={<Truck size={36} />}
              link="/services/supply-chain"
              imgUrl="https://images.unsplash.com/photo-1494412651409-8963ce7935a7"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ServiceCard
              title="Business & Technical Consulting"
              description="Expert guidance and strategic planning to navigate technological challenges and seize opportunities."
              icon={<Wrench size={36} />}
              link="/services/consulting"
              imgUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            />
            <ServiceCard
              title="AI and Automation"
              description="Cutting-edge AI solutions and automation tools to revolutionize your business processes and capabilities."
              icon={<Brain size={36} />}
              link="/services/ai-automation"
              imgUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            />
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services">
              <Button variant="outline" className="button-outline text-lg group px-8 py-6">
                <span>View All Services</span> 
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4"
            >
              Client Success
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Don't just take our word for it - hear from the businesses we've helped transform
            </motion.p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What types of businesses do you work with?",
                    answer: "We work with businesses of all sizes across various industries, from startups to established enterprises. Our solutions are tailored to meet the specific needs and goals of each client, regardless of their sector or scale."
                  },
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary based on scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while more complex digital transformation projects could span several months. During our initial consultation, we'll provide a detailed timeline specific to your project."
                  },
                  {
                    question: "Do you offer ongoing support after project completion?",
                    answer: "Absolutely! We offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. Our team remains available for updates, troubleshooting, and strategic guidance long after the initial project is complete."
                  },
                  {
                    question: "How do you approach pricing for your services?",
                    answer: "We believe in transparent, value-based pricing. Depending on the service, we may offer project-based quotes, retainer options, or customized pricing models. We work with you to find a solution that aligns with your budget while delivering the quality and results you expect."
                  },
                  {
                    question: "What makes Spigle different from other digital agencies?",
                    answer: "Our difference lies in our holistic approach, combining technical expertise with strategic thinking and creative innovation. We focus on building long-term partnerships rather than one-off projects, and we measure our success by the tangible business outcomes we deliver for our clients."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium py-4 text-lg hover:no-underline hover:text-secondary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl transform translate-x-20 -translate-y-20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl transform -translate-x-20 translate-y-20 rounded-full"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Have a project in mind?</h3>
                <p className="text-gray-700 mb-6">
                  Tell us about your goals, and we'll get back to you with ideas and next steps.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition resize-none"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full py-6 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg text-lg hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center justify-center gap-2">
                    <FileText size={18} />
                    Send Inquiry
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
