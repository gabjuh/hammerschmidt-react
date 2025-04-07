import { AnchorHTMLAttributes, FC, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import hammerschmidtVideo from '../assets/hammerschmidt.webm';
import FacebookIcon from '../assets/svg/facebook-icon';
import WebsiteIcon from '../assets/svg/website-icon';
import YoutubeIcon from '../assets/svg/youtube-icon';
import BackLink from '../components/BackLink';
import Hr from '../components/Hr';
import MusicianNavigationWidget, {
    MusicianNavigationWidgetDataT
} from '../components/MusicianNavigationWidget';
import { musiciansData, musiciansDataT } from '../data/musicians-data';
import { slugify } from '../utils/slugify';

export const LinkRenderer: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
};

const MusicianPortfolio = () => {
  const { name } = useParams<{ name: string }>(); 
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [musiciansNavigationWidgetsData, setMusiciansNavigationWidgetsData] = useState<MusicianNavigationWidgetDataT[]>([]);

  // Ensure the page loads at the top immediately without smooth scrolling
  useEffect(() => {
    const data: MusicianNavigationWidgetDataT[] = [];

    musiciansData.map((person: musiciansDataT) => {
      if (musiciansNavigationWidgetsData.find((mus: MusicianNavigationWidgetDataT) => mus.name === person.name) || slugify(person.name) === name) {
        return;
      }

      data.push({
        name: person.name,
        imgUrl: person.imgUrl,
        portfolioUrl: `/portfolio/${slugify(person.name)}`
      })

    })
    setMusiciansNavigationWidgetsData(data);

    // console.log(musiciansNavigationWidgetsData)

    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"; // Disable browser's scroll memory
    }
  }, []);

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

  const musician = musiciansData.find((m) => slugify(m.name) === name);
  
  if (!musician) {
    return <h2 className="text-center text-white font-bold mt-15">Musician not found</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{musician.name} portfólió oldala</title>
        <meta name="description" content={`${musician.name} portfólió oldala`} />
        <link rel="canonical" href="https://hammerschmidt-consort.com/" />
      </Helmet>
      <div className="min-h-[400px] text-white flex justify-center px-3 pt-7 md:p-6 mb-10 pb-5 relative">

        {/* <div className="absolute">
          <Deviders h="182.83 " w="1219.87" color="red"/>
        </div> */}
        <div className="w-full max-w-6xl bg-[#fff1] rounded-lg shadow-lg flex flex-wrap md:flex-nowrap gap-6 relative py-6 px-3 md:px-10">

          {/* Left Side - Fixed Musician Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 md:sticky top-[100px] self-start mt-8 mb-4 md:mt-[68px]">
            {musician.showAsCard === undefined &&
              <img
                src={musician.imgUrl}
                alt={musician.name}
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            }
            {musician.showAsCard === false &&
              <div
                ref={containerRef}
                className="w-fullmb-8 md:mb-0 mt-10 lg:mt-0"
              >
                <video
                  ref={videoRef}
                  className="w-full rounded-xl shadow-lg"
                  src={hammerschmidtVideo}
                  muted
                  loop={true}
                  playsInline
                />
              </div>
            }

            {/* Social Media Links */}
            <div className="mt-4 flex text-center">
              <div className="flex mx-auto">
                {musician.website && (
                  <a
                    title="Weboldal"
                    href={musician.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400 opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-300"
                  >
                    <WebsiteIcon w="36" h="36" />
                  </a>
                )}
                {musician.facebook && (
                  <a
                    title="Facebook Oldal"
                    href={musician.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-500 opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-300 translate-y-[-5px] mr-[2px]"
                  >
                    <FacebookIcon w="45" h="45" />
                  </a>
                )}
                {musician.youtube && (
                  <a
                    title="Youtube Csatorna"
                    href={musician.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-red-500 opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-300"
                  >
                    <YoutubeIcon w="36" h="36" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Side - Bio & Links */}
          <div className="flex-1 min-w-64 overflow-auto">
            <h2 className="font-title text-orange-300 text-center md:text-left text-5xl font-bold mb-1">
              {musician.name}
            </h2>

            <Hr />

            {/* Markdown Bio */}
            <div className="musician-bio text-white mb-4 hyphens-auto prose prose-invert leading-7 text-center md:text-left">
              <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
                {musician.bio.replace(/\$\$/g, "\n\n")}
              </ReactMarkdown>
            </div>
            <MusicianNavigationWidget musicians={musiciansNavigationWidgetsData} />
          </div>
          {/* Back Link */}
          {/* <Link to={`/#${name}`} className="text-center absolute bottom-3 right-3  block mt-6 opacity-80 hover:opacity-100 text-orange-300 hover:text-orange-400 transition-all ease-in-out duration-300 scale-y-[-1]">
            <ArrowGoBackIcon h="25" w="25"/>
          </Link> */}
          <BackLink target={`/#${name}`} />
        </div>
      </div>
    </>
  );
};

export default MusicianPortfolio;
