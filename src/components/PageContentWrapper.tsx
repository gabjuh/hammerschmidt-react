import BackLink from './BackLink';

const PageContentWrapper = ({
  children, 
  backTo
}: {
  children: React.ReactNode;
  backTo?: string;
} ) => {
  return (
    <div id="privacy-policy" className="container mx-auto min-h-[400px] px-3 py-7 md:p-6 bg-[#fff1] text-white my-10 shadow-lg rounded-lg relative">
      {children}
      {backTo && <BackLink target={backTo} />}
    </div>
  )
}

export default PageContentWrapper