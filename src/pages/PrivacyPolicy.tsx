import { Helmet } from 'react-helmet-async';

import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/PageTitle';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>A Hammerschmidt Consort honlap adatvédelmi nyilatkozata</title>
        <meta name="description" content="A Hammerschmidt Consort honlap adatvédelmi nyilatkozata" />
        <link rel="canonical" href="https://hammerschmidt-consort.com/adatvedelmi-nyilatkozat" />
      </Helmet>
      <PageContentWrapper>
        <PageTitle text="Adatvédelmi Szabályzat" />

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">1. Bevezetés</h2>
          <p>
            Jelen adatvédelmi szabályzat tájékoztatást nyújt arról, hogy a <strong>Projekt Musika Hammerschmidtalis</strong> milyen adatokat kezel és milyen célból. Az oldalunk nem tartalmaz harmadik féltől származó reklámokat, és nem használunk követő cookie-kat.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">2. Kapcsolati űrlap, reCAPTCHA és nemzetközi adattovábbítás</h2>
          <p>
            Az oldal egy kapcsolati űrlapot biztosít a látogatók számára, amely a kéretlen üzenetek és automatizált visszaélések kiszűrésére többféle technológiát alkalmaz. Az űrlap rejtett mezőkön alapuló úgynevezett "honeypot" megoldással is védi magát a robotokkal szemben.
          </p>
          <p>
            Emellett a <a href="https://policies.google.com/privacy">Google reCAPTCHA</a> szolgáltatást használjuk, amely a Google Egyesült Államokban található szerverein fut. Ennek használata során az Ön IP-címe, böngészője és egyéb technikai adatai továbbításra kerülhetnek az USA-ba a szolgáltatás működéséhez szükségesen.
          </p>
          <p>
            A weboldalon használt betűtípusok a <a href="https://fonts.google.com/">Google Fonts</a> szolgáltatásból töltődnek be, amely szintén az Egyesült Államokban működő szervereket használ. Így ezek igénybevétele szintén nemzetközi adattovábbítással járhat.
          </p>
          <p>
            Ha ezt el szeretné kerülni, javasoljuk a megfelelő böngészőkiegészítők vagy script-blokkolók használatát.
          </p>
        </section>


        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">3. Tárolt adatok és azok felhasználása</h2>
          <p>Az oldalon keresztül a következő adatokat gyűjtjük:</p>
          <ul>
            <li><strong>Név:</strong> A kapcsolati űrlapon kitöltött név.</li>
            <li><strong>E-mail cím:</strong> A kapcsolati űrlapon kitöltött e-mail cím.</li>
          </ul>
          <p>
            Az oldalon keresztül beküldött üzenetek tartalmát kizárólag a kapcsolattartás céljából kezeljük. Az adatokat nem adjuk tovább harmadik félnek, kivéve, ha jogszabály ezt kötelezővé teszi.
          </p>
          <p>
            Az általunk gyűjtött személyes adatokat legfeljebb 6 hónapig őrizzük meg, azt követően azokat töröljük.
          </p>
          <p>Az adatkezelés jogalapja az Ön beleegyezése, amelyet a kapcsolati űrlap kitöltésével ad meg.</p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">4. Jogok és jogorvoslat</h2>
          <p>
            A felhasználóknak joguk van adataik törlését vagy módosítását kérni. Ezzel kapcsolatban a <a href="mailto:adgbe@yahoo.de">kapcsolatfelvételi e-mail címünkön</a> keresztül lehet érdeklődni.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">5. Naplózott adatok</h2>
          <p>
            Az oldal üzemeltetője vagy a tárhelyszolgáltató bizonyos esetekben naplózhat technikai adatokat (például IP-cím, böngésző típusa, látogatás időpontja), amelyek kizárólag biztonsági célokat szolgálnak. Ezek az adatok harmadik fél számára nem hozzáférhetők.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">6. Külső szolgáltatások és beágyazott tartalom</h2>
          <p>
            Az oldal tartalmazhat harmadik féltől származó beágyazott elemeket (például YouTube-videók, Google Maps térképek, vagy közösségi média gombok). Ezek a szolgáltatások saját adatvédelmi szabályzatukkal rendelkeznek, és előfordulhat, hogy adatokat gyűjtenek a felhasználókról.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">7. Cookie-k</h2>
          <p>
            A weboldal nem használ marketing- vagy követő cookie-kat. Bizonyos technikai cookie-k azonban szükségesek lehetnek az oldal működéséhez (pl. reCAPTCHA védelmi rendszer).
          </p>
        </section>

        <section className="mb-4">
          <h2 className="font-title text-orange-300 text-2xl mt-10 font-semibold">8. SSL Adatbiztonság</h2>
          <p>
            Az oldalon keresztül történő adatátvitel titkosított HTTPS protokollal történik, hogy megvédjük az adatokat az illetéktelen hozzáféréstől.
          </p>
        </section>

      </PageContentWrapper>
    </>
  );
}

export default PrivacyPolicy;
