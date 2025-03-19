import { MouseEventHandler } from 'react';

const DropdownItem = (
  {
    text, 
    link, 
    classes,
    handleClick
  }: {
    text: string, 
    link: string, 
    classes: string
    handleClick: MouseEventHandler<HTMLLIElement>;
  }
) => {
  return (
    <li className={`text-orange-300 py-2 px-7 my-3 ${classes}`} onClick={handleClick}>
      <a href={link} className="scroll-trigger" data-scroll-target="top">{text}</a>
    </li>
  )
}

export default DropdownItem