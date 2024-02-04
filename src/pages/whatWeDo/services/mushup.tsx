import { Footer } from "../../footer/footer";

export const MushUp = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            MushUp Tiktac Ventures
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        Welcome to Mushup, your gateway to a world of possibilities with mushroom production. As a wholly Ghanaian company, we're on a mission to introduce innovative and sustainable mushroom solutions to Ghana and beyond. Join us in cultivating a healthier future through the proactive exploitation of mushrooms.
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
                        Mushup is more than a company; it's a vision for a healthier and more sustainable world. Rooted in Ghana, we aspire to be the innovative driver of development, showcasing the myriad possibilities of mushroom production. Our mission is clear - to contribute to healthy and sustained development in Ghana, Africa, and the world by harnessing the power of mushrooms. Mushup is not just a company; it's a movement towards a healthier lifestyle and sustainable development.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl mb-2">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Objectives and Goals
                    </h2>
                    <p>
                        At Mushup, ambition meets reality. Our objectives and goals are centered around proactively addressing customer needs while establishing a financially stable niche in the global landscape.
                    </p>
                    <p>
                        Key objectives include:
                    </p>
                    <ol className="list-disc list-inside pl-4">
                        <li>Making mushrooms a widely consumed delicacy in various forms.</li>
                        <li>Expanding and introducing diverse uses of mushrooms, revolutionizing their role in Ghana and globally.</li>
                    </ol>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl">
                        Services
                    </h2>
                    <p>Discover the range of services Mushup offers to bring the goodness of mushrooms to your table</p>
                    <ol className="list-decimal space-y-4 pl-4 mt-2">
                        <li>
                            <div>
                                <h2 className="font-semibold">Production of Mushroom Spawns:</h2>
                                <span>Providing the foundation for successful mushroom cultivation.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Production of Fresh and Dry Mushrooms:</h2>
                                <span>Delivering premium quality mushrooms, fresh or preserved.</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h2 className="font-semibold">Production of Processed Products:</h2>
                                <span>Innovating with processed mushroom products to elevate culinary experiences.</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default MushUp;