const Project = () => {
  return (
    <div id="hammerschmidt" className="container flex mx-auto items-center justify-center text-white py-52">
      <div className="w-1/2 pr-5">
        <h2 className="text-4xl mb-5 text-orange-300 drop-shadow-lg">Andreas Hammerschmidt</h2>
        <h3 className="text-2xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vel!</h3>
        <p className="font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem sequi, facilis quos repellat culpa dicta, iusto nam quae nesciunt expedita dolores in dolorem veritatis totam, obcaecati deleniti porro quidem?</p>
        {/* <a href="#" class="inline-block mt-5 px-7 py-2 rounded-full bg-orange-300 shadow-lg uppercase text-white font-bold">CTA Button</a> */}
      </div>
      <div className="w-[450px] h-auto">
        <img className="rounded-xl shadow-lg" src="src/assets/img/hammerschmidt.png" alt="Hammerschmidt Image" />
      </div>
    </div>
  )
}

export default Project