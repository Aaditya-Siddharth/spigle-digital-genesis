
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Database, Truck, Wrench, Brain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import ServiceCard from "@/components/ServiceCard";

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

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 hero-pattern">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transform Your Business with Digital Innovation
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At Spigle, we don't just build websites, apps, or strategies—we build dreams, one pixel and plan at a time.
              </motion.p>
              <motion.blockquote 
                className="text-lg italic border-l-4 border-secondary pl-4 my-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                "As copilots of innovation, we're here to turbocharge your growth while making complex solutions look effortless (and a little fun too). Let's create brilliance together!"
              </motion.blockquote>
              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/services">
                  <Button className="button-primary">
                    Explore our services <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Digital Innovation"
                className="rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Replace with actual client logos - these are placeholders */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="w-32 h-16 bg-white rounded-md shadow-sm flex items-center justify-center"
              >
                <div className="text-lg font-bold text-gray-400">Client {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business in the modern marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <ServiceCard
              title="Business Analytics"
              description="Advanced data analytics and business intelligence tools to make informed decisions and optimize performance."
              icon={<Database size={36} />}
              link="/services/business-analytics"
            />
            <ServiceCard
              title="Supply Chain Optimization"
              description="Streamlined procurement and supply chain management to reduce costs and improve efficiency."
              icon={<Truck size={36} />}
              link="/services/supply-chain"
            />
            <ServiceCard
              title="Business & Technical Consulting"
              description="Expert guidance and strategic planning to navigate technological challenges and seize opportunities."
              icon={<Wrench size={36} />}
              link="/services/consulting"
            />
            <ServiceCard
              title="AI and Automation"
              description="Cutting-edge AI solutions and automation tools to revolutionize your business processes and capabilities."
              icon={<Brain size={36} />}
              link="/services/ai-automation"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="button-outline">
                View All Services <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Spigle?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another digital agency – we're your strategic partner committed to your long-term success
            </p>
          </div>
          
          <Tabs defaultValue="expertise" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <TabsTrigger value="expertise">Expertise</TabsTrigger>
                <TabsTrigger value="approach">Human-Centered</TabsTrigger>
                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                <TabsTrigger value="results">Results-Driven</TabsTrigger>
                <TabsTrigger value="support">Dedicated Support</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mt-6">
              <TabsContent value="expertise" className="animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Industry-Leading Expertise</h3>
                        <p className="text-gray-700 mb-6">
                          Our team consists of seasoned professionals with deep expertise across multiple disciplines and industries. We combine technical mastery with creative thinking to deliver solutions that stand out in the digital landscape.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Specialized teams for each service area",
                            "Continuous professional development and certification",
                            "Cross-functional collaboration for comprehensive solutions",
                            "Years of experience solving complex business challenges"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-secondary mt-1">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden lg:block">
                        <img
                          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                          alt="Expertise"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="approach" className="animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="hidden lg:block">
                        <img
                          src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
                          alt="Human-Centered Approach"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Human-Centered Approach</h3>
                        <p className="text-gray-700 mb-6">
                          We prioritize the human element in everything we do. From user-centered design to personalized client interactions, our approach ensures solutions that resonate with real people and solve real problems.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Empathetic understanding of user needs",
                            "Personalized client communication and collaboration",
                            "Ethical considerations in all our solutions",
                            "Focus on creating meaningful digital experiences"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-secondary mt-1">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="innovation" className="animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Culture of Innovation</h3>
                        <p className="text-gray-700 mb-6">
                          Innovation is in our DNA. We constantly explore emerging technologies and methodologies to bring fresh, forward-thinking solutions that give our clients a competitive edge in rapidly evolving markets.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Dedicated research and development initiatives",
                            "Early adoption of promising technologies",
                            "Creative problem-solving methodologies",
                            "Regular innovation workshops and knowledge sharing"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-secondary mt-1">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden lg:block">
                        <img
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                          alt="Innovation"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="results" className="animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="hidden lg:block">
                        <img
                          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                          alt="Results-Driven"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Results-Driven Methodology</h3>
                        <p className="text-gray-700 mb-6">
                          We measure our success by your success. Our data-driven approach focuses on delivering tangible business outcomes, measurable ROI, and solutions that make a real difference to your bottom line.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Clear KPIs and success metrics for every project",
                            "Regular performance reporting and analysis",
                            "Continuous optimization based on data insights",
                            "Long-term strategic planning for sustainable growth"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-secondary mt-1">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="support" className="animate-fade-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Dedicated Support & Partnership</h3>
                        <p className="text-gray-700 mb-6">
                          Our commitment doesn't end at delivery. We build lasting partnerships with our clients, providing ongoing support, maintenance, and strategic guidance to ensure long-term success.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Responsive support team available when you need them",
                            "Proactive maintenance and performance monitoring",
                            "Regular strategy sessions and business reviews",
                            "Flexible support packages tailored to your needs"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-secondary mt-1">
                                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden lg:block">
                        <img
                          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                          alt="Support and Partnership"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, TechStart Inc.",
                quote: "Working with Spigle transformed our business. Their strategic approach to our digital presence not only increased our visibility but directly contributed to a 45% growth in revenue.",
              },
              {
                name: "Michael Chang",
                position: "Marketing Director, Global Retail",
                quote: "The team at Spigle doesn't just deliver projects—they deliver results. Their deep expertise in digital marketing helped us reach new audiences and increase our conversion rates significantly.",
              },
              {
                name: "Elena Rodriguez",
                position: "Founder, Sustainable Solutions",
                quote: "From concept to execution, Spigle understood our vision perfectly. They built a platform that not only looks beautiful but functions exactly as we needed—and they did it on time and on budget.",
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <blockquote className="italic text-gray-700 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
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
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
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
                      className="w-full p-3 border border-gray-300 rounded-md"
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
                      className="w-full p-3 border border-gray-300 rounded-md"
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
                    className="w-full p-3 border border-gray-300 rounded-md"
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
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full button-primary">
                  <FileText size={18} className="mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
