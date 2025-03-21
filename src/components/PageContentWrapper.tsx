
const PageContentWrapper = ({children}: {children: React.ReactNode;} ) => {
  return (
    <div id="privacy-policy" className="container mx-2 md:mx-auto min-h-[400px] px-3 py-7 md:p-6 bg-[#fff1] text-white my-10 shadow-lg rounded-lg">
      {children}
    </div>
  )
}

export default PageContentWrapper