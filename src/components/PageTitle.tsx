import Hr from './Hr';

const PageTitle = ({
  text
}: {
  text:string
}) => {
  return (
    <>
      <h1 className="text-5xl font-title text-orange-300 font-bold text-center mb-4">{text}</h1>
      <Hr />
    </>
  )
}

export default PageTitle