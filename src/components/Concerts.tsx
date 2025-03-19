import { eventsData } from '../data/events-data';
import EventItem from './EventItem';

const Concerts = () => {
  return (
    <div id="concerts" className="py-52">
      <div className="w-full h-[600px]">
        <div className="container flex flex-wrap mx-auto gap-10 p-16">
          {eventsData.map((item, index) => (
            <EventItem
              key={index}
              city={item.city}
              address={item.address}
              date={item.date}
              time={item.time}
              infoText={item.infoText}
              mapsLink={item.mapsLink}
            />
          ))}                 
        </div>
      </div>
    </div>
  )
}

export default Concerts