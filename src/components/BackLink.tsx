
import ArrowGoBackIcon from '../assets/svg/arrow-go-back-icon';
import LangLink from './LangLink';

const BackLink = ({target}: {target: string}) => {
  return (
    <LangLink to={`${target}`} className="text-center absolute bottom-3 right-3  block mt-6 opacity-80 hover:opacity-100 text-orange-300 hover:text-orange-400 transition-all ease-in-out duration-300 scale-y-[-1]">
      <ArrowGoBackIcon h="25" w="25"/>
    </LangLink>
  )
}

export default BackLink