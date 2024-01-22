import { About } from "../about/about";
import { Footer } from "../footer/footer";
import { Staffs } from "../staff/staffs";

const Intel = [
  {
    id: 1,
    header: "Freelance Academic Editing Services of Manuscripts and Publication Services",
    description: "We stand by you throughout your publication journey through editing manuscripts to ensure clarity and adherence to standard scientific English, formatting manuscripts according to journal guidelines, and providing comprehensive support from journal selection to submission.",
  },
  {
    id: 2,
    header: "Editing of manuscripts",
    description: "We provide editorial assistance on your manuscripts",
  },
  {
    id: 3,
    header: "Guide and facilitate the publication process of authors",
    description: "We assist client choose you a journal and through the various stages to publication",
  },
  {
    id: 4,
    header: "Business consulting services",
    description: "Elevate your business with our tailored consulting services",
  },
  {
    id: 5,
    header: "KPI Assistance",
    description:
      "Introducing Key Performance Indicators which will help companies measure their progress",
  },
  {
    id: 6,
    header: "QA Assistance",
    description: "Conducting quality assurance for diverse companies",
  },
  {
    id: 7,
    header: "Research/Grant proposal writing",
    description:
      "Writing proposals for grants that will either tow a research tangent or a practical tangent",
  },
  {
    id: 8,
    header: "Academic Helpline",
    description:
      "Empowering students with comprehensive academic support through: • Assistance in thesis, assignments, and research proposal writing. • Aid in data collection",
  },
  {
    id: 9,
    header: "Assist students (particularly postgraduates) with academic writing",
    description: "• Thesis writing • Assignments • Research Proposal writing",
  },
  {
    id: 10,
    header: "Assist students with data collection",
    description: "",
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
        At Frontiers Hub, we stand by you, providing unwavering support across academia, business, and environmental initiatives. We assist you with embarking on your publication journey with confidence. Elevate your business with our tailored consulting services. and partnering with international editing companies for a global perspective.
      </p>
      
      <section className="p-6 md:py-10">
        <div class="justify-center text-center">
          <h2 className="font-display relative text-xl font-bold tracking-tight text-heading lg:text-3xl lg:tracking-tighter">
            Services
          </h2>
        </div>
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
