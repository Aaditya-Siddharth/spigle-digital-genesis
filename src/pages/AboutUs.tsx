
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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
            <div className="flex justify-center mb-4">
              <Users size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Spigle</h1>
            <p className="text-xl opacity-90">
              We're a team of passionate digital innovators committed to transforming businesses through technology and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Spigle was born from a simple yet powerful idea: that technology should serve people, not the other way around. Founded in 2015 by a group of tech enthusiasts with diverse backgrounds, we set out to create a different kind of digital agency.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders experienced firsthand the frustration of working with agencies that delivered technically sound solutions that missed the mark on business impact. They envisioned a company that would bridge this gap—combining technical excellence with strategic business thinking.
              </p>
              <p className="text-lg text-gray-700">
                Today, Spigle has grown into a full-service digital innovation partner, working with businesses across industries to unlock their potential through technology. Our journey has been one of continuous learning, adaptation, and growth—values that remain at the core of everything we do.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Spigle Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                <div className="text-center">
                  <div className="text-2xl">7+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by purpose, driven by passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex">
                  <span className="p-3 bg-primary/10 text-primary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To empower businesses through innovative digital solutions that drive meaningful growth, foster meaningful connections, and create lasting value.
                </p>
                <p className="text-gray-700">
                  We're committed to transforming complex challenges into elegant solutions that are accessible, effective, and aligned with our clients' strategic objectives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex">
                  <span className="p-3 bg-secondary/10 text-secondary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To be the premier partner for businesses seeking digital transformation, recognized for our exceptional blend of technical excellence, strategic insight, and human-centered approach.
                </p>
                <p className="text-gray-700">
                  We envision a world where technology enhances human potential, where digital solutions are accessible to all businesses, and where innovation serves the greater good.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "We pursue excellence in everything we do, continuously raising the bar for ourselves and our industry."
                },
                {
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and ethical principles that build trust and lasting relationships."
                },
                {
                  title: "Innovation",
                  description: "We embrace creativity and forward-thinking to develop solutions that address today's challenges and tomorrow's opportunities."
                },
                {
                  title: "Empathy",
                  description: "We listen deeply, understand thoroughly, and respond thoughtfully to meet the needs of our clients and their users."
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of teamwork, partnership, and shared knowledge to achieve remarkable results."
                },
                {
                  title: "Impact",
                  description: "We measure our success by the tangible, positive difference we make for our clients and communities."
                },
              ].map((value, index) => (
                <div key={index} className="p-5 rounded-lg border border-gray-100">
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating exceptional digital experiences
            </p>
          </div>
          
          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 gap-4">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="creative">Creative Team</TabsTrigger>
                <TabsTrigger value="technical">Technical Team</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="leadership">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    name: "Alex Morgan",
                    position: "CEO & Founder",
                    bio: "With over 15 years of experience in the tech industry, Alex founded Spigle with a vision to bridge the gap between technology and business strategy.",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  },
                  {
                    name: "Sarah Chen",
                    position: "CTO",
                    bio: "Leading our technical strategy, Sarah brings expertise in emerging technologies and a passion for creating scalable, innovative solutions.",
                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  },
                  {
                    name: "Raj Patel",
                    position: "COO",
                    bio: "Raj oversees our operations, ensuring excellence in project delivery while maintaining our commitment to client satisfaction and team wellbeing.",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                      <p className="text-secondary font-medium mb-4">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="creative">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { name: "Emma Wilson", position: "Creative Director" },
                  { name: "David Kim", position: "UI/UX Design Lead" },
                  { name: "Nina Patel", position: "Brand Strategist" },
                  { name: "Carlos Rodriguez", position: "Content Strategist" },
                  { name: "Aisha Johnson", position: "Senior Designer" },
                  { name: "Liam Thompson", position: "Motion Designer" },
                  { name: "Sophia Lee", position: "UX Researcher" },
                  { name: "Omar Hassan", position: "Visual Designer" },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 mx-auto"></div>
                    <h3 className="text-lg font-bold text-center">{member.name}</h3>
                    <p className="text-gray-600 text-center">{member.position}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="technical">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { name: "Michael Zhang", position: "Lead Developer" },
                  { name: "Priya Sharma", position: "Backend Architect" },
                  { name: "Jason Taylor", position: "Frontend Lead" },
                  { name: "Maria Gonzalez", position: "Mobile Developer" },
                  { name: "Thomas Miller", position: "DevOps Engineer" },
                  { name: "Rebecca Jones", position: "QA Specialist" },
                  { name: "Daniel Park", position: "Data Scientist" },
                  { name: "Hannah Wilson", position: "System Architect" },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 mx-auto"></div>
                    <h3 className="text-lg font-bold text-center">{member.name}</h3>
                    <p className="text-gray-600 text-center">{member.position}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a difference beyond business
            </p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Literacy Initiative</h3>
                <p className="text-gray-600">
                  We're committed to bridging the digital divide by providing free coding workshops, technology training, and resources to underserved communities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Nonprofit Technology Support</h3>
                <p className="text-gray-600">
                  Through our Nonprofit Tech Program, we provide discounted and pro-bono services to organizations making a positive impact in our communities.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-48 bg-accent/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M18 8a6 6 0 0 0-9.33-5"/><path d="m10 2 1 2-1 2"/><path d="M6 16a6 6 0 0 0 9.33 5"/><path d="m14 22-1-2 1-2"/><path d="M12 12a6 6 0 0 0-6-6"/><path d="M6 12a6 6 0 0 0 6 6"/></svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental footprint through sustainable practices, carbon offsets, and developing eco-friendly digital solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-lg italic text-gray-700">
              "We believe that true success includes giving back and creating positive change in our communities."
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Excellence recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Best Digital Innovation Agency 2024",
              "Top UX Design Studio 2023",
              "Technology Excellence Award 2022",
              "Best Workplace in Tech 2023",
            ].map((award, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  </div>
                  <h3 className="font-bold">{award}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
