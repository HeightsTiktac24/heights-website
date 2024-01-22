import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

 const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
    {/* Navbar */}
    <header className="absolute inset-x-0 top-0 z-10">
      <nav className="relative z-20 flex shrink-0 items-center space-x-2 py-6 px-4 sm:px-6">
        <div className="flex-1"></div>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center
           rounded-xl border-2 border-secondary bg-secondary px-4 py-2.5 text-base 
           font-semibold text-white shadow-sm hover:border-secondary-accent 
          hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80
           focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary 
           disabled:hover:text-white dark:focus:ring-white/80"
        >
          Contact Us
        </button>
      </nav>
    </header>
    <main>
      {/* Hero section */}

      {/* Apply h-screen instead of h-[1080px] here */}
      <section className="flex items-center justify-center px-8 pt-32 pb-12 lg:h-[100vh] sm:h-[100vh] sm:w-full lg:py-0">
        {/* Background image */}
        <div className="absolute inset-0 background-page bg-cover"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-layer-1 bg-black opacity-50"></div>

        <div className="z-10 flex w-full max-w-5xl flex-col items-center space-y-8 text-center text-heading md:px-8">
          <div className="md:text-[100px] sm:text-[10vw] sm:mt-8 text-[10vw] text-white leading-none">
            Height TikTac{" "}
            <span className="font-bold  text-green-700"> Consortium</span>
          </div>
          <p className="text-2xl  text-lg text-white font-normal">
            A step up
          </p>
          <button
            type="button"
            onClick={()=> navigate("/packages")}
            className="inline-flex cursor-pointer items-center justify-center 
            rounded-full border-2 border-primary bg-primary px-6 py-6 text-base 
            font-semibold text-white shadow-lg   hover:bg-primary-accent 
            focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 
            disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary 
            disabled:hover:text-white dark:focus:ring-white/80 animate-bounce "
          >
            <MdKeyboardDoubleArrowDown className="text-4xl font-hairline" />
          </button>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Home;