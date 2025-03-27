import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import PageContentWrapper from '../components/PageContentWrapper';
// import PageTitle from '../components/PageTitle';
import { PieceDataT, ProgramData } from '../data/program-data';
import { LinkRenderer } from './MusicianPortfolio';

const Program = () => {
  const [activeTab, setActiveTab] = useState<'program' | 'about'>('about');

  return (
    <PageContentWrapper backTo="/#hammerschmidt">
      {/* <PageTitle text="Koncertprogram" /> */}

      <div className="flex font-title text-2xl justify-center mt-8 space-x-4">
        <button
          onClick={() => setActiveTab('about')}
          className={`px-4 py-2 border-b-2 font-semibold transition duration-300 cursor-pointer ${activeTab === 'about' ? 'border-orange-300 text-orange-300' : 'border-transparent'}`}
        >
          Bevezető
        </button>

        <button
          onClick={() => setActiveTab('program')}
          className={`px-4 py-2 border-b-2 font-semibold transition duration-300 cursor-pointer ${activeTab === 'program' ? 'border-orange-300 text-orange-300' : 'border-transparent'}`}
        >
          Koncertprogram
        </button>
      </div>

      {activeTab === 'program' && (
        <section className="px-4 md:px-12 pb-8 max-w-5xl mx-auto">

          <div className="space-y-8 mt-20">
            {ProgramData.pieces.map((piece: PieceDataT, index: number) => {
              return (
                <div key={index}>
                  <h3 className="font-title text-orange-300 text-3xl mb-5">{piece.title}</h3>
                  {piece.source && <p className="text-lg font-title mb-1 pl-7 italic">— {piece.source} —</p>}
                  {piece.description && <p className="pl-4 hyphens-auto">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
                      {piece.description.replace(/\$\$/g, "\n\n")}
                    </ReactMarkdown>
                  </p>}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="px-4 md:px-12 py-10 max-w-6xl mx-auto space-y-12">
          <p className="hyphens-auto text-lg mt-5">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: LinkRenderer}}>
              {ProgramData.text.replace(/\$\$/g, "\n\n")}
            </ReactMarkdown>
          </p>
        </section>
      )}
    </PageContentWrapper>
  );
};

export default Program;
