import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FeatureHighlight from "@/components/FeatureHighlight";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      // Type assertion for event target
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement instanceof HTMLElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Attach click event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Clean up event listeners on component unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="antialiased">
        <Header />
        <Hero />
        <Services />
        <About />
        <FeatureHighlight />
        <Testimonials />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
