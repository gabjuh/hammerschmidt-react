import { Link } from 'react-router-dom';

import FacebookIcon from '../assets/svg/facebook-icon';
import GithubIcon from '../assets/svg/github-icon';
import LangLink from './LangLink';

const Footer = () => {
  return (
    <footer className="bg-[#0001] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Media and Copyright */}
        <div className=" pt-6 text-center">
          <div className="flex justify-center space-x-6">
            <Link to="https://www.facebook.com/profile.php?id=61572183803563" target="_blank" className="opacity-70 hover:opacity-100 transition">
              <FacebookIcon w="42" h="42" />
            </Link>
            <Link to="https://github.com/gabjuh/hammerschmidt-react" target="_blank" className="opacity-70 hover:opacity-100 transition translate-y-[6px]">
              <GithubIcon w="29" h="29" />
            </Link>
          </div>
          <p className="mt-4 text-md">
            <LangLink className="text-orange-300 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out" to="/impresszum">Impresszum</LangLink>
            <span className="inline-block mx-3">|</span>
            <LangLink className="text-orange-300 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out" to="/adatvedelmi-nyilatkozat">Adatvédelem</LangLink>
            <span className="inline-block mx-3">|</span>
            <LangLink className="text-orange-300 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out" to="/plakatok">Plakátok</LangLink>
          </p>
          <p className="mt-4 text-xs">© 2025 Hammerschmidt</p>
          <p className="mt-1 text-xs">Minden jog fenntartva.</p>
          <p className="mt-1 text-xs">Design: <a className="text-orange-300" href="https://gaborjuhasz.de" target="_blank">Juhász Gábor</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer