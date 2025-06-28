import type { SocialIconProps } from './types/SocialIconProps';

const SocialIcon = ({ name, icon, url, onClick }: SocialIconProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-2 bg-[#1d1320] py-2.5 text-center w-16 sm:w-20 cursor-pointer hover:scale-105 transition-transform"
      onClick={handleClick}
    >
      <div className="rounded-full bg-[#54395c] p-2 sm:p-2.5 hover:bg-[#4a2f50] transition-colors">
        <div className="text-white w-4 h-4 sm:w-5 sm:h-5">
          {icon}
        </div>
      </div>
      <p className="text-white text-xs sm:text-sm font-medium leading-normal truncate max-w-full">
        {name}
      </p>
    </div>
  );
};

export default SocialIcon;

