import PageContentWrapper from '../components/PageContentWrapper';
import PageTitle from '../components/PageTitle';

const Program = () => {
  return (
    <PageContentWrapper backTo="/#hammerschmidt">
      <PageTitle text="Koncertprogram" />
      
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

    </PageContentWrapper>
  )
}

export default Program;