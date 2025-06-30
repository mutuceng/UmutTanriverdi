import { Link } from 'react-router-dom';
import { useState } from 'react';

const TRFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#E30A17" />
    <circle cx="9" cy="7.5" r="4.5" fill="white" />
    <circle cx="10.5" cy="7.5" r="3.5" fill="#E30A17" />
    <polygon points="13,5 11.5,7.5 13,10" fill="white" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-[#3d2843] px-6 py-3 relative">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          <Link to="/" className="hidden sm:inline">Umut Tanriverdi</Link>
          <Link to="/" className="inline sm:hidden">Umut</Link>
        </h2>
      </div>

      {/* Menü - büyük ekranda göster, mobilde gizle */}
      <nav className="hidden sm:flex gap-9 text-white text-sm font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Me</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
      </nav>

      {/* Bayrak */}
      <div className="flex items-center gap-2">
        <button className="min-w-[40px] h-8 rounded-lg bg-[#3d2843] text-white flex items-center justify-center">
          <TRFlag />
        </button>

        {/* Hamburger - mobilde göster */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil menü */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1d1320] border-t border-[#3d2843] sm:hidden flex flex-col items-start px-6 py-4 gap-4 z-50 text-white text-sm font-medium">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
