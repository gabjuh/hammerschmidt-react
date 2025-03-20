import { AnchorHTMLAttributes, FC, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import FacebookIcon from '../assets/svg/facebook-icon';
import WebsiteIcon from '../assets/svg/website-icon';
import YoutubeIcon from '../assets/svg/youtube-icon';
import { musiciansData } from '../data/musicians-data';
import { slugify } from '../utils/slugify';

const LinkRenderer: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
};

const MusicianPortfolio = () => {
  const { name } = useParams<{ name: string }>(); 

  // Ensure the page loads at the top immediately without smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"; // Disable browser's scroll memory
    }
  }, []);

  const musician = musiciansData.find((m) => slugify(m.name) === name);
  
  if (!musician) {
    return <h2 className="text-center text-white font-bold mt-15">Musician not found</h2>;
  }

  return (
    <div className="min-h-[400px] text-white flex justify-center p-6">
      <div className="w-full max-w-6xl bg-[#fff1] rounded-lg shadow-lg flex flex-wrap md:flex-nowrap gap-6 relative py-6 px-10">
        {/* Left Side - Fixed Musician Image */}
        <div className="w-full md:w-1/3 flex-shrink-0 md:sticky top-[100px] self-start">
          <img
            src={musician.imgUrl}
            alt={musician.name}
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Bio & Links */}
        <div className="flex-1 min-w-64 overflow-auto">
          <h2 className="font-title text-orange-300 text-center md:text-left text-5xl font-bold mb-2">
            {musician.name}
          </h2>
          {/* <h3 className="text-[1.3rem] text-gray-300 my-4 text-center md:text-left italic">
            {musician.title}
          </h3> */}

          {/* Markdown Bio */}
          <div className="musician-bio text-white mb-4 hyphens-auto text-justify prose prose-invert leading-7">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
              {musician.bio.replace(/\$\$/g, "\n\n")}
            </ReactMarkdown>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex">
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

          {/* Back Link */}
          <Link to={`/#${name}`} className="block mt-6 text-orange-300 hover:text-orange-400 transition">
            Vissza
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MusicianPortfolio;
