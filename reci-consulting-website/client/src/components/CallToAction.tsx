import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative" 
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")' }}
    >
      <div className="absolute inset-0 bg-primary/85"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
          Ready to Transform Your Hospitality Business?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Schedule a complimentary 30-minute consultation to discuss your specific challenges and how ReCi can help elevate your operations.
        </p>
        <Button
          asChild
          variant="secondary"
          className="inline-block px-8 py-4 bg-secondary text-foreground font-bold rounded-sm hover:bg-white transition duration-300 shadow-lg text-lg"
        >
          <a href="#contact">Book Your Consultation</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
