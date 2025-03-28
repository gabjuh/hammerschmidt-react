import banner1024 from '../assets/img/stage-1024.webp';
import banner1440 from '../assets/img/stage-1440.webp';
import banner1920 from '../assets/img/stage-1920.webp';
import banner2560 from '../assets/img/stage-2560.webp';
import banner480 from '../assets/img/stage-480.webp';
import banner768 from '../assets/img/stage-768.webp';

const Banner = () => {
  return (
    <div id="banner" className="relative h-[88vh] max-h-[400px] md:max-h-[700px] lg:max-h-[1000px] 2xl:max-h-[90vh] w-full overflow-hidden">
      {/* h-[88vh] */}
      <picture className="absolute top-0 left-0 w-full h-full z-0">
        <source srcSet={banner2560} media="(min-width: 1920px)" />
        <source srcSet={banner1920} media="(min-width: 1440px)" />
        <source srcSet={banner1440} media="(min-width: 1024px)" />
        <source srcSet={banner1024} media="(min-width: 768px)" />
        <source srcSet={banner768} media="(min-width: 480px)" />
        <img
          src={banner480}
          alt="Stage background"
          className="w-full h-full object-cover object-bottom"
        />
      </picture>

      <div className="absolute h-[400px] w-full bottom-0 z-10 pointer-events-none"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <p className="text-xl md:text-4xl font-title mb-3 high-contrast-text">Hammerschmidt Consort</p>
        <p className="text-4xl md:text-6xl font-title drop-shadow-lg text-orange-300 high-contrast-text">A bizalom ösvénye</p>
        <p className="text-lg md:text-2xl mt-3 font-title drop-shadow-lg high-contrast-text">A 17. század egy elfeledett mestere: Andreas Hammerschmidt</p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <a href="#concerts" className="px-6 py-2 rounded-full bg-[#A14028] shadow text-white font-bold hover:bg-[#832f1c] transition duration-200 high-contrast-obj">
            Helyszínek
          </a>
          <a href="#musicians" className="px-6 py-2 rounded-full border-2 border-[#A14028] shadow text-[#A14028] font-bold bg-[#E4BF87] hover:brightness-110 transition duration-200  high-contrast-obj">
            Művészek
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;