import { Footer } from "../../footer/footer";

export const WasteValLocus = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            Waste Val Locus
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Waste Val Locus, your holistic solution for Farming and Waste Management & Valorization. Experience sustainable agriculture and responsible waste utilization with us. From animal rearing to plant cultivation and innovative waste valorization, we're committed to fostering a greener future.
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
                    <p className="lg:max-w-3xl">Join us in cultivating a future where farming is not just about yields but also responsible waste utilization. At Waste Val Locus, we believe in farming that respects the earth and transforms waste into wealth.</p>
                    <p> &nbsp;</p>
                    <p className="lg:max-w-3xl">Our commitment to sustainability extends beyond conventional farming. We leverage cutting-edge technologies and environmentally conscious practices to ensure a harmonious balance between agriculture and waste management.</p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Animal Rearing:</h2>
                                <span>Embark on a journey of sustainable animal rearing with [Company Name]. Our expertise includes:</span>
                                <ol className="list-disc pl-4">
                                    <li><span className="font-medium">Poultry, Pigs, Goats, Sheep, and Rabbit Rearing:</span> Ethical and humane practices for optimal animal welfare.</li>
                                    <li><span className="font-medium">Fish Farming:</span> Cultivating a diverse range of fish species sustainably.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Plant Cultivation:</h2>
                                <span>Explore the richness of our plant cultivation endeavors, encompassing a variety of crops:</span>
                                <ol className="list-disc list-inside pl-4">
                                    <li><span className="font-medium">Rice, Cashew, Cocoa, Cassava, Mango Cultivation:</span> Employing eco-friendly practices for high-quality yields.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Valorization of Waste Products:</h2>
                                <span>At Waste Val Locus, we redefine waste by unlocking its hidden value. Our innovative waste valorization processes include:</span>
                                <ol className="list-disc list-inside pl-4">
                                    <li><span className="font-medium">Complete Value Realization:</span> Transforming seemingly waste products from organic sources (rice, cashew, cassava, coconut, etc.) into valuable resources.</li>
                                    <li><span className="font-medium">Products such as Briquette, Biochar, Alcohol, etc.:</span> Turning waste into usable and sustainable products that contribute to a circular economy.</li>
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

export default WasteValLocus;