import { useState } from 'react';

import { useLanguage } from '../context/LanguageContext';
import { musiciansData } from '../data/musicians-data';
import { PageTexts } from '../data/page-texts-data';
import { getLocalizedField } from '../i18n/utils';
import Person from './Person';

const Musicians = () => {
  const [openedPersonDetailsId, setOpenedPersonDetailsId] = useState<string | null>(null);

    const { lang } = useLanguage();

    const artistsTitle = getLocalizedField(PageTexts, 'artistsTitle', lang)

  return (
    <div id="musicians" className="container mx-auto px-2 md:px-4 pt-14 xl:py-18 mb-0">
      <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">{ artistsTitle }</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-12 md:gap-6 relative">
        {musiciansData.map((person, index) => {

          const name = getLocalizedField(person, 'name', lang);
          const title = getLocalizedField(person, 'title', lang);
          const bio = getLocalizedField(person, 'bio', lang);
          const shortBio = getLocalizedField(person, 'shortBio', lang);

          if (person.showAsCard === false) {
            return;
          }
          return <Person
            key={index}
            name={name}
            title={title}
            bio={bio}
            shortBio={shortBio}
            imgUrl={person.imgUrl}
            imgName={person.imgName}
            openedPersonDetailsId={openedPersonDetailsId}
            setOpenedPersonDetailsId={setOpenedPersonDetailsId}
          />
        })}
      </div>
    </div>
  );
};

export default Musicians;
