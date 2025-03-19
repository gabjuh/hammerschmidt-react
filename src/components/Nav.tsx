import { useEffect, useRef, useState } from 'react';

import HamburgerIcon from '../assets/svg/hamburger-icon';
import { menuData } from '../data/menu-data';
import DropdownItem from './menu/DropdownItem';
import MenuItem from './menu/MenuItem';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle clicks outside the menu
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

  // Handle ESC key press
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

  return (
    <nav className="sticky top-0 bg-[#fff1] z-50 shadow-lg backdrop-filter backdrop-blur-xl">
      {/* Desktop */}
      <div className="container relative mx-auto flex py-6">
        {/* Logo */}
        <div className="grow w-[350px] px-5">
          <a href="/" className="font-title text-white text-xl mt-2 lg:text-sm lg:mt-2 xl:text-2xl xl:mt-1 2xl:text-3xl">
            <span className="opacity-60">Musica</span> Hammerschmidt<span className="opacity-60">alis</span>
          </a>
        </div>

        {/* Menu Desktop */}
        <div className="flex-grow absolute right-0 lg:visible invisible font-title text-xl tracking-[1px] top-[22px]">
          <ul className="flex justify-center">
            {menuData.map((item, index) => (
              <MenuItem text={item.text} link={item.link} key={index} classes={item.isHighlighted ? '!text-orange-300' : ''} />
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        <button
          ref={buttonRef}
          className="w-[35px] visible lg:invisible cursor-pointer"
          onClick={handleMenuClick}
        >
          <HamburgerIcon w="30" h="30" />
        </button>

        {isDropdownOpen && (
          <div ref={menuRef}>
            <ul id="dropdown-menu" className="absolute right-0 top-24 bg-[#fff1] rounded-lg w-[300px] py-5 px-7 backdrop-filter backdrop-blur-xl text-center">
              {menuData.map((item, index) => (
                <DropdownItem
                  text={item.text}
                  link={item.link}
                  key={index}
                  classes={item.isHighlighted ? 'bg-orange-300 rounded-full !text-white' : ''}
                  handleClick={handleMenuClick}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
