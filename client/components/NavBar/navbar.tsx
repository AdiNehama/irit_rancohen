import React, { useState, useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

import './navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showArticlesDropdown, setShowArticlesDropdown] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowArticlesDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowArticlesDropdown(false);
    }, 1000);
  };

  const menuItems = [
    { id: 1, text: 'בית', link: '/' },
    { id: 2, text: 'אודות', link: '/about' },
    { id: 3, text: 'תחומי עיסוק', link: '/services' },
    { 
      id: 5, 
      text: 'מאמרים', 
      link: '/articles/family-mediation',
      subItems: [
        { id: 'a1', text: 'גישור משפחתי', link: '/articles/family-mediation' },
        { id: 'a2', text: 'משמורת ילדים', link: '/articles/child-custody' },
        { id: 'a3', text: 'הסכם ממון', link: '/articles/prenup' },
      ]
    },
    { id: 6, text: 'ממליצים', link: '/recommend' },
    { id: 7, text: 'צור קשר', link: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="contact-section">
          <div className="availability">
            <span className="availability-text">זמינות מיידית בטלפון</span>
            <div className="phone-number">
              <Phone size={14} />
              <span dir="ltr">972-522547811</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://wa.me/972522547811" className="social-icon whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" className="social-icon facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/irit_rancohen/" className="social-icon instagram">
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5s-57.8-34.5-93.5-36.2c-37-2.1-148-2.1-185 0-35.7 1.7-67.3 9.9-93.5 36.2S9.7 134.2 8 169.9c-2.1 37-2.1 148 0 185 1.7 35.7 9.9 67.3 36.2 93.5s57.8 34.5 93.5 36.2c37 2.1 148 2.1 185 0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c2.1-37 2.1-148 0-185zm-48.5 224.5c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.3 9-132.6 9s-103.2 2.6-132.6-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.3-9-132.6s-2.6-103.2 9-132.6c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.3-9 132.6-9s103.2-2.6 132.6 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.3 9 132.6s2.6 103.2-9 132.6z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} style={{ position: 'relative' }}>
              {item.subItems ? (
                <div 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.link}
                    className={`menu-item ${location.pathname === item.link ? 'active' : ''}`}
                  >
                    {item.text}
                  </Link>
                  {showArticlesDropdown && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '100%',
                        right: '0',
                        background: 'white',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '4px',
                        padding: '8px 0',
                        minWidth: '200px',
                        zIndex: 1000,
                        marginTop: '8px'
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.link}
                          style={{
                            display: 'block',
                            padding: '8px 16px',
                            color: '#333',
                            textDecoration: 'none',
                            textAlign: 'right',
                            fontFamily: 'text-font',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                            e.currentTarget.style.color = '#6a4c2b';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#333';
                          }}
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`menu-item ${location.pathname === item.link ? 'active' : ''}`}
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}
        </div>

        <img src="/logo.png" alt="לוגו" className="logo-image" />
      </div>
    </nav>
  );
};

export default Navbar;