import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")' }}
    >
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
          Elevating Hospitality <span className="text-secondary">Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
          ReCi Hospitality Consulting partners with luxury hotels, restaurants, and resorts to transform operations, enhance guest experiences, and maximize revenue potential.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            variant="secondary"
            className="px-8 py-3 bg-secondary text-foreground font-bold rounded-sm hover:bg-white transition duration-300 shadow-lg"
          >
            <a href="#services">Our Services</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white/10 transition duration-300"  
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
