import { eventsData } from '../data/events-data';
import EventItem from './EventItem';

const Concerts = () => {
  return (
    <div id="concerts" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">Koncertek</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((item, index) => (
            <EventItem
              key={index}
              city={item.city}
              address={item.address}
              place={item.place}
              date={item.date}
              time={item.time}
              infoText={item.infoText}
              mapsLink={item.mapsLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Concerts;
