// import React from "react";
import Edna from "../../assets/edna.png";
import Anthony from "../../assets/tony.png";
import Steven from "../../assets/steven.jpg";

export const Staffs = () => {
  const StaffInfo = [
    {
      name: "Anthony Boakye Antwi",
      about:
        "I am an academic and environmental, health and safety and waste management professional, who seeks to bring to bear tenable dexterity and an inuring persevering disposition in improving lives while achieving set goals in work environments. ",
      image: `${Anthony}`,
    },
    // {
    //   name: "Edna Korlekie Dapaah",
    //   about:
    //     "I am a civil engineering professional with great interest in tackling environmental and sanitation-related problems using sustainable engineering concepts. I have over the years demonstrated that I am capable of promulgating solutions to any and every problem I encounter.",
    //   image: `${Edna}`,
    // },
    // {
    //   name: "Steven Adi Otiku-Ayiku",
    //   about:
    //     "I am adept and versatile but possesses years of experience as a civil engineer. Specifically, I am passionate about the environment and seeks to bring innovative solutions to everyday problems within and without the field of engineering. ",
    //   image: `${Steven}`,
    // },
  ];
  return (
    <section className="p-6 text-center md:p-10 bg-gradient-to-r from-cyan-600 to-green-500 mt-12">
      {/* <div className="font-normal text-center text-white text-6xl pt-10 mb-12">
        Meet Our<span className="bg-white text-green-400 mx-2 px-6 py-3 ">Experts</span>
      </div> */}
      <div className="mt-12 mb-12 flex flex-col justify-center gap-10 lg:mt-12 lg:flex-row lg:gap-4">
        <div>
          <h2 className="font-display relative text-3xl text-white font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
            Our Expects
            <span className="absolute -bottom-4 left-0 h-[3px] w-32 bg-white  lg:-bottom-5"></span>
          </h2>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex w-full flex-col md:flex-row">
          {StaffInfo.map((item) => (
            <div className="w-full p-5 text-center md:w-4/12 md:p-8">
              <img
                src={item.image}
                alt="avatar"
                className="mt-3 inline-block h-16 w-16 border-4 rounded-full"
              />
              <p className="mt-1 text-sm text-text text-white font-bold">
                {item.name}
              </p>
              <ul className="flex justify-center pb-3">
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                      fill="#FB923C"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                      fill="#FB923C"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                      fill="#FB923C"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                      fill="#FB923C"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04893 3.92756C9.34828 3.00624 10.6517 3.00624 10.951 3.92756L12.0206 7.21935C12.1545 7.63138 12.5384 7.91034 12.9717 7.91034H16.4329C17.4016 7.91034 17.8044 9.14995 17.0207 9.71935L14.2205 11.7538C13.87 12.0084 13.7233 12.4598 13.8572 12.8718L14.9268 16.1636C15.2261 17.0849 14.1717 17.8511 13.3879 17.2817L10.5878 15.2472C10.2373 14.9926 9.76269 14.9926 9.4122 15.2472L6.61203 17.2817C5.82832 17.8511 4.77384 17.0849 5.07319 16.1636L6.14276 12.8718C6.27663 12.4598 6.12997 12.0084 5.77949 11.7538L2.97932 9.71935C2.1956 9.14995 2.59838 7.91034 3.5671 7.91034H7.0283C7.46153 7.91034 7.84548 7.63138 7.97936 7.21935L9.04893 3.92756Z"
                      fill="#FB923C"
                    />
                  </svg>
                </li>
              </ul>
              <p className="pl-0 pr-0 pt-0 text-center text-base text-heading text-white">
                {item.about}
              </p>
            </div>
          ))}
        </div>
        {/* <svg
            width="98"
            height="48"
            viewBox="0 0 98 48"
            fill="currentColor"
            className="mx-auto mt-3 text-text"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.7073 20.5972C80.0815 21.2429 80.2039 21.9774 80.2443 22.8032L80.2975 23.9039V31.6007L80.3517 32.7025C80.4603 34.502 81.7874 35.8325 83.6007 35.9457L84.6968 36V23.9039L84.7511 22.8032C84.7961 21.9867 84.9174 21.2382 85.2974 20.588C85.6846 19.921 86.2404 19.3677 86.9091 18.9835C87.5778 18.5993 88.3358 18.3978 89.107 18.3992C89.8782 18.4006 90.6355 18.6049 91.3028 18.9915C91.97 19.3781 92.5239 19.9335 92.9086 20.6018C93.2829 21.2475 93.3995 21.9959 93.4446 22.8032L93.4988 23.9005V31.6007L93.5531 32.7025C93.6663 34.5112 94.983 35.8418 96.8021 35.9457L97.8981 36V22.8032C97.8981 20.4697 96.9714 18.2317 95.3216 16.5813C93.6719 14.9309 91.4342 14.0032 89.1007 14.0023C87.8517 14.001 86.6168 14.2662 85.4786 14.7803C84.3403 15.2944 83.3248 16.0454 82.5 16.9833C81.6748 16.0458 80.6593 15.2949 79.5211 14.7807C78.3829 14.2665 77.1482 14.0007 75.8993 14.0012C74.0721 14.0012 72.3766 14.5555 70.9722 15.513C70.1152 14.5567 68.1979 14.0012 67.0972 14.0012V36L68.1979 35.9457C70.039 35.8244 71.3695 34.5297 71.4411 32.7025L71.5 31.6007V23.9039L71.5543 22.8032C71.6005 21.9728 71.716 21.2429 72.0913 20.5926C72.4789 19.9261 73.0345 19.3728 73.7027 18.9882C74.3709 18.6035 75.1283 18.4009 75.8993 18.4005C76.6709 18.4006 77.4289 18.6037 78.0973 18.9893C78.7656 19.3748 79.3209 19.9294 79.7073 20.5972ZM4.39931 35.9469L5.5 36H21.9988L21.9446 34.9028C21.7956 33.0941 20.5147 31.7728 18.7002 31.655L17.5995 31.6007H7.70139L20.8982 18.3993L20.8439 17.3032C20.7584 15.4761 19.4232 14.1559 17.5995 14.0554L16.4988 14.0058L0 14.0012L0.0542839 15.1019C0.198656 16.8932 1.498 18.2422 3.29746 18.3462L4.39931 18.4005H14.2975L1.10069 31.6018L1.15498 32.7025C1.26354 34.5159 2.57213 35.8291 4.39931 35.9457V35.9469ZM62.7788 17.2212C63.8004 18.2426 64.6107 19.4552 65.1636 20.7898C65.7165 22.1244 66.0011 23.5548 66.0011 24.9994C66.0011 26.444 65.7165 27.8744 65.1636 29.209C64.6107 30.5436 63.8004 31.7562 62.7788 32.7776C60.7148 34.8399 57.9165 35.9983 54.9988 35.9983C52.0812 35.9983 49.2829 34.8399 47.2189 32.7776C42.9236 28.4823 42.9236 21.5166 47.2189 17.2212C48.2396 16.2002 49.4513 15.3902 50.785 14.8375C52.1187 14.2848 53.5482 14.0002 54.9919 14C56.4379 13.999 57.87 14.2831 59.2061 14.836C60.5423 15.3889 61.7563 16.1999 62.7788 17.2224V17.2212ZM59.6661 20.3362C60.9033 21.5744 61.5983 23.2531 61.5983 25.0035C61.5983 26.7538 60.9033 28.4326 59.6661 29.6707C58.4279 30.908 56.7492 31.6029 54.9988 31.6029C53.2485 31.6029 51.5697 30.908 50.3316 29.6707C49.0944 28.4326 48.3994 26.7538 48.3994 25.0035C48.3994 23.2531 49.0944 21.5744 50.3316 20.3362C51.5697 19.099 53.2485 18.404 54.9988 18.404C56.7492 18.404 58.4279 19.099 59.6661 20.3362ZM31.9062 14C33.35 14.0004 34.7795 14.2851 36.1133 14.8381C37.4469 15.391 38.6587 16.2012 39.6792 17.2224C43.9757 21.5166 43.9757 28.4834 39.6792 32.7776C37.6153 34.8399 34.817 35.9983 31.8993 35.9983C28.9816 35.9983 26.1833 34.8399 24.1194 32.7776C19.824 28.4823 19.824 21.5166 24.1194 17.2212C25.14 16.2002 26.3518 15.3902 27.6855 14.8375C29.0192 14.2848 30.4487 14.0002 31.8924 14H31.9062ZM36.5666 20.3339C37.8041 21.5721 38.4994 23.2511 38.4994 25.0017C38.4994 26.7524 37.8041 28.4314 36.5666 29.6696C35.3284 30.9068 33.6497 31.6018 31.8993 31.6018C30.1489 31.6018 28.4702 30.9068 27.232 29.6696C25.9948 28.4314 25.2998 26.7527 25.2998 25.0023C25.2998 23.252 25.9948 21.5732 27.232 20.335C28.4702 19.0978 30.1489 18.4028 31.8993 18.4028C33.6497 18.4028 35.3284 19.0978 36.5666 20.335V20.3339Z"
            />
          </svg> */}
      </div>
    </section>
  );
};
