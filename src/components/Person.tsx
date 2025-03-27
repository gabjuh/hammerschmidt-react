import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import TextIcon from '../assets/svg/text-icon';
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
            className="absolute musician-details w-full left-0 bottom-0 text-center bg-[#cabfab89] text-4xl text-[#666] cursor-pointer backdrop-filter backdrop-blur-md overflow-hidden"
            animate={{ height: isOpen ? 542 : 90 }}
            initial={false} // Prevents animations from triggering on load
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={toggleDetails}
            style={{
              position: "absolute", // Prevents layout shifts
              minHeight: 90, // Stops reflow from jumping
              bottom: 0, // Ensures it stays locked at the bottom
            }}
          >
            
            {/* Text Icon (old Dots) */}
            <motion.span
              className="dots inline-block mt-[28px]"
              animate={{ opacity: isOpen ? 0 : 1 }}
              //  marginTop: !isOpen ? '28px' : '0'
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <TextIcon w="40" h="40" />

            </motion.span>

            {/* Name */}
            <motion.h4
              className={`text-black font-title text-center mt-2 mb-3`}
              animate={{ opacity: isOpen ? 1 : 0, marginTop: isOpen ? "-38px" : "20px" }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.h4>

            {/* Bio + Button Container */}
              <div className="relative h-full px-6 pt-2 pb-[60px]">
                {/* Scrollable Bio */}
                <div className="overflow-y-auto max-h-[385px] hyphens-auto text-justify pr-2">
                  <motion.p
                    className="text-lg text-black leading-8 text-center"
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {shortBio}
                  </motion.p>
                </div>

                {/* Fixed Button */}
                <div className="absolute bottom-28 left-0 right-0 flex justify-center">
                  <Link
                    to={`/portfolio/${slugify(name)}`}
                    className={`px-8 py-1.5 text-xs text-white bg-[#666] rounded-full shadow hover:bg-[#444] transition-all duration-500  ${isOpen ? 'delay-[1.5s]' : 'z-[-1] opacity-0'}`}
                  >
                    Tovább &rarr;
                  </Link>
                </div>
              </div>


          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Person;
