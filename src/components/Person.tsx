import { musiciansDataT } from '../data/musicians-data';

const Person = ({
  name,
  title,
  bio,
  imgUrl
}: musiciansDataT) => {
  return (
    <div className="mx-auto min-w-[400px] w-full h-full">
      <div className="flex-col relative bg-white p-10 shadow-md pb-[130px] pt-[50px]">
        <div className="mx-auto size-[250px] bg-cover rounded-full bg-center" style={{backgroundImage: `url(${imgUrl})`}}>
        </div>
        <h3 className="font-title text-5xl text-center mt-10  whitespace-nowrap">{name}</h3>
        <p className="opacity-75 text-md mt-2 italic text-center">{title}</p>
        {/* details */}
        <div className="absolute musician-details w-full left-0 bottom-0 text-center h-[90px] bg-[#ddda] text-4xl pt-4.5 text-[#666] cursor-pointer transition-all duration-300 ease-in-out backdrop-filter backdrop-blur-sm">
          <span className="dots transition-all duration-300 ease-in-out inline-block translate-y-[-5px]">...</span>
          <h4 className="text-black font-title text-5xl text-center mt-10 invisible transition-all duration-300 ease-in-out opacity-0 mb-10">{name}</h4>
          <p className="text-lg text-black text-left px-6 invisible transition-all duration-300 ease-in-out opacity-0">{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Person