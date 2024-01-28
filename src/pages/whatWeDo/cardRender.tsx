import { About } from "../about/about";
import { Footer } from "../footer/footer";
// import { useNavigate } from "react-router-dom";
const Intel = [
  {
    id: 1,
    header: "Frontier Hub",
    description: "At Frontiers Hub, we stand by you, providing unwavering support across academia, business, and environmental initiatives. We assist you with embarking on your publication journey with confidence. Elevate your business with our tailored consulting services. and partnering with international editing companies for a global perspective.",
    path: "/frontier",
  },
  {
    id: 2,
    header: "Sanerv Consult",
    description: "Welcome to Sanerv Consult, your partner in Environmental Services, specializing in Water, Sanitation, and Hygiene (WASH). Explore our offerings, including Environmental Impact Assessment (EIA) services and cutting-edge Geographic Information System (GIS) services.",
    path: "sanerv",
  },
  {
    id: 3,
    header: "SafeHeights Consult",
    description: "Welcome to Safe Heights Consult, your dedicated partner in Occupational Health and Safety. Explore our comprehensive suite of services designed to create safe and secure work environments. From risk assessments to safety training, we prioritize the well-being of your workforce. At Safe Heights Consult, our mission is to foster a culture of safety and well-being in workplaces across industries. Partner with us to create a secure environment where your team can thrive. Your safety is our priority.",
    path: "safe_heights",
  },
  {
    id: 4,
    header: "Waste Val Locus",
    description: "Welcome to Waste Val Locus, your holistic solution for Farming and Waste Management & Valorization. Experience sustainable agriculture and responsible waste utilization with us. From animal rearing to plant cultivation and innovative waste valorization, we're committed to fostering a greener future.",
    path: "waste",
  },
  {
    id: 5,
    header: "MushUp Tiktac Ventures",
    description: "Welcome to Mushup, your gateway to a world of possibilities with mushroom production. As a wholly Ghanaian company, we're on a mission to introduce innovative and sustainable mushroom solutions to Ghana and beyond. Join us in cultivating a healthier future through the proactive exploitation of mushrooms.",
    path: "mushup",
  },
  {
    id: 6,
    header: "Equipped Ventures",
    description: "Welcome to Equipped Ventures, your one-stop destination for Social, Events, and Interior Services. From exquisite interior décor to event essentials rental and thrilling indoor entertainment, we've got your social experiences covered. Join us in creating unforgettable moments and transforming spaces.",
    path: "equipped_ventures",
  },
  {
    id: 7,
    header: "Habitat Estates",
    description: "Welcome to Habitat Estates, your trusted partner in Real Estate Services. Explore a world of unparalleled expertise, integrity, and personalized solutions. Whether you're buying, selling, or investing, we're here to guide you through the intricate landscape of real estate with professionalism and dedication.",
    path: "habitat_estates",
  },
  {
    id: 8,
    header: "EdSanServ",
    description: "ED§ANSERV is a sanitation service company that seeks to maximize the use of effluent and nutrient resource from all waste streams (both solid and liquid) in a facility.",
    path: "habitat_estates",
  },
];

const CompanyCard = () => {
  // const navigate = useNavigate();

  return (
    <div className="section-bg p-0 m-0">
      <About />
      <div className="mt-12 mb-8 flex flex-col justify-center gap-10  lg:flex-row lg:gap-4">
        <div>
          <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
            What We Do
            <span className="absolute -bottom-4 left-0 h-[3px] w-48 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
          </h2>
        </div>
      </div>

      <section className="p-6 md:py-10">
        <div className="mx-auto w-full max-w-6xl ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {Intel.map((item, key) => (
              <a
                key={key}
                // onClick={()=> navigate(item.path)}
                href={'#' + item.path}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-2xl glass-bg drop-shadow-2xl  px-6 pt-4 pb-5 
                hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 hover:bg-white hover:border-double border-8
                  duration-300 ..."
              >
                <div className="flex justify-between">
                  <div className="flex content-center items-center gap-2">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-cyan-600 to-green-500 drop-shadow-2xl  rounded-full h-12 w-12 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-2xl">
                        {item.header}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-heading">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyCard;
