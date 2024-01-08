import { About } from "../about/about";
import { Footer } from "../footer/footer";
import { Staffs } from "../staff/staffs";

const Intel = [
  {
    id: 1,
    header: "Frontier Hub",
    description: "Summary goes here",
  },
  {
    id: 2,
    header: "Sanerv Consult",
    description: "Summary goes here",
  },
  {
    id: 3,
    header: "SafeHeights Consult",
    description: "Summary goes here",
  },
  {
    id: 4,
    header: "Waste Val locus",
    description: "Summary goes here",
  },
  {
    id: 5,
    header: "MushUp Tiktac Ventures",
    description:
      "Mushup is a wholly Ghanaian company that seeks to introduce Ghana and the world, to the various possibilities that can be reached with mushroom production.",
  },
  {
    id: 6,
    header: " Equipped Ventures",
    description: "Summary goes here",
  },
  {
    id: 7,
    header: "EdSanServ",
    description:
      "ED§ANSERV   is a sanitation service company that seeks to maximise the use of effluent and nutrient resource from all waste streams (both solid and liquid) in a facility. ",
  },
];

const CompanyCard = () => {
  return (
    <div className="section-bg p-0 m-0">
      <div className=" mb-12 flex flex-col justify-center gap-10  lg:flex-row lg:gap-4">
        <div>
          <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
            What We Do
            <span className="absolute -bottom-4 left-0 h-[3px] w-48 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
          </h2>
        </div>
      </div>
      <p className="text-center font-normal grid grid-cols-1 max-w-2xl mx-auto pt-8">
        Pexels is a popular online platform that provides high-quality stock
        photos, videos, and music for free. It offers a vast collection of
        creative and professional resources that can be used by individuals,
        businesses, designers, and content creators for various purposes, such
        as websites, blogs, social media, presentations, and more.
      </p>
      <section className="p-6 md:py-10">
        <div className="mx-auto w-full max-w-6xl ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {Intel.map((item, key) => (
              <a
                href="#"
                key={key}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-2xl glass-bg drop-shadow-2xl  px-6 pt-4 pb-5 
                hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 hover:bg-white  hover:border-double border-8
                  duration-300 ..."
              >
                <div className="flex justify-between">
                  <div className="flex content-center items-center gap-2">
                    {/* <img
                      src="/assets/avatars/matthew.png"
                      alt="user"
                      className="inline-block h-12 w-12 rounded-full"
                    /> */}
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-cyan-600 to-green-500 drop-shadow-2xl  rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-heading">
                        {item.header}
                      </div>
                      <div className="text-xs text-text">@jdean</div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-base text-heading">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Staffs />
      <About />
      <Footer />
    </div>
  );
};

export default CompanyCard;
