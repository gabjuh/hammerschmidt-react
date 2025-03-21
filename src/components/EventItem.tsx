import ChurchIcon from '../assets/svg/church-icon';
import { eventsDataT } from '../data/events-data';

const EventItem = ({ city, address, place, date, time, infoText, mapsLink }: eventsDataT) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-[#ddd] shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
      
      {/* Google Maps Iframe */}
      <div className="h-48">
        <iframe
          src={mapsLink}
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* City & Address */}
        <h3 className="text-3xl font-bold text-gray-900">{city}</h3>
        <p className="text-gray-500">{address}</p>

        {/* Description */}
        <p className="mt-6 font-bold italic text-gray-600 flex-grow text-center">{infoText}</p>
      </div>

      {/* Date & Time + Church Name */}
      <div className="bg-[#8F939444] px-6 py-4 flex justify-between items-center">
        <div className="text-left">
          <p className="text-lg font-semibold">{date}</p>
          <p className="text-4xl font-bold">{time}</p>
        </div>

        {/* Church Name Tag with Icon */}
        <div className="flex items-center pl-5 ml-4 bg-orange-400 text-white px-4 py-2 rounded-lg shadow-md">
          <ChurchIcon w="42" h="42" />
          <span className="md:pl-4 text-lg font-semibold">{place}</span>
        </div>
      </div>

    </div>
  );
};

export default EventItem;
