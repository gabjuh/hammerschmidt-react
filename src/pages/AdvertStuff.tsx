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
        Hamarosan...
      </PageContentWrapper>
    </>
  )
}

export default AdvertStuff