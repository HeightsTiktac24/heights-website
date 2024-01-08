import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="px-4 pt-10 pb-18 mb-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between sm:flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 ">
          <div className="text-center  lg:border-none border-b-2 pb-4">
            <a href="#">
              {/* Logo */}
              <div className=" text-heading">
                <div className="md:text-[50px] sm:text-[10vw] sm:mt-8 text-[10vw] text-black leading-none">
                  Height TikTac{" "}
                  <div className="font-bold  text-green-700"> Consortium</div>
                </div>
              </div>
            </a>
            <div className="mt-6 flex space-x-4 text-text sm:flex  items-center justify-center">
              <a href="#" target="_blank" rel="noreferrer noopener">
                {/* Logo icon: Facebook */}
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M11.4758 8.88543L11.8904 6.15533H9.2968V4.38446C9.2968 3.63737 9.65845 2.90873 10.8201 2.90873H12V0.58446C12 0.58446 10.9297 0.399994 9.90685 0.399994C7.76986 0.399994 6.37443 1.70786 6.37443 4.07456V6.15533H4V8.88543H6.37443V15.4856C6.85114 15.5613 7.33881 15.6 7.83562 15.6C8.33242 15.6 8.82009 15.5613 9.2968 15.4856V8.88543H11.4758Z" />
                </svg>
              </a>

              <a href="#" target="_blank" rel="noreferrer noopener">
                {/* Logo icon: LinkedIn */}
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z" />
                </svg>
              </a>
            </div>
            <div className="mt-12 flex  flex-col justify-center space-x-0 space-y-4 text-sm font-medium sm:flex-row sm:space-y-0 sm:space-x-6">
          <span>Copyright &copy; 2023</span>
          <a href="#" className="text-text/50 hover:text-heading">
            Terms of Service
          </a>
        </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:border-none pb-4 border-b-2">
            <div className="text-sm font-semibold uppercase tracking-wide text-heading">
              CONTACT US
            </div>
            <div className="mt-6 space-y-3 font-medium ">
              <div className="flex flex-col items-center justify-center">
                Tel :<p>+233552175769</p>
                <p>+233543370459</p>
                <p>+233248148653</p>{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:border-none border-b-2 pb-4">
            <div className="text-sm font-semibold uppercase tracking-wide text-heading">
              Email
            </div>
            <div className="mt-2 font-medium">
              <div> heightstiktac@gmail.com</div>
            </div>
            <div className="text-sm font-semibold uppercase mt-6 tracking-wide text-heading">
              Location
            </div>
            <div className="mt-2 space-y-3 font-medium">
              <div> Accra, Ghana</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-heading"></div>
            <div className="mt-6 space-y-3 font-medium">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="inline-flex cursor-pointer  animate-bounce items-center justify-center 
            rounded-full border-2  px-4 py-4 text-base 
            font-semibold shadow-lg bg-gradient-to-r from-cyan-600 to-green-500  
            "
              >
                <MdKeyboardDoubleArrowUp className="text-4xl text-white font-hairline " />
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </footer>
  );
};
