import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { navItems } from '../data/siteData';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0]?.id);
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-grid">
        <nav className={`nav ${open ? 'open' : ''}`} id="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={item.id === activeId ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;
