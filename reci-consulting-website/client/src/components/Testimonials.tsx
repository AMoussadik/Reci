import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  rating: number;
  content: string;
  author: {
    initials: string;
    name: string;
    title: string;
  };
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      rating: 5,
      content: "ReCi transformed our boutique hotel's operations within three months. Their staff training program significantly improved our guest satisfaction scores, and their revenue optimization strategies increased our ADR by 22%.",
      author: {
        initials: "JD",
        name: "Jonathan Davis",
        title: "General Manager, The Eastwood Hotel"
      }
    },
    {
      rating: 5,
      content: "Working with ReCi on our restaurant relaunch was the best decision we made. Their attention to detail and understanding of current market trends helped us create a dining experience that's now booked solid three months in advance.",
      author: {
        initials: "SC",
        name: "Sophia Chen",
        title: "Owner, Sapphire Dining"
      }
    },
    {
      rating: 5,
      content: "The regulatory compliance audit conducted by ReCi saved us from potential issues during our annual inspection. Their thorough approach and actionable recommendations were invaluable to our multi-property operation.",
      author: {
        initials: "MR",
        name: "Marcus Rodriguez",
        title: "Regional Director, Crown Resorts"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start auto-sliding
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);
  
  const updateSlidePosition = () => {
    if (!trackRef.current) return;
    
    const slideWidth = trackRef.current.offsetWidth / slidesPerView;
    trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };
  
  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex, slidesPerView]);
  
  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <div className="section-heading mx-auto"></div>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-foreground/80">
            Hear what our clients have to say about their experience working with ReCi Hospitality Consulting
          </p>
        </div>
        
        <div className="relative" id="testimonial-slider">
          <div className="overflow-hidden">
            <div 
              ref={trackRef} 
              className="flex transition-all duration-500"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4`}
                >
                  <div className="bg-accent p-8 rounded-sm shadow-md h-full">
                    <div className="text-secondary mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-current" size={20} />
                      ))}
                    </div>
                    <p className="italic text-foreground/80 mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.author.initials}
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-foreground">{testimonial.author.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-foreground z-10 transition-all duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-foreground z-10 transition-all duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-secondary opacity-100' : 'bg-gray-300 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
