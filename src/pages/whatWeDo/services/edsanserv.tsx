import { Footer } from "../../footer/footer";

export const EdSanServ = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            EdSanServ
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        ED§ANSERV   is a sanitation service company that seeks to maximize the use of effluent and nutrient resource from all waste streams (both solid and liquid) in a facility.
                    </p>
                </div>
            </section>
            <aside className="p-6 md:pt-10">
                <div className="flex flex-row justify-center">
                    <h2 className="font-display relative text-2xl font-bold tracking-tight text-heading lg:text-4xl lg:tracking-tighter">
                        What we do
                    </h2>
                </div>
            </aside>

            {/* What we do 1 */}
            <section className="card m-6 p-6 md:py-10 md:mx-24 md:px-12 rounded-2xl drop-shadow-2xl glass-bg">
                <div className="flex flex-col justify-center">
                    <h2 className="font-display relative text-xl text-heading lg:text-3xl mb-2 lg:max-w-3xl">
                    </h2>
                    <p className="lg:max-w-3xl">
                        The company’s goal is to safely manage almost all streams of waste, i.e to collect, treat and re-use at the point of generation.
                    </p>
                </div>
                <div className="my-6 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Mission
                    </h2>
                    <p>
                        To attain self-sustainability for almost all facilities in Ghana through our services  our products and services provided.
                    </p>
                </div>
                <div className="my-4 flex-col md:flex-row space-x-2">

                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Key Service Areas
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Edecof-Tank</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Design, construction and maintainance of Edecof-tank</li>
                                    <li>Design, construction and maintenance of drainage channels and effluent treatment system for irrigational purposes</li>
                                    <li>Drainage design of effluent</li>
                                    <div className="grid grid-cols-auto lg:grid-cols-3">
                                        <img src="./htt1.jpg" alt="" />
                                        <img src="./htt2.jpg" alt="" />
                                        <img src="./htt3.jpg" alt="" />
                                        <img src="./htt4.jpg" alt="" />
                                        <img src="./htt5.png" alt="" />
                                        <img src="./htt6.jpg" alt="" />
                                        <img src="./htt7.jpg" alt="" />
                                        <img src="./htt8.jpg" alt="" />
                                        <img src="./htt9.jpg" alt="" />
                                        <img src="./htt10.jpg" alt="" />
                                        <img src="./htt11.jpg" alt="" />
                                        <img src="./htt12.jpg" alt="" />
                                    </div>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Edflowering Hub</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Landscaping design services decoration</li>
                                    <li>Pavement design Services</li>
                                    <div className="grid grid-cols-auto lg:grid-cols-3">
                                        <img src="./edf1.jpg" alt="" />
                                        <img src="./edf2.jpg" alt="" />
                                        <img src="./edf3.jpg" alt="" />
                                        <img src="./edf4.jpg" alt="" />
                                        <img src="./edf5.png" alt="" />
                                    </div>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">EdBinpod</h2>
                                <span>More information to be provided later</span>
                            </div>
                        </li>
                    </ol>

                </div>
            </section>
            <Footer />
        </main>
    );
};

export default EdSanServ;