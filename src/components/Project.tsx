import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import { musiciansData, musiciansDataT } from '../data/musicians-data';
import { LinkRenderer } from '../pages/MusicianPortfolio';

const Project = () => {
  const containerRefMobile = useRef<HTMLDivElement | null>(null);
  const containerRefDesktop = useRef<HTMLDivElement | null>(null);
  const videoRefMobile = useRef<HTMLVideoElement | null>(null);
  const videoRefDesktop = useRef<HTMLVideoElement | null>(null);

  const hammerschmidt: musiciansDataT | undefined = musiciansData.find((person) => person.showAsCard === false);

  useEffect(() => {
    const createObserver = (container: HTMLDivElement | null, video: HTMLVideoElement | null) => {
      if (!container || !video) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio === 1) {
            video.currentTime = 0;
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        },
        {
          threshold: 1.0,
        }
      );

      observer.observe(container);

      return () => observer.disconnect();
    };

    const cleanupMobile = createObserver(containerRefMobile.current, videoRefMobile.current);
    const cleanupDesktop = createObserver(containerRefDesktop.current, videoRefDesktop.current);

    return () => {
      cleanupMobile?.();
      cleanupDesktop?.();
    };
  }, []);

  return (
    <div
      id="hammerschmidt"
      className="container mx-auto flex flex-col-reverse items-center justify-center text-white xl:py-18 mt-10 md:mt-20 px-2 md:px-6"
    >
      <div className="w-full bg-[#fff1] px-3 pt-10 md:p-8 rounded-lg items-center shadow-lg flex flex-wrap lg:flex-nowrap lg:gap-6 relative">
        {/* Text Block */}
        <div id="project-markdown-text" className="w-full lg:w-1/2 text-center lg:text-right">
          <p className="text-2xl font-title">A szerző</p>
          <h2 className="font-title text-[2.4rem] leading-8.5 md:leading-10 sm:text-5xl my-5 text-orange-300 drop-shadow-lg">
            { hammerschmidt?.name }
          </h2>
          <h3 className="text-3xl font-title sm:text-2xl mb-5 mt-3 opacity-50">
            „Zittaui Orfeusz, kinek hangjai Isten trónja előtt zengenek tovább.”
          </h3>

          {/* Video Block - Mobile */}
          <div
            ref={containerRefMobile}
            className="w-full lg:w-1/2 flex lg:hidden justify-center mb-5 md:mb-0 mt-10 lg:mt-0"
          >
            <video
              ref={videoRefMobile}
              className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg"
              muted
              loop={true}
              playsInline
              src="/hammerschmidt.webm"
            >
              <source src="/hammerschmidt.webm" type="video/webm" />
              <source src="/hammerschmidt.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="font-content-extralight sm:text-base leading-6 mt-10 lg:mt-0">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
              { hammerschmidt?.shortBio.replace(/\$\$/g, "\n\n") }
            </ReactMarkdown>
          </div>

          <Link
            to="/koncertprogram"
            className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200 mr-3"
          >
            Koncertprogram
          </Link>
          <Link
            to="/portfolio/andreas-hammerschmidt"
            className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200"
          >
            Életrajz
          </Link>
        </div>

        {/* Video Block - Desktop */}
        <div
          ref={containerRefDesktop}
          className="w-full lg:w-1/2 hidden lg:flex justify-center mb-8 md:mb-0 mt-10 lg:mt-0"
        >
          <video
            ref={videoRefDesktop}
            className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg"
            muted
            loop={true}
            playsInline
            src="/hammerschmidt.webm"
          >
            <source src="/hammerschmidt.webm" type="video/webm" />
            <source src="/hammerschmidt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Project;
