import { Link } from 'react-router-dom';

import FacebookIcon from '../assets/svg/facebook-icon';

const Footer = () => {
  return (
    <footer className="bg-[#0001] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Media and Copyright */}
        <div className=" pt-6 text-center">
          <div className="flex justify-center space-x-6">
            <Link to="https://www.facebook.com/profile.php?id=61572183803563" target="_blank" className="hover:text-gray-100 transition">
              <FacebookIcon w="42" h="42" />
            </Link>
          </div>
          <p className="mt-4 text-md">
            <Link className="hover:text-orange-300 transition-colors duration-300 ease-in-out" to="/impresszum">Impresszum</Link>
            <span className="inline-block mx-3">|</span>
            <Link className="hover:text-orange-300 transition-colors duration-300 ease-in-out" to="/adatvedelmi-nyilatkozat">Adatvédelem</Link>
            <span className="inline-block mx-3">|</span>
            <Link className="hover:text-orange-300 transition-colors duration-300 ease-in-out" to="/plakatok">Plakátok, szóróanyagok</Link>
          </p>
          <p className="mt-4 text-xs">© 2025 Hammerschmidt. Minden jog fenntartva.</p>
          <p className="mt-1 text-xs">Design: Juhász Gábor</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer