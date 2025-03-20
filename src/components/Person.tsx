import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { musiciansDataT } from '../data/musicians-data';
import { slugify } from '../utils/slugify';

const Person = ({ name, title, shortBio, imgUrl }: musiciansDataT) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Toggle details
  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
    
    // Force repaint to prevent unwanted scroll
    setTimeout(() => {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }, 0);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id={slugify(name)} className="absolute top-[-120px]"></div>
      <div className="mx-auto min-w-[300px] w-full h-full">
        <div className="flex-col relative bg-[#A89F89] p-10 shadow-md pb-[130px] pt-[50px]">
          <Link to={`/portfolio/${slugify(name)}`}>
          <div
              className="mx-auto size-[250px] bg-cover rounded-full bg-center"
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
          </Link>
          
          <h3 className="font-title musician-card-name text-center mt-10 whitespace-nowrap">
            <Link to={`/portfolio/${slugify(name)}`}>{name}</Link>
          </h3>
          <p className="opacity-75 text-md mt-2 italic text-center">{title}</p>

          {/* Musician Details */}
          <motion.div
            ref={detailsRef}
            className="absolute musician-details w-full left-0 bottom-0 text-center bg-[#cabfab89] text-4xl pt-4.5 text-[#666] cursor-pointer backdrop-filter backdrop-blur-md overflow-hidden"
            animate={{ height: isOpen ? 542 : 90 }}
            initial={false} // <== Prevents animations from triggering on load
            // initial={{ height: 90 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={toggleDetails}
            style={{
              position: 'absolute', // Prevents layout shifts
              minHeight: 90, // Stops reflow from jumping
              bottom: 0, // Ensures it stays locked at the bottom
            }}
          >
            {/* Dots */}
            <motion.span
              className="dots inline-block"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              ...
            </motion.span>

            {/* Name */}
            <motion.h4
              className="text-black font-title mt-12 text-center mb-10"
              animate={{ opacity: isOpen ? 1 : 0, marginTop: isOpen ? '-10px' : '20px' }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.h4>

            {/* Bio */}
            <div
              className="overflow-y-auto max-h-[400px] px-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hyphens-auto text-justify"
            >
              <motion.p
                className="text-lg text-black leading-8 text-center"
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {shortBio}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Person;
