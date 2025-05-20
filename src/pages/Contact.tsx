
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Submit logic would go here
    console.log(formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              We'd love to hear from you. Reach out for inquiries, collaborations, or just to say hello!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">(123) 456-7890</p>
              <p className="text-gray-600">(987) 654-3210</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@spigle.com</p>
              <p className="text-gray-600">support@spigle.com</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Innovation Street</p>
              <p className="text-gray-600">Tech City, ST 12345</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking to start a project, have a question about our services, or simply want to explore potential collaborations, we're here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Our Operating Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden h-64 relative">
                {/* Google Map would go here */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <p>Interactive Map</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="shadow-md border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText size={24} className="text-primary" />
                    <h3 className="text-2xl font-bold">Contact Form</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Message subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Send size={16} className="mr-2" /> Send Message
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical response time?",
                answer: "We strive to respond to all inquiries within 24 business hours. For urgent matters, please indicate this in your message subject."
              },
              {
                question: "Do you work with clients internationally?",
                answer: "Yes! We have clients across the globe and are comfortable working across different time zones and cultural contexts."
              },
              {
                question: "How can we schedule a consultation?",
                answer: "You can request a consultation through our contact form, or directly email us at meetings@spigle.com to set up a call."
              },
              {
                question: "Do you offer support for existing projects?",
                answer: "Absolutely. We provide maintenance and optimization services for existing digital products, even if we didn't build them originally."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
