const MenuItem = (
  {text, link, classes}: {text: string | undefined | boolean, link: string, classes: string}
) => {
  return (
    <li className="bg-[#A14028] text-white cursor-pointer first-of-type:rounded-l-full py-2 px-3 first-of-type:pl-7 last-of-type:rounded-r-full last-of-type:mr-6 lg:px-1 xl:px-3 2xl:px-5">
      <a href={link} className={`transition-colors duration-[.3s] ease-in-out pr-5 ${classes}`}>{text}</a>
    </li>
  )
}

export default MenuItem