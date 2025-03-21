import { Link } from 'react-router-dom';

import projectImage from '../assets/img/hammerschmidt.png';

const Project = () => {
  return (
    <div id="hammerschmidt" className="container mx-auto flex flex-col-reverse items-center justify-center text-white xl:py-18 mt-10 md:mt-20 px-2 md:px-6">
      <div className="w-full bg-[#fff1] px-3 pt-10 md:p-8 rounded-lg items-center shadow-lg flex flex-wrap lg:flex-nowrap lg:gap-6 relative">
        {/* Text Block (Left on Desktop, Below Image on Mobile) */}
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <p className="text-2xl font-title">A szerző</p>
          <h2 className="font-title text-[2.4rem] leading-8.5 md:leading-10 sm:text-5xl my-5 text-orange-300 drop-shadow-lg">Andreas Hammerschmidt</h2>
          <h3 className="text-3xl font-title sm:text-2xl mb-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="font-content-extralight sm:text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem sequi, facilis quos repellat culpa dicta, iusto nam quae nesciunt expedita dolores in dolorem veritatis totam, obcaecati deleniti porro quidem?
          </p>

          <Link to="/koncertprogram" className="inline-block font-content-medium mt-5 px-7 py-2 rounded-full bg-[#A14028] shadow-lg text-white font-bold hover:bg-[#A14028] transition duration-200">
            Koncertprogram
          </Link>

        </div>

        {/* Image (Right on Desktop, Above on Mobile) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 md:mb-0 mt-10 lg:mt-0">
          <img className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg" src={projectImage} alt="Hammerschmidt Image" />
        </div>
      </div>
    </div>
  );
};

export default Project;
