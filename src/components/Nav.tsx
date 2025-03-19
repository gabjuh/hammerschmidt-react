const Nav = () => {
  return (
    <nav className="sticky top-0 bg-[#fff1] z-50 shadow-lg backdrop-filter backdrop-blur-xl">
      {/* Desktop */}
      <div className="container relative mx-auto flex py-6">
        {/* Logo */}
        <div className="grow w-[350px] px-5">
          {/* <img src="https://placehold.co/400x100" alt="Musica Hammerschmidtalis  Logo"/> */}
          <a href="/" className="font-title text-white text-xl mt-2 lg:text-sm lg:mt-2 xl:text-2xl xl:mt-1 2xl:text-3xl"><span className="opacity-60">Musica</span> Hammerschmidt<span className="opacity-60">alis</span> </a>
        </div>
        {/* Menu Desktop */}
        <div className="flex-grow absolute right-0 lg:visible invisible font-title text-xl tracking-[1px] top-[22px]">
          <ul className="flex justify-center">
            <li className="bg-[#A14028] text-white cursor-pointer py-2 px-4 rounded-l-full">
              <a href="#" data-scroll-target="top" className="scroll-trigger transition-colors duration-[.3s] ease-in-out pl-5">Kezdőlap</a>
            </li>
            <li className="bg-[#A14028] text-white cursor-pointer py-2 px-4">
              <a href="#hammerschmidt" data-scroll-target="hammerschmidt" className="scroll-trigger transition-colors duration-[.3s] ease-in-out">Hammerschmidt</a>
            </li>
            <li className="bg-[#A14028] text-white cursor-pointer py-2 px-4">
              <a href="#musicians" data-scroll-target="musicians" className="scroll-trigger transition-colors duration-[.3s] ease-in-out">Művészek</a>
            </li>
            <li className="bg-[#A14028] text-white cursor-pointer py-2 px-4">
              <a href="#concerts" data-scroll-target="concerts" className="scroll-trigger transition-colors duration-[.3s] ease-in-out">Koncertek</a>
            </li>
            <li className="bg-[#A14028] text-white cursor-pointer py-2 px-4 rounded-r-full">
              <a href="mailto:adgbe@yahoo.de" className="transition-colors duration-[.3s] ease-in-out pr-5">Kapcsolat</a>
            </li>
          </ul>
        </div>

        {/* Menu Mobile */}
        <div id="menu-button" className="w-[35px] visible lg:invisible cursor-pointer">
          <img src="src/hamburger-svgrepo-com.svg" alt="Menu Button"/>
        </div>
        <ul id="dropdown-menu" className="absolute right-0 top-24 bg-[#fff1] rounded-lg w-[300px] py-5 px-7 hidden backdrop-filter backdrop-blur-xl text-center">
          <li className="text-orange-300 py-2 px-7 my-3">
            <a href="#top" className="scroll-trigger" data-scroll-target="top">Kezdőlap</a>
          </li>
          <li className="text-orange-300 py-2 px-7 my-3">
            <a href="#hammerschmidt" className="scroll-trigger" data-scroll-target="hammerschmidt">Hammerschmidt</a>
          </li>
          <li className="text-orange-300 py-2 px-7 my-3">
            <a href="#musicians" className="scroll-trigger" data-scroll-target="musicians">Művészek</a>
          </li>
          <li className="text-orange-300 py-2 px-7 my-3">
            <a href="#concerts" className="scroll-trigger" data-scroll-target="concerts">Koncertek</a>
          </li>
          <li className="bg-orange-300 py-2 px-7 rounded-full">
            <a href="mailto:adgbe@yahoo.de">Kapcsolat</a>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav