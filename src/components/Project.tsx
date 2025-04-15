import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import hammerschmidtVideo from '../assets/hammerschmidt.webm';
import { useLanguage } from '../context/LanguageContext';
import { musiciansData, musiciansDataT } from '../data/musicians-data';
import { getLocalizedField } from '../i18n/utils';
import { LinkRenderer } from '../pages/MusicianPortfolio';
import LangLink from './LangLink';

const Project = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hammerschmidt: musiciansDataT = musiciansData.find((person) => person.showAsCard === false) ?? {} as musiciansDataT;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.intersectionRatio === 1) {
          // Teljesen látható → lejátszás
          video.currentTime = 0;
          video.play();
        } else {
          // Nem teljesen látható → megáll és visszaugrik
          video.pause();
          video.currentTime = 0;
        }
      },
      {
        threshold: 1.0, // Csak akkor játsszon, ha teljesen a képernyőn van
      }
    );    

    observer.observe(container);

    return () => observer.disconnect();
  }, []);


  const { lang } = useLanguage();
  const name = getLocalizedField(hammerschmidt, 'name', lang);
  const shortBio = getLocalizedField(hammerschmidt, 'shortBio', lang);
  const secondTitle = getLocalizedField(hammerschmidt, 'secondTitle', lang);
  const firstButtonName = getLocalizedField(hammerschmidt, 'firstButtonName', lang);
  const firstButtonUrl = getLocalizedField(hammerschmidt, 'firstButtonUrl', lang);
  const secondButtonName = getLocalizedField(hammerschmidt, 'secondButtonName', lang);
  const secondButtonUrl = getLocalizedField(hammerschmidt, 'secondButtonUrl', lang);


  return (
    <div
      id="hammerschmidt"
      className="container mx-auto flex flex-col-reverse items-center justify-center text-white xl:py-18 mt-10 md:mt-20 px-2 md:px-6"
    >
      <div className="w-full bg-[#fff1] px-3 pt-10 md:p-8 rounded-lg items-center shadow-lg flex flex-wrap lg:flex-nowrap lg:gap-6 relative">
        {/* Text Block */}
        <div id="project-markdown-text" className="w-full lg:w-1/2 text-center lg:text-right">
          {/* <p className="text-2xl font-title">A szerző</p> */}
          <h2 className="font-title text-[2.4rem] leading-8.5 md:leading-10 sm:text-5xl my-5 text-orange-300 drop-shadow-lg">
            { name }
          </h2>
          <h3 className="text-3xl font-title sm:text-2xl mb-5 mt-3 opacity-50">
            {secondTitle}
          </h3>

          {/* Video Block - Desktop */}
          <div
            ref={containerRef}
            className="w-full lg:w-1/2 flex lg:hidden justify-center mb-8 md:mb-0 mt-10 lg:mt-0"
          >
            <video
              ref={videoRef}
              className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg"
              src={hammerschmidtVideo}
              muted
              loop={true}
              playsInline
            />
          </div>

          <div className="font-content-extralight sm:text-base leading-6 mt-12 lg:mt-0">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
              { shortBio.replace(/\$\$/g, "\n\n") }
            </ReactMarkdown>
          </div>

          <LangLink
            to={firstButtonUrl}
            className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200 mr-3"
          >
            {firstButtonName}
          </LangLink>
          <LangLink
            to={secondButtonUrl}
            className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200"
          >
            {secondButtonName}
          </LangLink>
        </div>

        {/* Video Block - Desktop */}
        <div
          ref={containerRef}
          className="w-full lg:w-1/2 hidden lg:flex justify-center mb-8 md:mb-0 mt-10 lg:mt-0"
        >
          <video
            ref={videoRef}
            className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg"
            src={hammerschmidtVideo}
            muted
            loop={true}
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
