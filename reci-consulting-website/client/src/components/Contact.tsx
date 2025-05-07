import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Globe, Linkedin, Twitter, Instagram } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Website Inquiry: ${formData.service || 'General'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service of Interest: ${formData.service || 'Not specified'}
Message: ${formData.message}
    `.trim();
    
    // Encode the email parameters
    const mailtoLink = `mailto:info@reciconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's email client
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email Client Opened",
      description: "Please send the email from your email client to complete the inquiry.",
    });
    
    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="section-heading mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-foreground/80">
            Get in touch with our team to discuss how we can help elevate your hospitality business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary" 
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</Label>
                <Input 
                  type="text" 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary" 
                  placeholder="Your Company"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium text-foreground">Service of Interest</Label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Select a service</SelectItem>
                    <SelectItem value="operational-turnarounds">Operational Turnarounds</SelectItem>
                    <SelectItem value="staff-training">Staff Training & Development</SelectItem>
                    <SelectItem value="guest-experience">Guest Experience Design</SelectItem>
                    <SelectItem value="regulatory-compliance">Regulatory Compliance</SelectItem>
                    <SelectItem value="revenue-optimization">Revenue Optimization</SelectItem>
                    <SelectItem value="event-planning">Event & Launch Planning</SelectItem>
                    <SelectItem value="other">Other (please specify)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary" 
                  placeholder="Tell us about your project or inquiry"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-primary text-white font-bold rounded-sm hover:bg-primary/90 transition duration-300 shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-sm shadow-md h-full">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-secondary text-xl mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-foreground">Email Us</h4>
                    <a 
                      href="mailto:info@reciconsulting.com" 
                      className="text-foreground/80 hover:text-secondary transition duration-300"
                    >
                      info@reciconsulting.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-foreground">Call Us</h4>
                    <a 
                      href="tel:+18005551234" 
                      className="text-foreground/80 hover:text-secondary transition duration-300"
                    >
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-foreground">Office Hours</h4>
                    <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary text-xl mt-1">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-foreground">Global Service</h4>
                    <p className="text-foreground/80">
                      We provide consulting services worldwide with offices in New York, London, and Singapore
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
