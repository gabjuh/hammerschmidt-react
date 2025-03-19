import { eventsDataT } from '../data/events-data';

const EventItem = ({
  city,
  address,
  date,
  time,
  infoText
}: eventsDataT) => {
  return (
    <div className="w-2/3 border border-gray-300 rounded-[30px] p-[30px] mx-auto bg-white">
      <div className="flex">
        <div className="w-3/4">
          {/* city */}
          <h3 className="w-3/4 uppercase font-extrabold text-4xl mb-5">{city}</h3>
          {/* address */}
          <p className="text-lg">{address}</p>
        </div>
        <div className="w-1/4">
          {/* time */}
          <p className="font-extrabold text-[1.5rem] text-center">{date}</p>
          <p className="font-extrabold text-[4rem] text-center">{time}</p>
        </div>
      </div>
      <p className="text-center mt-2 opacity-50 italic">{infoText}</p>
    </div>
  )
}

export default EventItem