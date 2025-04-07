import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Nav from './Nav';

const Layout = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col font-content-light bg-[#54372Afe] cursor-default">
      {/* Navbar */}
      <Nav />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet /> {/* Renders the current route's component */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
