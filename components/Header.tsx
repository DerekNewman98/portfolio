import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
    { name: 'About', path: 'about', type: 'scroll' },
    { name: 'Research', path: '/research', type: 'route' },
    { name: 'Courses', path: '/courses', type: 'route' },
    { name: 'Demos', path: '/demos', type: 'route' },
    { name: 'Contact', path: 'contact', type: 'scroll' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "cursor-pointer text-text-secondary hover:text-accent transition-colors duration-300 py-2 font-mono";
  const mobileNavLinkClasses = `${navLinkClasses} block text-xl`;

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const linkClass = mobile ? mobileNavLinkClasses : navLinkClasses;
    const closeMenu = () => setIsMenuOpen(false);

    return (
      <>
        {navItems.map((item) => {
            if (item.type === 'scroll') {
                return isHomePage ? (
                    <ScrollLink key={item.name} to={item.path} smooth={true} duration={500} offset={-80} className={linkClass} onClick={closeMenu}>
                      {item.name}
                    </ScrollLink>
                ) : (
                    <RouterLink key={item.name} to={`/#${item.path}`} className={linkClass} onClick={closeMenu}>
                      {item.name}
                    </RouterLink>
                );
            }
            return (
                <RouterLink key={item.name} to={item.path} className={linkClass} onClick={closeMenu}>
                  {item.name}
                </RouterLink>
            );
        })}
      </>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-2xl shadow-black/20 h-16' : 'h-20'}`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <RouterLink to="/" className="text-xl font-bold font-mono text-accent p-2 border-2 border-accent transition-colors duration-300 hover:bg-accent/10">Derek Newman</RouterLink>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6 h-20">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
          <NavLinks mobile={true} />
        </nav>
      </div>
    </header>
  );
};

export default Header;