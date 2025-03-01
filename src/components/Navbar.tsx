import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Hotel } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-gray-800 shadow-md py-2'
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Hotel className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-serif font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Luxe Haven
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`
              }
            >
              Rooms & Suites
            </NavLink>
            <NavLink
              to="/dining"
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`
              }
            >
              Dining
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''} ${isScrolled ? 'text-gray-800' : 'text-white'}`
              }
            >
              Contact
            </NavLink>
            <Link
              to="/rooms"
              className={`btn-primary ${isScrolled ? 'bg-primary' : 'bg-white text-primary hover:bg-gray-100'}`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden bg-white mt-4 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={closeMenu}
              >
                Rooms & Suites
              </NavLink>
              <NavLink
                to="/dining"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={closeMenu}
              >
                Dining
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-800 hover:bg-gray-100 ${isActive ? 'text-primary font-medium' : ''}`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <Link
                to="/rooms"
                className="mx-4 my-3 btn-primary text-center"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;