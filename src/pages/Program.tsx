import { useState } from 'react';

import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/PageTitle';

const Program = () => {
  const [activeTab, setActiveTab] = useState<'program' | 'sources'>('program');

  return (
    <PageContentWrapper backTo="/#hammerschmidt">
      <PageTitle text="Koncertprogram" />

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setActiveTab('program')}
          className={`px-4 py-2 border-b-2 text-lg font-semibold transition duration-300 ${activeTab === 'program' ? 'border-orange-300 text-orange-300' : 'border-transparent'}`}
        >
          Műsor
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-4 py-2 border-b-2 text-lg font-semibold transition duration-300 ${activeTab === 'sources' ? 'border-orange-300 text-orange-300' : 'border-transparent'}`}
        >
          Források
        </button>
      </div>

      {activeTab === 'program' && (
        <section className="px-4 md:px-12 py-10 max-w-4xl mx-auto">
          <p className="text-center text-lg mt-5">
            A koncert műsora Andreas Hammerschmidt kompozícióiból és kortársai műveiből válogat. A darabok az áhítat, a kérés, a hálaadás és az elcsendesedés témáit járják körül, különböző nyelvi és zenei rétegeken keresztül.
          </p>

          <div className="space-y-8 mt-20">
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Wohl dem der nicht wandelt</h3>
              <p className="italic">„Boldog, aki nem jár a bűnösök tanácsán” – zsoltárparafrázis erkölcsi útmutatással.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Ballet</h3>
              <p className="italic">Táncos karakterű darab hangszeres együttesre.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Vulnerasti</h3>
              <p className="italic">„Megsebeztél a tekinteteddel” – az Énekek énekéből vett szöveg zenés feldolgozása.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Instrumentális közjáték</h3>
              <p className="italic">Rövid hangszeres átirat a „Vulnerasti” motívumaiból kiindulva.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Doce me, Domine</h3>
              <p className="italic">„Taníts meg engem, Uram” – kérés Isten vezetésére és bölcsességére.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Herr, Jesu Christ</h3>
              <p className="italic">„Uram, Jézus Krisztus” – német nyelvű koráldallam feldolgozása.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Confitebor tibi, Domine</h3>
              <p className="italic">„Magasztallak téged, Uram” – hálaadó szöveg alapján készült mű.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Variationen</h3>
              <p className="italic">Változatok egy adott témára – a kompozíciós forma bemutatása.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Erwecke dich, Herr</h3>
              <p className="italic">„Ébredj fel, Uram” – könyörgő zsoltárparafrázis.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">De profundis clamavi</h3>
              <p className="italic">„A mélységből kiáltok hozzád” – a 130. zsoltár zenés megfogalmazása.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Canzon</h3>
              <p className="italic">Instrumentális tétel, amely záró gesztusként is értelmezhető.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">O frommer Gott</h3>
              <p className="italic">„Ó, jámbor Isten” – személyes hangvételű ének az isteni jelenlét kereséséről.</p>
            </div>
            <div>
              <h3 className="font-title text-orange-300 text-3xl mb-1">Wohl dem der den Herren</h3>
              <p className="italic">„Boldog, aki féli az Urat” – a program zenei és gondolati lezárása.</p>
            </div>
          </div>
        </section>
      )}

{activeTab === 'sources' && (
        <section className="px-4 md:px-12 py-10 max-w-6xl mx-auto space-y-12">
          <p className="text-center text-lg mt-5">
            A koncertprogram összeállítása során több korabeli forrást és zenetudományi szakirodalmat vettünk alapul. Az alábbiakban ezek közül válogattunk néhány jelentősebb kiadványt és tanulmányt rövid leírással.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Facsimile" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://gallica.bnf.fr/ark:/12148/btv1b9062463g/f57.item.r=de%20profundis%20hammerschmidt" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Facsimile: Motettae unius et duarum vocum
                </a>
                <p className="mt-2">17. századi kiadvány, amely egyszólamú és kétszólamú motettákat tartalmaz Hammerschmidt tollából.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Andacht I Continuo" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP666306-PMLP763115-Digital_Store_D.35.s._Musicalischer_Andacht_Erster_Theil-etc.General-Bass.pdf" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Musicalischer Andacht I. – Continuo
                </a>
                <p className="mt-2">A gyűjtemény első kötete, amely basso continuo kísérettel ellátott darabokat tartalmaz egyházi használatra.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Andacht I Cantus" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://ks15.imslp.org/files/imglnks/usimg/0/0c/IMSLP470060-PMLP763115-hammerschmidt_musicalischer_andachten_1_435305611_voice2.pdf" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Musicalischer Andacht I. – Cantus II.
                </a>
                <p className="mt-2">A sorozat második szólamát tartalmazó kézirat, vokális feldolgozásokkal.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Andacht III Continuo" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://ks15.imslp.org/files/imglnks/usimg/7/73/IMSLP664349-PMLP150513-Hammerschmidt_musicalischer_andacht_teil_3_6.pdf" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Musicalischer Andacht III. – Continuo
                </a>
                <p className="mt-2">A harmadik kötet continuo szólamanyaga, amely számos adventi és karácsonyi darabot is tartalmaz.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Andacht III Cantus" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://ks15.imslp.org/files/imglnks/usimg/b/b1/IMSLP664346-PMLP150513-Hammerschmidt_musicalischer_andacht_teil_3_3.pdf" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Musicalischer Andacht III. – Cantus
                </a>
                <p className="mt-2">A harmadik kötet énekszólamát tartalmazó anyag, a korai német barokk zene jegyeivel.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Grove" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://drive.google.com/file/d/1kuZyAS7nJzOC8OmFt3Uzhe_vJrYPmX0r/view?usp=sharing" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Grove-szócikk: Andreas Hammerschmidt
                </a>
                <p className="mt-2">Átfogó életrajz és elemzés az angol nyelvű Grove zenei lexikonból.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Composer's Dilemma" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://www.jstor.org/stable/23553094" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  A Composer's Dilemma: Andreas Hammerschmidt and the Lutheran Theology of Music
                </a>
                <p className="mt-2">Tanulmány a lutheránus zeneesztétika és Hammerschmidt kora közötti összefüggésekről.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Schütz & Hammerschmidt" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://www.jstor.org/stable/41122221" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  „Wer dieses nimbt in acht!”: Heinrich Schütz und die „Chor Music” von Andreas Hammerschmidt
                </a>
                <p className="mt-2">Heinrich Schütz és Hammerschmidt kóruszenéjének összehasonlító elemzése.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <img src="https://placehold.co/150" alt="Meditation and Dialogues" className="w-[150px] md:w-[150px] h-auto object-cover rounded-md shadow-md" />
              <div>
                <a href="https://www.jstor.org/stable/30162866" className="text-orange-300 font-title text-lg font-semibold" target="_blank" rel="noopener noreferrer">
                  Meditation and Consolatory Soul-God Dialogues in Seventeenth-Century Lutheran Germany
                </a>
                <p className="mt-2">A 17. századi német evangélikus meditációs irodalom és zene összefüggéseit feltáró tanulmány.</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </PageContentWrapper>
  );
};

export default Program;
