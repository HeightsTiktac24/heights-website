import { Footer } from "../../footer/footer";

export const EquippedVentures = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            Equipped Ventures
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Equipped Ventures, your one-stop destination for Social, Events, and Interior Services. From exquisite interior décor to event essentials rental and thrilling indoor entertainment, we've got your social experiences covered. Join us in creating unforgettable moments and transforming spaces.
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
                        At Equipped Ventures, we're passionate about enhancing your social experiences and transforming spaces into memorable settings. At Equipped Ventures, we believe in creating experiences that linger in your memories. Let us as redefine your social gatherings, events, and interior aesthetics with creativity, quality, and unparalleled entertainment. Your journey to extraordinary experiences begins here.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Provision of Interior Décor Services:</h2>
                                <span>Immerse yourself in a world of creativity with our expert interior décor services. Whether it's a home, office, or event space, our talented team crafts bespoke designs that reflect your style and vision. Elevate your surroundings with our signature touch.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Renting of Canopies, Chairs, and Tables for Social Events:</h2>
                                <span>Make your events exceptional with our hassle-free event essentials rental services. From intimate gatherings to grand celebrations, we provide high-quality canopies, chairs, and tables that not only meet but exceed your event needs. We're here to turn your vision into a reality.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Indoor Games House and Cart Racing Center:</h2>
                                <span>Step into the excitement of our indoor entertainment hub. Our games house offers a variety of engaging indoor games, providing a perfect setting for socializing and friendly competition. For thrill-seekers, our cart racing center promises an adrenaline-pumping experience that will leave you wanting more.</span>
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="my-4 lg:max-w-3xl mt-6">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Why Choose Equipped Ventures
                    </h2>
                    <ol className="list-disc space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Innovative Design Expertise:</h2>
                                <span>Our interior décor services are driven by a passion for creativity and a commitment to transforming spaces uniquely.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Effortless Event Solutions:</h2>
                                <span>Simplify your event planning with our convenient rental services, ensuring your gatherings are not only special but stress-free.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Indoor Entertainment Extravaganza:</h2>
                                <span>Immerse yourself in a world of fun and excitement at our indoor games house and cart racing center, designed for individuals and groups alike.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default EquippedVentures;