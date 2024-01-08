import React from "react";

export const About = () => {
  return (
    <section className="p-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-">
          <div
            className="rounded-2xl glass-bg drop-shadow-2xl  px-6 pt-4 pb-5 
                hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 hover:bg-white  hover:border-double border-8
                  duration-300 ..."
          >
            <section className="mt-12 flex flex-col justify-between gap-10 lg:mt-24 lg:flex-row lg:gap-4">
              <div>
                <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                  About
                  <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                </h2>
              </div>
              <div className="w-full space-y-8 lg:max-w-3xl lg:pl-4 lg:text-lg pb-14">
                <p>
                  Heights Tiktac is a conglomerate established with the
                  overarching goal of providing solutions to challenges in our
                  day-to-day activities. Heights Tiktac is a top-notch
                  organization which has overarching services in diverse areas
                  such as the academia, environmental, safety, waste management,
                  social and real estate. Heights Tiktac’s robust modus operandi
                  sees to it that scheduled tasks are completed in a timely
                  manner.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
