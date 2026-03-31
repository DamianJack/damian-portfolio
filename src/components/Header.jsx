import { useState } from 'react';
import { navItems } from '../data/siteData';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-grid">
        <a className="logo" href="#home">
          Damian
        </a>

        <nav className={`nav ${open ? 'active' : ''}`} id="nav-menu">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
