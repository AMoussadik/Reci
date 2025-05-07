import { Rocket, Users, Wrench, Handshake } from "lucide-react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl text-secondary mb-4 flex justify-center">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

const FeatureHighlight = () => {
  const features = [
    {
      icon: Rocket,
      title: "Strategic Approach",
      description: "Data-driven analysis combined with decades of industry expertise"
    },
    {
      icon: Users,
      title: "Industry Veterans",
      description: "Consultants with hands-on experience in world-class establishments"
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored strategies that address your specific challenges"
    },
    {
      icon: Handshake,
      title: "Partnership Focused",
      description: "Long-term relationships that ensure sustainable success"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
