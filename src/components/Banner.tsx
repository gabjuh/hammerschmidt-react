import { useLocation, useNavigate } from 'react-router-dom';

import banner1024 from '../assets/img/stage-1024.webp';
import banner1440 from '../assets/img/stage-1440.webp';
import banner1920 from '../assets/img/stage-1920.webp';
import banner2560 from '../assets/img/stage-2560.webp';
import banner480 from '../assets/img/stage-480.webp';
import banner768 from '../assets/img/stage-768.webp';
import { useLanguage } from '../context/LanguageContext';
import { PageTexts } from '../data/page-texts-data';
import scrollToId from '../helpers/scrollToId';
import { getLocalizedField } from '../i18n/utils';

const Banner = () => {
  const location = useLocation();

  const { lang } = useLanguage();

  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleScrollOrNavigate = (targetId: string) => {
    const langPrefix = `/${lang}`;
    const isHome = currentPath === langPrefix || currentPath === `${langPrefix}/`;

    if (isHome) {
      scrollToId(targetId);
    } else {
      navigate(`${langPrefix}#${targetId}`);
      // Wait until navigation completes, then scroll
      setTimeout(() => scrollToId(targetId), 200);
    }
  };

  const bannerBandName = getLocalizedField(PageTexts, 'bannerBandName', lang);
  const bannerProjectTitle = getLocalizedField(PageTexts, 'bannerProjectTitle', lang);
  const bannerSmallText = getLocalizedField(PageTexts, 'bannerSmallText', lang);
  const bannerBtn1Text = getLocalizedField(PageTexts, 'bannerBtn1Text', lang);
  const bannerBtn2Text = getLocalizedField(PageTexts, 'bannerBtn2Text', lang);
  
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

        <div className="z-20 relative flex flex-col items-center justify-center text-center text-white h-full px-4">
          <div className="bg-white/5 px-5 sm:px-7 py-5 md:px-10 md:py-7 lg:px-24 lg:py-10 backdrop-blur-md rounded-[30px]">
            <p className="text-xl md:text-4xl font-title mb-3">{ bannerBandName }</p>
            <p className="text-4xl md:text-6xl font-title drop-shadow-lg text-orange-300">{ bannerProjectTitle }</p>
            <p className="text-lg md:text-2xl mt-3 font-title drop-shadow-lg">{ bannerSmallText }</p>
            <div className="mt-6 flex gap-4 flex-wrap justify-center">
              <button
                type="button"
                className="px-6 py-2 rounded-full bg-[#A14028] shadow text-white font-bold hover:bg-[#832f1c] transition duration-200 cursor-pointer"
                onClick={() => {
                  handleScrollOrNavigate(PageTexts.bannerBtn1Url.slice(1));
                }}
              >
                { bannerBtn1Text }
              </button>
              <button
                type="button"
                className="px-6 py-2 rounded-full border-2 border-[#A14028] shadow text-[#A14028] font-bold bg-[#E4BF87] hover:brightness-110 transition duration-200"
                onClick={() => {
                  handleScrollOrNavigate(PageTexts.bannerBtn2Url.slice(1));
                }}
              >
                { bannerBtn2Text }
              </button>
              {/* <LangLink to="#concerts" className="px-6 py-2 rounded-full bg-[#A14028] shadow text-white font-bold hover:bg-[#832f1c] transition duration-200">
                Helyszínek
              </LangLink>
              <LangLink to="#musicians" className="px-6 py-2 rounded-full border-2 border-[#A14028] shadow text-[#A14028] font-bold bg-[#E4BF87] hover:brightness-110 transition duration-200">
                Művészek
              </LangLink> */}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Banner;