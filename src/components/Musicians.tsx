import { musiciansData } from '../data/musicians-data';
import Person from './Person';

const Musicians = () => {
  return (
    <div id="musicians" className="container xl:flex gap-10 mx-auto py-52">
      <div className="flex w-full gap-10 h-full">
        {musiciansData.map((person, index) => (
          <Person
            key={index}
            name={person.name}
            title={person.title}
            bio={person.bio}
            imgUrl={person.imgUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Musicians