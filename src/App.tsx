import './App.css';

import Banner from './components/Banner';
import Concerts from './components/Concerts';
import Footer from './components/Footer';
import Musicians from './components/Musicians';
import Nav from './components/Nav';
import Project from './components/Project';

function App() {

  return (
    <>
      <Nav />
      <Banner />
      <Project />
      <Musicians />
      <Concerts />
      <Footer />
    </>
  )
}

export default App
