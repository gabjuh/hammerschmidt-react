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
    <div className="flex z-10">
      {/* TODO: sticky */}
      {musicians.map((person: MusicianNavigationWidgetDataT, i: number) => (
        <Link to={person.portfolioUrl} className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 m-1">
          <div
            key={i}
            className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full mt-4"
            style={{ backgroundImage: `url('${person.imgUrl}')` }}
          />
        </Link>
      ))}
    </div>
  )
}

export default MusicianNavigationWidget