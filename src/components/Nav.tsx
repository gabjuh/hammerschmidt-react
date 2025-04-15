import { AnimatePresence, motion } from 'framer-motion'; // Import Framer Motion
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import HamburgerIcon from '../assets/svg/hamburger-icon';
import { useLanguage } from '../context/LanguageContext';
import { menuData } from '../data/menu-data';
import { getLanguageKeyEnding } from '../helpers/getLanguageKeyEnding';
import scrollToId from '../helpers/scrollToId';
import { getLocalizedField } from '../i18n/utils';
import { LanguageSelector } from './LanguageSelector';
import DropdownItem from './menu/DropdownItem';
import MenuItem from './menu/MenuItem';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMenuClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <nav className="sticky top-0 bg-[#fff1] z-50 shadow-lg backdrop-filter backdrop-blur-xl h-[83px]">
      {/* Desktop */}
      <div className="container relative mx-auto flex py-6">
        {/* Logo */}
        <div className="grow w-[350px] px-5">
          <Link
            to="/"
            className="inline-block font-title text-orange-300 text-2xl mt-[3px] lg:text-md lg:mt-[2px] xl:text-2xl  2xl:text-3xl"
          >
            {/* <span className="opacity-60">Musica</span> Hammerschmidt
            <span className="opacity-60">alis</span> */}
            Hammerschmidt Consort
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="flex-grow absolute right-0 lg:visible invisible font-title text-xl tracking-[1px] top-[22px]">
          <ul className="flex justify-center">
            {menuData.map((item, index) => {
              const text = getLocalizedField(item, 'text', lang);
              
              return item.link.startsWith("#") ? (
                <li key={index} className={`px-4 relative group bg-[#A14028] text-white cursor-pointer first-of-type:rounded-l-full py-2 first-of-type:pl-7 last-o
                f-type:rounded-r-full last-of-type:mr-7 lg:px-3 xl:px-3 2xl:px-5 ${item.isHighlighted ? "!text-orange-300" : ""}`}>
                  <button
                    type="button"
                    onClick={() => {
                      handleMenuClick();
                      handleScrollOrNavigate(item.link.slice(1));
                    }}
                    className="block hover:opacity-75 transition cursor-pointer"
                  >
                    {text}
                  </button>
                  {/* <Link to={item.link} className="hover:opacity-75 transition">
                    {item.text}
                  </Link> */}
                </li>
              )
              : (
                // Use 'Link' for internal navigation
                <MenuItem text={text} link={item.link} key={index} classes={item.isHighlighted ? "!text-orange-300" : ""} />
              )
            })}
            <li className="relative group bg-[#A14028] text-white cursor-pointer first-of-type:rounded-l-full py-2 px-3 last-of-type:rounded-r-full last-of-type:mr-6 lg:px-1 xl:px-3 2xl:px-5">
              <LanguageSelector />    
            </li>
          </ul>
        </div>

        {/* Menu Mobile */}
        <button
          ref={buttonRef}
          className="w-[35px] visible lg:invisible cursor-pointer translate-x-[-17px]"
          onClick={handleMenuClick}
        >
          <HamburgerIcon w="30" h="30" />
        </button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }} // Start position (hidden)
              animate={{ opacity: 1, y: 0 }} // Show with smooth transition
              exit={{ opacity: 0, y: -20 }} // Hide with fade-out
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-20 bg-[#76594Cff] w-full py-5 px-7 text-center shadow-lg rounded-lg"
            >
              <ul id="dropdown-menu">
                {menuData.map((item, index) =>
                  item.link.startsWith("#") ? (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => {
                          handleMenuClick();
                          handleScrollOrNavigate(item.link.slice(1));
                        }}
                        className="text-center text-white opacity-75 py-2 hover:opacity-100 transition cursor-pointer"
                      >
                        {item[`text${getLanguageKeyEnding(lang) as string}` as keyof typeof item]}
                      </button>
                      {/* <Link
                        to={{lang} + item.link}
                        onClick={handleMenuClick}
                        className="block py-2 hover:opacity-75 transition"
                      >
                        {item.text}
                      </Link> */}
                    </li>
                  ) : (
                    <DropdownItem
                      text={item[`text${getLanguageKeyEnding(lang) as string}` as keyof typeof item]}
                      link={item.link}
                      key={index}
                      classes={item.isHighlighted ? "bg-orange-300 rounded-full !text-white px-4 py-2" : ""}
                      handleClick={handleMenuClick}
                    />
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute top-7 right-[70px] lg:hidden">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
