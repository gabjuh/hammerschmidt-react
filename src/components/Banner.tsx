import banner from '../assets/img/stage.png';

const Banner = () => {
  return (
    <div id="banner" className="mx-auto bg-cover bg-bottom bg-no-repeat h-auto" style={{backgroundImage: `url(${banner})`}}>
  {/* style="background-image: url('src/img/noten.png');" */}
  {/* <div class="absolute h-[400px] w-full bottom-0 bg-gradient-to-b from-transparent to-white"></div> */}
  <div>
    {/* bg-black/60 */}
    <div className="relative mx-auto px-4 h-[88vh]">
      <div className="absolute text-center text-white left-0 right-0 top-[50%] translate-y-[-50%]">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-title mb-3 high-contrast-text ">Projekt</h2>
        <h1 className="text-4xl md:text-6xl font-title drop-shadow-lg text-orange-300 high-contrast-text">Musica Hammerschmidtalis</h1>
        <h2 className="text-xl sm:text-lg md:text-2xl mt-3 font-title drop-shadow-lg high-contrast-text">Lorem ipsum dolor sit amet.</h2>
        {/* <p className="text-lg font-content-thin tracking-[1px] sm:text-base md:text-xl mt-5 max-w-[90%] md:max-w-[70%] drop-shadow-lg mx-auto high-contrast-text text-left auto-hyphens md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat itaque accusamus, quam inventore laboriosam est molestiae architecto, consequuntur, quos officiis doloribus cumque aut necessitatibus qui possimus! Quae, voluptas modi!
        </p> */}
        <div className="mt-3">
          <a href="#concerts" className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200 high-contrast-obj scroll-trigger" data-scroll-target="concerts">
            Helyszínek
          </a>
          <a href="#musicians" className="inline-block font-content-medium mt-5 ml-5 px-7 py-2 rounded-full border-2 border-[#A14028] shadow-lg text-[#A14028] font-bold bg-[#E4BF87] transition ease-in-out duration-300 high-contrast-obj scroll-trigger" data-scroll-target="musicians">
            Művészek
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner