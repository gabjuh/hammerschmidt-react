import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { slugify } from '../utils/slugify';

const Person = ({
  name,
  title,
  shortBio,
  imgUrl,
  openedPersonDetailsId,
  setOpenedPersonDetailsId,
}: {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  imgUrl: string;
  imgName?: string;
  openedPersonDetailsId: string | null;
  setOpenedPersonDetailsId: (id: string | null) => void;
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const personId = slugify(name);

  // Determine if this person is currently open
  const isOpen = openedPersonDetailsId === personId;

  // Toggle details
  const toggleDetails = () => {
    setOpenedPersonDetailsId(isOpen ? null : personId);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenedPersonDetailsId(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenedPersonDetailsId]);

  return (
    <>
      <div id={personId} className="absolute top-[-120px]"></div>
      <div className="mx-auto min-w-[300px] w-full h-full">
        <div className="flex-col relative bg-[#A89F89] md:px-10 py-10 shadow-md pb-[130px] pt-[50px]">
          <Link to={`/portfolio/${slugify(name)}`}>
            <motion.div
              className="mx-auto size-[250px] bg-cover rounded-full bg-center transform-gpu shadow-sm hover:shadow-md"
              style={{ 
                backgroundImage: `url(${imgUrl})`,
              }}
              whileHover={{
                scale: 1.07, // Kissé felnagyítja a képet
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }} // Kicsit összenyomódik kattintásra
            ></motion.div>
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
            initial={false} // Prevents animations from triggering on load
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={toggleDetails}
            style={{
              position: "absolute", // Prevents layout shifts
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
              animate={{ opacity: isOpen ? 1 : 0, marginTop: isOpen ? "-10px" : "20px" }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.h4>

            {/* Bio */}
            <div className="overflow-y-auto max-h-[400px] px-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hyphens-auto text-justify">
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
