import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full bg-white/95 shadow-md z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-3'
      }`} 
      id="header"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl font-playfair font-bold text-primary">
            <span className="text-secondary">Re</span>Ci
          </div>
          <span className="ml-2 text-sm uppercase tracking-wider text-foreground hidden md:inline-block">
            Hospitality Consulting
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#home" 
                className="text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full border-t border-gray-200`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-4">
            <li>
              <a 
                href="#home" 
                className="block py-2 text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="block py-2 text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className="block py-2 text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-foreground hover:text-secondary transition duration-300 font-medium"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
