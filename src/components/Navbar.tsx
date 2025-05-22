import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Music 
              size={28} 
              className={`mr-2 ${isScrolled ? 'text-blue-600' : 'text-white'}`}
            />
            <span 
              className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              OBX Live Music
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/events" label="Events" isScrolled={isScrolled} />
            <NavLink to="/venues" label="Venues" isScrolled={isScrolled} />
            <NavLink to="/artists" label="Artists" isScrolled={isScrolled} />
            <NavLink to="/favorites" label="Favorites" isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-3 space-y-2">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/events" label="Events" />
            <MobileNavLink to="/venues" label="Venues" />
            <MobileNavLink to="/artists" label="Artists" />
            <MobileNavLink to="/favorites" label="Favorites" />
          </div>
        </motion.div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`relative ${
        isScrolled 
          ? isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600' 
          : isActive ? 'text-blue-300' : 'text-white hover:text-blue-200'
      } transition-colors`}
    >
      {label}
      {isActive && (
        <motion.div 
          className={`absolute -bottom-1 left-0 h-0.5 w-full ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}
          layoutId="navIndicator"
        />
      )}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`block py-2 px-3 rounded ${
        isActive 
          ? 'bg-blue-50 text-blue-600 font-medium' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;