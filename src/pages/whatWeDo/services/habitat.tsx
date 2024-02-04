import { Footer } from "../../footer/footer";

export const HabitatEstates = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            Habitat Estates
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Habitat Estates, your trusted partner in Real Estate Services. Explore a world of unparalleled expertise, integrity, and personalized solutions. Whether you're buying, selling, or investing, we're here to guide you through the intricate landscape of real estate with professionalism and dedication.
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
                        At Habitat Estates, we are more than just a real estate service provider – we are your dedicated partners in navigating the dynamic realm of property transactions. Embark on your real estate journey with confidence. At Habitat Estates, we turn your property aspirations into reality. Whether you're a homeowner, investor, or seller, we are here to guide you through the intricacies of real estate with professionalism and a personalized touch.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Our comprehensive range of services includes
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Buying and Selling:</h2>
                                <span>Unlock your dream home or make a strategic property sale with our expert assistance. Our seasoned team is committed to understanding your unique needs, ensuring a seamless and satisfying experience in buying or selling real estate.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Property Management:</h2>
                                <span>Invest with confidence knowing that your property is in capable hands. Our property management services cover everything from tenant relations to maintenance, ensuring your real estate investment yields optimal returns without the hassle.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Investment Consultation:</h2>
                                <span>Navigate the complexities of real estate investments with our expert guidance. Whether you're a seasoned investor or a first-time buyer, we provide tailored advice and insights to help you make informed decisions that align with your financial goals.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Real Estate Marketing:</h2>
                                <span>Leverage our strategic marketing approaches to showcase your property to the right audience. From professional photography to targeted advertising, we ensure that your property receives the attention it deserves in the market.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Client-Centric Approach:</h2>
                                <span>What sets Habitat Estates apart is our unwavering commitment to our clients. We prioritize transparency, open communication, and personalized service, ensuring that your real estate journey is not just successful but also stress-free.</span>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="my-4 lg:max-w-3xl mt-6">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Why Choose Habitat Estates
                    </h2>
                    <ol className="list-disc space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Expertise:</h2>
                                <span>Benefit from our team's extensive knowledge and experience in the real estate industry.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Integrity:</h2>
                                <span>Trust is the foundation of our relationships. We uphold the highest standards of honesty and transparency in every transaction.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Tailored Solutions:</h2>
                                <span>Recognizing that every client and property is unique, we provide personalized solutions that align with your specific goals.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default HabitatEstates;