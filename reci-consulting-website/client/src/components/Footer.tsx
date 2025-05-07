const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-playfair font-bold text-white mb-4">
              <span className="text-secondary">Re</span>Ci
            </div>
            <p className="text-white/70 max-w-md">
              ReCi Hospitality Consulting provides premium advisory services to elevate operations, enhance guest experiences, and maximize profitability for hospitality businesses worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-secondary transition duration-300">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Services</a></li>
              <li><a href="#about" className="text-white/70 hover:text-secondary transition duration-300">About</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-secondary transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-secondary transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Operational Turnarounds</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Staff Training</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Guest Experience Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Regulatory Compliance</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition duration-300">Revenue Optimization</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} ReCi Hospitality Consulting. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white/60 hover:text-secondary transition duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-secondary transition duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-secondary transition duration-300 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
