import SocialLinks from './SocialLinks';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:umut.tanriverdiceng@gmail.com';
  };

  const handleDownloadCV = () => {
      const link = document.createElement('a');
      link.href = '/UmutTANRIVERDI.pdf'; // public klasörden direkt erişilebilir
      link.download = 'UmutTANRIVERDI.pdf';
      link.click();
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center pb-2">
          Umut Tanriverdi
        </h1>
        <p className="text-white text-base md:text-lg font-medium text-center pb-4">
          Computer Engineering Student | Junior .NET Backend Developer
        </p>
        <p className="text-white text-sm md:text-base font-normal leading-normal px-4 md:px-0 pb-6 max-w-[1000px] text-center mx-auto">
          I’m a fourth-year student passionate about backend development and machine learning. 
          I work with .NET Core and enjoy building scalable solutions with C#. 
          I also have experience in data analysis and deploying ML models using FastAPI and Docker.
        </p>

        <div className="flex justify-center">
          <div className="flex flex-wrap gap-3 max-w-[480px] justify-center px-4">
            <button
              onClick={handleContactClick}
              className="min-w-[120px] cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-[#dfaeee] text-[#1d1320] text-sm font-bold tracking-[0.015em] hover:bg-[#d299e6] transition-colors"
            >
              Contact Me
            </button>
            <button
              onClick={handleDownloadCV}
              className="min-w-[120px] cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-[#3d2843] text-white text-sm font-bold tracking-[0.015em] hover:bg-[#4a2f50] transition-colors"
            >
              Download CV
            </button>
          </div>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero;
