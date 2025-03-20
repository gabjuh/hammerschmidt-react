const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="container mx-auto p-6 bg-[#fff1] text-white mt-10 shadow-lg rounded-lg hyphens-auto text-justify">
      <h1 className="text-2xl font-bold text-center mb-4">Adatvédelmi Szabályzat</h1>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">1. Bevezetés</h2>
        <p>
          Jelen adatvédelmi szabályzat tájékoztatást nyújt arról, hogy a <strong>Projekt Musika Hammerschmidtalis</strong> 
          milyen adatokat kezel és milyen célból. Az oldalunk nem tartalmaz harmadik féltől származó reklámokat, 
          és nem használunk követő cookie-kat.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">2. Kapcsolati űrlap és reCAPTCHA</h2>
        <p>
          Az oldal egy kapcsolati űrlapot biztosít a látogatók számára. Az űrlap védelmében 
          <a href="https://policies.google.com/privacy"> Google reCAPTCHA</a> szolgáltatást használjuk, amely 
          a Google szerverein fut, és adatokat továbbíthat az Egyesült Államokba. A reCAPTCHA célja a spam és automatizált visszaélések kiszűrése.
        </p>
        <p>
          Az űrlap ezen kívül egy "honeypot" technológiát is alkalmaz, amely automatikusan kiszűri a robotok által küldött üzeneteket.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">3. Nemzetközi adattovábbítás</h2>
        <p>
          Az Ön által megadott adatok továbbításra kerülhetnek az Egyesült Államokba, mivel a Google Fonts és a reCAPTCHA szolgáltatásokat használjuk, amelyek az USA-ban található szervereken működnek.
        </p>
        <p>
          A weboldal betűtípusai a <a href="https://fonts.google.com/">Google Fonts</a> 
          szolgáltatásból töltődnek be, amely az Egyesült Államokban található szervereken fut. Ennek során 
          a felhasználó IP-címe és a használt böngésző információi továbbításra kerülhetnek a Google számára.
        </p>
        <p>
          Ha ezt el szeretné kerülni, javasoljuk a megfelelő böngészőkiegészítők vagy script-blokkolók használatát.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">4. Tárolt adatok és azok felhasználása</h2>
        <p>Az oldalon keresztül a következő adatokat gyűjtjük:</p>
        <ul>
          <li><strong>Név:</strong> A kapcsolati űrlapon kitöltött név.</li>
          <li><strong>E-mail cím:</strong> A kapcsolati űrlapon kitöltött e-mail cím.</li>
        </ul>
        <p>
          Az oldalon keresztül beküldött üzenetek tartalmát kizárólag a kapcsolattartás céljából kezeljük. 
          Az adatokat nem adjuk tovább harmadik félnek, kivéve, ha jogszabály ezt kötelezővé teszi.
        </p>
        <p>
          Az általunk gyűjtött személyes adatokat legfeljebb 6 hónapig őrizzük meg, azt követően azokat töröljük.
        </p>
        <p>Az adatkezelés jogalapja az Ön beleegyezése, amelyet a kapcsolati űrlap kitöltésével ad meg.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">5. Jogok és jogorvoslat</h2>
        <p>
          A felhasználóknak joguk van adataik törlését vagy módosítását kérni. 
          Ezzel kapcsolatban a <a href="mailto:adgbe@yahoo.de">kapcsolatfelvételi e-mail címünkön</a> keresztül lehet érdeklődni.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">6. Naplózott adatok</h2>
        <p>
          Az oldal üzemeltetője vagy a tárhelyszolgáltató bizonyos esetekben naplózhat technikai adatokat
          (például IP-cím, böngésző típusa, látogatás időpontja), amelyek kizárólag biztonsági célokat szolgálnak.
          Ezek az adatok harmadik fél számára nem hozzáférhetők.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">7. Külső szolgáltatások és beágyazott tartalom</h2>
        <p>
          Az oldal tartalmazhat harmadik féltől származó beágyazott elemeket (például YouTube-videók, 
          Google Maps térképek, vagy közösségi média gombok). Ezek a szolgáltatások saját adatvédelmi 
          szabályzatukkal rendelkeznek, és előfordulhat, hogy adatokat gyűjtenek a felhasználókról.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">8. Cookie-k</h2>
        <p>
          A weboldal nem használ marketing- vagy követő cookie-kat. Bizonyos technikai cookie-k
          azonban szükségesek lehetnek az oldal működéséhez (pl. reCAPTCHA védelmi rendszer).
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">9. SSL Adatbiztonság</h2>
        <p>
          Az oldalon keresztül történő adatátvitel titkosított HTTPS protokollal történik, hogy megvédjük az adatokat az illetéktelen hozzáféréstől.
        </p>
      </section>

    </div>
  );
}

export default PrivacyPolicy;
