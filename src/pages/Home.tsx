import Banner from '../components/Banner';
import Concerts from '../components/Concerts';
// import ContactForm from '../components/ContactForm';
import Musicians from '../components/Musicians';
import Project from '../components/Project';

const Home = () => {
  return (
    <>
      <Banner />
      <Project />
      <Musicians />
      <Concerts />
      {/* <ContactForm />    */}
    </>
  )
}

export default Home