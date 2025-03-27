import { useState } from 'react';

import { musiciansData } from '../data/musicians-data';
import Person from './Person';

const Musicians = () => {
  const [openedPersonDetailsId, setOpenedPersonDetailsId] = useState<string | null>(null);

  return (
    <div id="musicians" className="container mx-auto px-2 md:px-4 pt-14 xl:py-18 mb-0">
      <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">Művészek</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-12 md:gap-6 relative">
        {musiciansData.map((person, index) => {
          if (person.showAsCard === false) {
            return;
          }
          return <Person
            key={index}
            name={person.name}
            title={person.title}
            bio={person.bio}
            shortBio={person.shortBio}
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
