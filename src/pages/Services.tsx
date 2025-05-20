
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, Database, Truck, Wrench, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to engage your audience and grow your business.",
      icon: <Code size={36} />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      features: [
        "Custom Website Design & Development",
        "E-Commerce Solutions",
        "Progressive Web Applications",
        "Content Management Systems",
        "Frontend and Backend Development",
        "API Development & Integration",
      ]
    },
    {
      id: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      icon: <Smartphone size={36} />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "App UI/UX Design",
        "App Maintenance & Support",
        "App Performance Optimization",
        "App Store Submission & Management",
      ]
    },
    {
      id: "branding",
      title: "Branding",
      description: "Strategic brand development that communicates your unique value proposition and connects with your target audience.",
      icon: <Palette size={36} />,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      features: [
        "Brand Strategy Development",
        "Visual Identity Design",
        "Brand Guidelines",
        "Logo Design",
        "Brand Messaging",
        "Brand Experience Design",
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & SEO",
      description: "Data-driven marketing strategies that increase visibility, drive traffic, and convert leads into customers.",
      icon: <TrendingUp size={36} />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Management",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
      ]
    },
    {
      id: "business-analytics",
      title: "Business Analytics",
      description: "Advanced data analytics and business intelligence tools to make informed decisions and optimize performance.",
      icon: <Database size={36} />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      features: [
        "Data Visualization & Dashboards",
        "Predictive Analytics",
        "Business Intelligence Implementation",
        "Data Strategy Development",
        "Performance Tracking & KPIs",
        "Custom Reporting Solutions",
      ]
    },
    {
      id: "supply-chain",
      title: "Supply Chain Optimization",
      description: "Streamlined procurement and supply chain management to reduce costs and improve efficiency.",
      icon: <Truck size={36} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      features: [
        "Supply Chain Analysis",
        "Procurement Process Optimization",
        "Inventory Management Solutions",
        "Supplier Relationship Management",
        "Logistics Network Design",
        "Supply Chain Technology Integration",
      ]
    },
    {
      id: "consulting",
      title: "Business & Technical Consulting",
      description: "Expert guidance and strategic planning to navigate technological challenges and seize opportunities.",
      icon: <Wrench size={36} />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      features: [
        "Technology Strategy Development",
        "Digital Transformation Consulting",
        "IT Infrastructure Planning",
        "Business Process Optimization",
        "Project Management & Implementation",
        "Technology Vendor Selection",
      ]
    },
    {
      id: "ai-automation",
      title: "AI and Automation",
      description: "Cutting-edge AI solutions and automation tools to revolutionize your business processes and capabilities.",
      icon: <Brain size={36} />,
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      features: [
        "AI Strategy & Implementation",
        "Machine Learning Solutions",
        "Business Process Automation",
        "Chatbot & Virtual Assistant Development",
        "Predictive Modeling",
        "Computer Vision Applications",
      ]
    },
  ];

  // Animation variant for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive digital solutions tailored to your unique business needs. We combine technical expertise with strategic thinking to deliver results that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                variants={item}
                className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 card-hover ${
                  index % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col">
                    <div className="mb-4 text-secondary">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-secondary"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <Link to={`/services/${service.id}`}>
                        <Button className="button-primary">
                          Learn More <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Agile Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in flexibility, collaboration, and delivering value every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Tabs defaultValue="discovery" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="discovery">Discovery</TabsTrigger>
                  <TabsTrigger value="strategy">Strategy</TabsTrigger>
                  <TabsTrigger value="execution">Execution</TabsTrigger>
                  <TabsTrigger value="evolution">Evolution</TabsTrigger>
                </TabsList>
                
                <div className="mt-8">
                  <TabsContent value="discovery" className="animate-fade-in">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">1. Discovery & Understanding</h3>
                        <p className="text-gray-700 mb-4">
                          We begin by deeply understanding your business goals, challenges, and vision. Through collaborative workshops and research, we identify opportunities and establish clear objectives for our partnership.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Stakeholder interviews and workshops",
                            "Market and competitor analysis",
                            "User research and persona development",
                            "Current state assessment",
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
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="strategy" className="animate-fade-in">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">2. Strategic Planning</h3>
                        <p className="text-gray-700 mb-4">
                          Based on our discoveries, we develop a comprehensive strategy that aligns with your business objectives. We create a roadmap with clear milestones, deliverables, and success metrics.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Solution architecture and design",
                            "Technology selection and evaluation",
                            "Project roadmapping and milestone planning",
                            "Resource allocation and team formation",
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
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="execution" className="animate-fade-in">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">3. Agile Execution</h3>
                        <p className="text-gray-700 mb-4">
                          We implement our strategy using agile methodologies, working in sprints to deliver incremental value. Regular check-ins and transparent communication ensure you're always informed and involved.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Iterative development and prototyping",
                            "Regular sprint reviews and demonstrations",
                            "Continuous testing and quality assurance",
                            "Transparent project tracking and reporting",
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
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="evolution" className="animate-fade-in">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">4. Continuous Evolution</h3>
                        <p className="text-gray-700 mb-4">
                          Our relationship continues beyond project completion. We monitor performance, gather feedback, and make data-driven improvements to ensure your digital solutions evolve with your business.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Performance monitoring and analytics",
                            "User feedback collection and analysis",
                            "Continuous optimization and enhancement",
                            "Strategic planning for future initiatives",
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
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Expertise & Flexibility</h3>
                <p className="text-gray-700">
                  At Spigle, we combine technical mastery with business acumen to deliver solutions that drive real results. Our versatile team adapts to your unique requirements, ensuring the perfect blend of innovation and practicality.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Multidisciplinary Teams</h4>
                    <p className="text-gray-600 text-sm">
                      Developers, designers, strategists, and analysts working in perfect harmony to solve complex challenges.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Technology Agnostic</h4>
                    <p className="text-gray-600 text-sm">
                      We select the best technologies for your specific needs, not what's trendy or convenient for us.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Flexible Engagement Models</h4>
                    <p className="text-gray-600 text-sm">
                      From fixed-price projects to dedicated teams, we adapt to your preferred way of working.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border border-gray-100">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Scalable Resources</h4>
                    <p className="text-gray-600 text-sm">
                      We scale our team up or down based on your project requirements and timeline.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service FAQs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do you determine which services my business needs?",
                    answer: "We start with a comprehensive assessment of your business goals, challenges, and current digital ecosystem. Through collaborative discovery sessions, we identify the services that will have the most significant impact on your specific objectives. Our recommendations are always based on what will deliver the best ROI for your unique situation."
                  },
                  {
                    question: "Can you handle projects that require multiple service areas?",
                    answer: "Absolutely! Many of our projects span multiple service areas, and this integrated approach often delivers the best results. Our multidisciplinary teams collaborate seamlessly across specialties to ensure a cohesive strategy and execution. Whether you need web development alongside digital marketing, or branding with app development, we coordinate all aspects under one strategic umbrella."
                  },
                  {
                    question: "Do you offer customized solutions or standard packages?",
                    answer: "We primarily focus on customized solutions tailored to your specific business needs. While we may have frameworks and starting points for common requirements, we don't believe in one-size-fits-all packages. Every business is unique, and your digital solutions should reflect that uniqueness while addressing your specific challenges and opportunities."
                  },
                  {
                    question: "How do you stay current with rapidly evolving technologies?",
                    answer: "Continuous learning is embedded in our culture. Our team members dedicate time to professional development, attend industry conferences, participate in specialized training, and engage in research and experimentation with emerging technologies. We maintain active relationships with technology partners and participate in beta programs to stay at the forefront of innovation."
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
            
            <div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do you measure the success of your services?",
                    answer: "We establish clear, measurable KPIs at the beginning of each engagement, aligned with your business objectives. Depending on the service, these might include metrics like conversion rates, user engagement, load times, ranking improvements, customer acquisition costs, or ROI. We provide regular reporting and analytics to track progress and make data-driven adjustments throughout our partnership."
                  },
                  {
                    question: "What makes your approach different from other agencies?",
                    answer: "Our approach combines technical expertise with strategic business thinking. We're not just executors – we're partners in your success. We focus on understanding your business goals first, then apply our technical knowledge to create solutions that drive meaningful results. Our collaborative, transparent process keeps you involved at every stage, and our commitment to continuous improvement ensures your solutions evolve with your business."
                  },
                  {
                    question: "Can you work with our existing systems and technology stack?",
                    answer: "Yes, we have extensive experience integrating with existing systems and technology stacks. We'll evaluate your current infrastructure and recommend the most efficient approach – whether that's building on top of existing systems, creating custom integrations, or gradually migrating to new solutions. Our technology-agnostic approach means we can work with virtually any platform or framework."
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer: "We've successfully delivered projects across diverse industries including e-commerce, healthcare, finance, education, manufacturing, professional services, and technology. While we bring industry-specific insights to each project, our approach is highly adaptable. We focus on understanding your unique business model and challenges, regardless of industry, and applying our technical expertise to create tailored solutions."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index + 4} value={`item-${index + 4}`}>
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
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let's discuss how our services can help you achieve your business goals. Fill out the form, and we'll get back to you within 24 hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Start a Project</h3>
                  <p className="opacity-80">
                    Ready to begin? Let us know your requirements and timeline.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Request a Consultation</h3>
                  <p className="opacity-80">
                    Not sure what you need? Book a free strategy session with our experts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Submit Request
                </Button>
                <p className="text-xs text-gray-600 text-center">
                  We respect your privacy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
