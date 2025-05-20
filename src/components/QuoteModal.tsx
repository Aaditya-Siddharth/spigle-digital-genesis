
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { FileText } from "lucide-react";

const QuoteModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation here
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Form submission logic would go here
    console.log(formData);
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-md px-6 py-3 flex items-center gap-2 transition-all">
          <FileText size={18} />
          Get a Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-primary">Get a Personalized Proposal</DialogTitle>
          <DialogDescription>
            Tell us about your project, and we'll create a tailored solution for you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-medium">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-medium">Email *</Label>
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
          <div className="grid gap-2">
            <Label htmlFor="phone" className="font-medium">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service" className="font-medium">Service Required *</Label>
            <Select onValueChange={handleServiceChange} value={formData.service}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="app-development">App Development</SelectItem>
                <SelectItem value="branding">Branding</SelectItem>
                <SelectItem value="digital-marketing">Digital Marketing & SEO</SelectItem>
                <SelectItem value="business-analytics">Business Analytics</SelectItem>
                <SelectItem value="supply-chain">Supply Chain Optimization</SelectItem>
                <SelectItem value="consulting">Business & Technical Consulting</SelectItem>
                <SelectItem value="ai-automation">AI and Automation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="font-medium">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your project"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
