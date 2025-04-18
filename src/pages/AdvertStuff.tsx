import { Helmet } from 'react-helmet-async';

import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/PageTitle';

const AdvertStuff = () => {
  return (
    <>
      <Helmet>
        <title>Letölthető plakátok, képek, szóróanyagok</title>
        <meta name="description" content="Letölthető plakátok, képek, szóróanyagok" />
        <link rel="canonical" href="https://hammerschmidt-consort.com/plakatok" />
      </Helmet>
      <PageContentWrapper backTo="/#footer">
        <PageTitle text="Plakátok, szóróanyagok" />
        <h2 className="font-title text-2xl my-2">Koncertplakátok letöltése PDF formátumban: </h2>
        <p className="italic opacity-50">Letöltéshez kattintson a képre</p>
        <div className="flex flex-wrap gap-4 my-10">
          <a href="hammerschmidt-plakat-a3-bonyhad-v3.pdf" target="_blank" className="block cursor-pointer">
            <h3 className="font-title text-xl my-2">Bonyhád (2025 àprilis 23)</h3>
            <img src="/plakat-thumbnail-bonyhad.png" alt="Koncertplakát Bonyhád" className="w-[250px] h-auto " />
          </a>
          <a href="hammerschmidt-plakat-a3-kistelek-v3.pdf" target="_blank" className="block cursor-pointer">
            <h3 className="font-title text-xl my-2">Kistelek (2025 àprilis 24)</h3>
            <img src="/plakat-thumbnail-kistelek.png" alt="Koncertplakát Kistelek" className="w-[250px] h-auto " />
          </a>
          <a href="hammerschmidt-plakat-a3-budafok-v3.pdf" target="_blank" className="block cursor-pointer">
            <h3 className="font-title text-xl my-2">Budapest (2025 àprilis 25)</h3>
            <img src="/plakat-thumbnail-budapest.png" alt="Koncertplakát Budapest" className="w-[250px] h-auto " />
          </a>
        </div>
      </PageContentWrapper>
    </>
  )
}

export default AdvertStuff