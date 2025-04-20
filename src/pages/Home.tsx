import { Helmet } from 'react-helmet-async';

import Banner from '../components/Banner';
import Concerts from '../components/Concerts';
import MediaSlider from '../components/MediaSlider';
// import ContactForm from '../components/ContactForm';
import Musicians from '../components/Musicians';
import Project from '../components/Project';
import SupportUs from '../components/SupportUs';
import YouTubeEmbed from '../components/YouTubeEmbed';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hammerschmidt Consort honlapja</title>
        <meta name="description" content="Andreas Hammerschmidt zenéje, régizenei koncertek" />
        <link rel="canonical" href="https://hammerschmidt-consort.com" />
        <meta property="og:title" content="Hammerschmidt Consort honlapja" />
        <meta property="og:description" content="Andreas Hammerschmidt zenéje, régizenei koncertek" />
        <meta property="og:image" content="https://hammerschmidt-consort.com/hammerschmidt.png" />
        <meta property="og:url" content="https://hammerschmidt-consort.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Banner />
      <YouTubeEmbed videoId="GGKubVRq5Og" title="Promo Video" />
      <Project />
      <Musicians />
      <MediaSlider />
      <Concerts />
      <SupportUs />
      {/* <ContactForm />    */}
    </>
  )
}

export default Home