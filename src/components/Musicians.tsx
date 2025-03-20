import { musiciansData } from '../data/musicians-data';
import Person from './Person';

const Musicians = () => {
  return (
    <div id="musicians" className="container mx-auto px-4 py-32">
      <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">Művészek</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 h-[800px gap-6 relative">
        {musiciansData.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            bio={person.bio}
            shortBio={person.shortBio}
            imgUrl={person.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Musicians;