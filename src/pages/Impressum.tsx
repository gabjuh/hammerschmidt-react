const Impressum = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#fff1] text-white mt-10 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Impresszum</h1>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">Üzemeltető</h2>
        <p><strong>Név:</strong> <a href="http://gaborjuhasz.de">Juhász Gábor</a></p>
        <p><strong>Kapcsolat:</strong> <a href="mailto:adgbe@yahoo.de">adgbe (at) yahoo (dot) de</a></p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">Tárhelyszolgáltató</h2>
        <p><strong>Név:</strong> Webgo GmbH - Germany</p>
        <p><strong>Elérhetőség:</strong> <a href="https://webgo.de/">webgo.de</a></p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">Jogi nyilatkozat</h2>
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
        <h2 className="text-lg font-semibold">Kapcsolat és panaszkezelés</h2>
        <p>
          Kérdés vagy panasz esetén a fenti elérhetőségeken léphet kapcsolatba velünk.
        </p>
      </section>
    </div>
  );
}

export default Impressum