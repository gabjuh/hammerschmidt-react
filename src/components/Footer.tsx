const Footer = () => {
  return (
    <footer className="bg-[#0001] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Media and Copyright */}
        <div className=" pt-6 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.64 4.56c-.83.37-1.72.61-2.66.72.96-.58 1.7-1.5 2.05-2.6-.9.54-1.9.93-2.96 1.14-.85-.9-2.07-1.46-3.42-1.46-2.59 0-4.68 2.1-4.68 4.68 0 .37.04.73.12 1.08-3.89-.2-7.36-2.06-9.67-4.88-.4.68-.63 1.47-.63 2.31 0 1.6.82 3.01 2.06 3.84-.75-.02-1.45-.23-2.06-.57v.06c0 2.23 1.58 4.09 3.68 4.51-.39.11-.81.17-1.24.17-.3 0-.6-.03-.89-.08.6 1.88 2.35 3.26 4.42 3.3-1.62 1.26-3.67 2.01-5.89 2.01-.38 0-.75-.02-1.12-.06 2.11 1.35 4.6 2.14 7.28 2.14 8.74 0 13.54-7.24 13.54-13.54 0-.21 0-.42-.02-.63.94-.68 1.75-1.53 2.39-2.5z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-100 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.99 3.6 10.94 10.12 11.84v-8.38H7.1v-3.46h3.02v-2.64c0-2.99 1.79-4.63 4.51-4.63 1.31 0 2.68.23 2.68.23v2.95H15.5c-1.46 0-1.91.91-1.91 1.84v2.25h3.26l-.52 3.46H13.6v8.38c5.74-.9 10.12-5.85 10.12-11.84 0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-md">
            <a className="hover:text-orange-300 transition-colors duration-300 ease-in-out" href="#">Impresszum</a>
            <span className="inline-block mx-3">|</span>
            <a className="hover:text-orange-300 transition-colors duration-300 ease-in-out" href="#">Adatvédelem</a>
            <span className="inline-block mx-3">|</span>
            <a className="hover:text-orange-300 transition-colors duration-300 ease-in-out" href="#">Plakátok, szóróanyagok</a>
          </p>
          <p className="mt-4 text-xs">© 2025 Hammerschmidt. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer