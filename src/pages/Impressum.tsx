import { Helmet } from 'react-helmet-async';

import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/PageTitle';

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>A Hammerschmidt Consort honlap impresszuma</title>
        <meta name="description" content="A Hammerschmidt Consort honlap impresszuma" />
        <link rel="canonical" href="https://hammerschmidt-consort.com/impresszum" />
      </Helmet>
      <PageContentWrapper>
        <PageTitle text="Impresszum" />

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">1. Üzemeltető</h2>
          <p><strong>Név:</strong> <a href="http://gaborjuhasz.de">Juhász Gábor</a></p>
          <p><strong>Kapcsolat:</strong> <a href="mailto:adgbe@yahoo.de">adgbe (at) yahoo (dot) de</a></p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">2. Tárhelyszolgáltató</h2>
          <p><strong>Név:</strong> Webgo GmbH - Germany</p>
          <p><strong>Elérhetőség:</strong> <a href="https://webgo.de/">webgo.de</a></p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">3. Jogi nyilatkozat</h2>
          <p>
            Az oldalon található tartalom a <strong>Projekt Musika Hammerschmidtalis</strong> tulajdonát képezi,
            kivéve, ha másként van feltüntetve. A tartalom másolása, terjesztése vagy módosítása
            kizárólag előzetes írásbeli engedéllyel engedélyezett.
          </p>
          <p>
            Az oldal működéséért és az esetleges technikai hibákért felelősséget nem vállalunk.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">4. AI-generált képek</h2>
          <p>
            Az oldalon található egyes képek mesterséges intelligencia segítségével készültek. 
            Ezeket kizárólag illusztrációs célokra használjuk, és nem tükröznek valós eseményeket, 
            személyeket vagy helyszíneket.  
          </p>
          <p>
            Az AI-képgenerálás során törekedtünk arra, hogy tiszteletben tartsuk az etikai irányelveket 
            és a vonatkozó szerzői jogi szabályozásokat.
          </p>
          <p>
            Az AI-képek generálásához a <strong>DALL·E / Midjourney / Stable Diffusion</strong> eszközöket használtuk.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">5. Kapcsolat és panaszkezelés</h2>
          <p>
            Kérdés vagy panasz esetén a fenti elérhetőségeken léphet kapcsolatba velünk.
          </p>
        </section>
      </PageContentWrapper>
    </>
  );
}

export default Impressum