import qrCodePaypal from '/QR-Code-paypal.png';
import qrCodeRevolut from '/qr-code-revolut.png';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { LinkRenderer } from '../pages/MusicianPortfolio';
import DonationModal from './DonationModal';

const infoBlock = "**Fontos!**$$- A koncertek **ingyenesen látogathatók**.$$- A Hammerschmidt Consort egy **független régizenei formáció**, amely támogatásokat *kizárólag önkéntes alapon* fogad el. Az adományokat főként utazásra, valamint a digitális és nyomtatott médiajelenlét költségeinek fedezésére fordítjuk.$$- A támogatás *nem minősül szolgáltatásért járó díjnak*, és *nem jár ellenszolgáltatással*.$$- **A támogatásod elküldésével tudomásul veszed és elfogadod, hogy az adomány önkéntes jellegű, és nem jár ellenszolgáltatással.**";

const SupportUs = () => {
  const [activeModal, setActiveModal] = useState<null | 'paypal' | 'revolut' | 'otp'>(null);

  return (
    <>
      <section id="support-us" className="text-white pt-24 pb-36 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-title text-center mb-12 text-orange-300">Támogasd a Hammerschmidt Consort-ot!</h2>

          <div className="mt-12 text-sm text-center text-white max-w-3xl mx-auto px-4 leading-relaxed">

            <p className="mb-2">
              Ha <strong>fontosnak tartod</strong>, hogy az <strong>általunk képviselt értékek</strong> minél több emberhez eljussanak,<br />
              és szeretnéd, hogy a jövőben is <strong>sok hasonló koncertet</strong> tudjunk szervezni, <br />
              kérjük, <strong>támogass bennünket</strong> tetszőleges összegű adománnyal.
              <br /><br />
              <em>Minden támogatás számít</em>, és közvetlenül hozzájárul ahhoz, <br />hogy a <strong>Hammerschmidt-Consort</strong> tovább működhessen.
            </p>

          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-10">
            {/* PAYPAL */}
            <div className="flex-1 bg-[#fff1] rounded-xl shadow-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="font-title text-4xl font-bold text-orange-200 mb-4">PayPal</h3>
                <p className="text-sm mb-6">Támogatás küldése PayPal-on keresztül</p>
              </div>
              <button
                onClick={() => setActiveModal('paypal')}
                className="mt-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm transition"
              >
                Részletek
              </button>
            </div>

            {/* REVOLUT */}
            <div className="flex-1 bg-[#fff1] rounded-xl shadow-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="font-title text-4xl font-bold text-orange-200 mb-4">Revolut</h3>
                <p className="text-sm mb-6">Támogatás küldése Revoluton keresztül</p>
              </div>
              <button
                onClick={() => setActiveModal('revolut')}
                className="mt-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm transition"
              >
                Részletek
              </button>
            </div>

            {/* OTP BANK */}
            <div className="flex-1 bg-[#fff1] rounded-xl shadow-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="font-title text-4xl font-bold text-orange-200 mb-4">Banki átutalás</h3>
                <p className="text-sm mb-6">Támogatás hagyományos banki utalással</p>
              </div>
              <button
                onClick={() => setActiveModal('otp')}
                className="mt-auto px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm transition"
              >
                Részletek
              </button>
            </div>
          </div>
          <div className="support-us-important text-sm text-white max-w-3xl mx-auto leading-relaxed bg-[#A14028] py-4 px-6 rounded-md mt-12">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer }}>
              {infoBlock.replace(/\$\$/g, '\n\n')}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* MODALOK */}
      <DonationModal
        visible={activeModal === 'paypal'}
        onClose={() => setActiveModal(null)}
        title="PayPal támogatás"
        qrImage={qrCodePaypal}
      >
        <p className="mb-2 !text-blue-600">Felhaszálónév: @GaborJuhasz292</p>
        <p></p>
        <p className="text-center">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=N96QWGCD4GJL6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm transition inline-block"
          >
            Gyors és egyszerű utalás PayPal-al
          </a>
        </p>
      </DonationModal>

      <DonationModal
        visible={activeModal === 'revolut'}
        onClose={() => setActiveModal(null)}
        title="Revolut támogatás"
        qrImage={qrCodeRevolut}
      >
        <p className="text-sm mb-1">Felhasználó: @gborzfxm</p>
        <p className="text-sm mb-1">Név: Gábor Juhász</p>
        <p className="text-sm mb-1">IBAN: LT80 3250 0856 5797 2735</p>
        <p className="text-sm mb-1">BIC/SWIFT: REVOLT21</p>
        <p className="italic">
          Közlemény: Adomány
        </p>
        <p className="italic">
          Valuta: HUF, EUR, USD
        </p>
        <p className="text-center ">
          <a
            href="https://www.revolut.me/gborzfxm"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm transition inline-block"
          >
            Gyors és egyszerű utalás revolut.me-vel
          </a>
        </p>
       
      </DonationModal>

      <DonationModal
        visible={activeModal === 'otp'}
        onClose={() => setActiveModal(null)}
        title="OTP átutalás"
      >
        <p className="text-sm mb-1">Név: Juhász Zsuzsa</p>
        <p className="text-sm mb-1">OTP: 11773315-00055660</p>
        <p className="text-sm mb-1">BIC: OTPVHUHB</p>
        <p className="italic">
          Közlemény: Adomány
        </p>
      </DonationModal>
    </>
  );
};

export default SupportUs;
