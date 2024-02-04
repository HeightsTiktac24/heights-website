import { Footer } from "../../footer/footer";

export const SafeHeights = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            SafeHeights Consult
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Safe Heights Consult, your dedicated partner in Occupational Health and Safety. Explore our comprehensive suite of services designed to create safe and secure work environments. From risk assessments to safety training, we prioritize the well-being of your workforce. At Safe Heights Consult, our mission is to foster a culture of safety and well-being in workplaces across industries. Partner with us to create a secure environment where your team can thrive. Your safety is our priority.
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
                        Occupational Health and Safety
                    </h2>
                    <p className="lg:max-w-3xl">
                        At Safe Heights Consult, we understand that a safe workplace is a productive workplace. Our seasoned professionals offer a range of specialized services tailored to meet your occupational health and safety needs.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Risk Assessment and Management:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Thorough identification and evaluation of workplace hazards.</li>
                                    <li>Customized risk management plans to mitigate potential risks.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Safety Training Programs:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Comprehensive training sessions for employees at all levels.</li>
                                    <li>Specialized programs addressing industry-specific safety requirements.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Compliance Audits and Consulting:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Rigorous audits to ensure adherence to local and international safety standards.</li>
                                    <li>Expert consulting services for optimizing safety protocols and procedures.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Incident Investigation and Reporting:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Swift and thorough investigation of workplace incidents.</li>
                                    <li>Accurate reporting with actionable recommendations for prevention.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Emergency Response Planning:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Development of effective emergency response plans tailored to your industry.</li>
                                    <li>Training drills to ensure readiness in case of unforeseen events.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Health Surveillance Programs:</h2>
                                <ol className="list-disc list-inside pl-4">
                                    <li>Implementation of health monitoring initiatives to safeguard employee well-being.</li>
                                    <li>Ongoing assessments to detect and address potential health risks.</li>
                                </ol>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default SafeHeights;