import { Link } from 'react-router-dom';

export type MusicianNavigationWidgetDataT = {
  name: string;
  imgUrl: string;
  portfolioUrl: string
}

const MusicianNavigationWidget = ({
  musicians
}: {
  musicians: MusicianNavigationWidgetDataT[]
}) => {
  console.log(musicians)
  return (
    <>
      <h3 className="font-title text-orange-300 text-3xl mt-16 text-center md:text-left">További portfóliók:</h3>

      <div className="flex justify-center md:justify-start z-10 mb-6">
        {/* TODO: sticky */}
        {musicians.map((person: MusicianNavigationWidgetDataT, i: number) => (
          <Link 
            to={person.portfolioUrl} 
            className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 m-1"
          >
            <div
              key={i}
              className="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-full mt-4"
              style={{ backgroundImage: `url('${person.imgUrl}')` }}
              title={`${person.name}`}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default MusicianNavigationWidget