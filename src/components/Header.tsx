import { Link } from 'react-router-dom';


const TRFlag = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#E30A17"/>
    <circle cx="9" cy="7.5" r="4.5" fill="white"/>
    <circle cx="10.5" cy="7.5" r="3.5" fill="#E30A17"/>
    <polygon points="13,5 11.5,7.5 13,10" fill="white"/>
  </svg>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#3d2843] px-10 py-3">
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
          <Link to="/"className="hidden sm:inline">Umut Tanriverdi</Link>
          <Link to="/" className="inline sm:hidden">Umut</Link>
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            to="/"
            className="text-white text-sm font-medium leading-normal hover:underline"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-white text-sm font-medium leading-normal hover:underline"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-white text-sm font-medium leading-normal hover:underline"
          >
            About Me
          </Link>
        </div>
        <button className="flex min-w-[40px] max-w-[60px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 bg-[#3d2843] text-white text-xs font-medium leading-normal tracking-[0.015em]">
          <TRFlag />
        </button>
      </div>
    </header>
  );
};

export default Header;
