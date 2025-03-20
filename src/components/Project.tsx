const Project = () => {
  return (
    <div id="hammerschmidt" className="container mx-auto flex flex-col-reverse items-center justify-center text-white py-32  mt-20 px-6">
      <div className="w-full bg-[#fff1] p-8 rounded-lg shadow-lg flex flex-wrap lg:flex-nowrap gap-6 relative">
        {/* Text Block (Left on Desktop, Below Image on Mobile) */}
        <div className="w-full lg:w-1/2 text-center lg:text-right md:pr-10">
          <span className="text-lg block">A szerző</span>
          <h2 className="font-title text-4xl sm:text-5xl my-5 text-orange-300 drop-shadow-lg">Andreas Hammerschmidt</h2>
          <h3 className="text-xl sm:text-2xl mb-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vel!
          </h3>
          <p className="font-extralight text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem sequi, facilis quos repellat culpa dicta, iusto nam quae nesciunt expedita dolores in dolorem veritatis totam, obcaecati deleniti porro quidem?
          </p>
        </div>

        {/* Image (Right on Desktop, Above on Mobile) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 md:mb-0 mt-10 lg:mt-0">
          <img className="w-full max-w-[400px] md:max-w-[450px] rounded-xl shadow-lg" src="src/assets/img/hammerschmidt.png" alt="Hammerschmidt Image" />
        </div>
      </div>
    </div>
  );
};

export default Project;
