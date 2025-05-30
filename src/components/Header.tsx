import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <Home 
              size={28} 
              className={`transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`} 
            />
            <span 
              className={`text-xl font-semibold transition-colors ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              Thai Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-yellow-400 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              หน้าหลัก
            </Link>
            <Link 
              to="/properties" 
              className={`transition-colors hover:text-yellow-400 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              อสังหาริมทรัพย์
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-yellow-400 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              เกี่ยวกับเรา
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors hover:text-yellow-400 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              ติดต่อ
            </Link>
            <button 
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X 
                size={24} 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
              />
            ) : (
              <Menu 
                size={24} 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าหลัก
              </Link>
              <Link 
                to="/properties" 
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                อสังหาริมทรัพย์
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                เกี่ยวกับเรา
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อ
              </Link>
              <div className="relative px-4">
                <input
                  type="text"
                  placeholder="ค้นหา..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search 
                  size={20} 
                  className="absolute right-8 top-2.5 text-gray-400" 
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;