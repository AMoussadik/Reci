import { 
  ArrowRight, 
  RefreshCw, 
  Users, 
  Star, 
  ClipboardCheck, 
  TrendingUp, 
  Wine 
} from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="service-card bg-white p-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-secondary">
      <div className="text-primary text-3xl mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-playfair font-bold mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-foreground/80 mb-6">
        {description}
      </p>
      <a 
        href="#contact" 
        className="text-secondary hover:text-primary font-medium transition duration-300 flex items-center"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: RefreshCw,
      title: "Operational Turnarounds",
      description: "Comprehensive assessment and implementation of strategic changes to transform underperforming properties into profitable ventures."
    },
    {
      icon: Users,
      title: "Staff Training & Development",
      description: "Customized training programs that elevate service standards, improve staff retention, and ensure consistent guest experiences."
    },
    {
      icon: Star,
      title: "Guest Experience Design",
      description: "Create memorable guest journeys through innovative experience mapping, service design, and touchpoint optimization."
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description: "Navigate complex regulatory environments with our expertise in health, safety, licensing, and employment compliance."
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Strategic pricing models, distribution channel management, and yield strategies to maximize revenue and profitability."
    },
    {
      icon: Wine,
      title: "Event & Launch Planning",
      description: "End-to-end management of property openings, re-brandings, and signature events that drive publicity and engagement."
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="section-heading mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-foreground/80">
            Comprehensive consulting solutions tailored to elevate every aspect of your hospitality business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
