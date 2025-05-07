const About = () => {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "35+", label: "Countries Served" },
    { value: "25+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              About ReCi Consulting
            </h2>
            <div className="section-heading"></div>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Founded by industry veterans with over 25 years of combined experience in luxury hospitality management, ReCi Consulting brings unparalleled expertise to every client engagement.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              Our team has successfully transformed operations for boutique hotels, Michelin-starred restaurants, and international resort chains across four continents.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl font-playfair font-bold text-secondary">{stat.value}</span>
                  <span className="text-foreground mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-4">
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Luxury hotel restaurant with elegant table settings" 
              className="w-full h-auto rounded-sm shadow-lg" 
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Hospitality consultant speaking with hotel staff" 
                className="w-full h-auto rounded-sm shadow-lg" 
              />
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Luxury hotel reception area with staff" 
                className="w-full h-auto rounded-sm shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
