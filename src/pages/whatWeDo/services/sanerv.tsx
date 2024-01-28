import { Footer } from "../../footer/footer";

const Sanerv = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            Sanerv Consult
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Sanerv Consult, your partner in Environmental Services, specializing in Water, Sanitation, and Hygiene (WASH). Explore our offerings, including Environmental Impact Assessment (EIA) services and cutting-edge Geographic Information System (GIS) services.
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
                        Environmental Impact Assessment (EIA) Services
                    </h2>
                    <p className="lg:max-w-3xl">
                        Navigate the environmental landscape with precision through our EIA services. Our dedicated team offers. Our commitment to sustainability extends beyond mere compliance; we strive for a positive environmental impact in every project.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">EIA Screening and Scoping:</h2>
                                <span>Identifying potential environmental impacts.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">EIA Coordination:</h2>
                                <span>Efficient management of the entire EIA process.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Environmental Statement Preparation:</h2>
                                <span>Crafting comprehensive statements aligned with regulatory standards.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Environmental Statement Writing and Reviews:</h2>
                                <span>Ensuring accuracy and compliance in every environmental statement.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            {/* What we do 2 */}
            <section className="card m-6 p-6 md:py-10 md:mx-24 md:px-12 rounded-2xl drop-shadow-2xl glass-bg">
                <div className="flex flex-col justify-center">
                    <h2 className="font-display relative text-xl text-heading lg:text-3xl mb-2 lg:max-w-3xl">
                        Geographic Information System (GIS) Services
                    </h2>
                    <p className="lg:max-w-3xl">
                        Harness the power of spatial data with our GIS services. Our GIS services are designed to empower decision-makers with actionable insights, from mapping and analysis to strategic planning.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Provision of GIS Services:</h2>
                                <span>Tailored GIS solutions to meet your unique needs.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Provision of Remote Sensing Services:</h2>
                                <span>Utilizing advanced technology for data collection and analysis.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Sanerv;