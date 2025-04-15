import { useLanguage } from '../context/LanguageContext';
import { eventsData } from '../data/events-data';
import { PageTexts } from '../data/page-texts-data';
import { getLocalizedField } from '../i18n/utils';
import EventItem from './EventItem';

const Concerts = () => {

  const { lang } = useLanguage();

  const eventsTitle = getLocalizedField(PageTexts, 'eventsTitle', lang);

  return (
    <div id="concerts" className="py-14 lg:py-18">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        <h2 className="text-center text-4xl font-bold mb-10 text-orange-300 font-title">{ eventsTitle }</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((item, index) => {

            const concertPriceInfoText = getLocalizedField(item, 'concertPriceInfoText', lang);
            const address = getLocalizedField(item, 'address', lang);
            const place = getLocalizedField(item, 'place', lang);
            const date = getLocalizedField(item, 'date', lang);
            const time = getLocalizedField(item, 'time', lang);

            return <EventItem
              key={index}
              city={item.city}
              address={address}
              place={place}
              date={date}
              time={time}
              infoText={concertPriceInfoText}
              mapsLink={item.mapsLink}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default Concerts;
