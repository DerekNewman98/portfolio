import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { navItems } from "../data/portfolioData";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const renderLink = (mobile = false) =>
    navItems.map((item) => {
      const className = mobile ? "mobile-nav__link" : "header-nav__link";
      const isActive = item.type === "route" && location.pathname === item.path;
      const combinedClassName = `${className}${isActive ? " is-active" : ""}`;

      if (item.type === "scroll") {
        if (isHomePage) {
          return (
            <ScrollLink
              key={item.label}
              to={item.path}
              smooth
              duration={550}
              offset={-84}
              className={combinedClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </ScrollLink>
          );
        }

        return (
          <RouterLink
            key={item.label}
            to={`/#${item.path}`}
            className={combinedClassName}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </RouterLink>
        );
      }

      return (
        <RouterLink
          key={item.label}
          to={item.path}
          className={combinedClassName}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </RouterLink>
      );
    });

  return (
    <>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <RouterLink to="/" className="brand-mark" aria-label="Derek Newman home">
            <span className="brand-mark__orb" />
            <span className="brand-mark__text">
              <span className="brand-mark__name">Derek Newman</span>
              <span className="brand-mark__meta">Neural dynamics portfolio</span>
            </span>
          </RouterLink>

          <nav className="header-nav" aria-label="Primary">
            {renderLink()}
          </nav>

          <button
            type="button"
            className="header-toggle"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M11 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${isMenuOpen ? " is-open" : ""}`}>
        <nav className="mobile-nav__inner" aria-label="Mobile">
          {renderLink(true)}
        </nav>
      </div>
    </>
  );
};

export default Header;
