import { Footer } from "../../footer/footer";

export const FrontierHub = () => {
    return (
        <main>
            <section className="section-bg p-6 md:py-10">
                <div className="mb-8 text-center">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                            Frontier Hub
                            <span className="absolute -bottom-4 left-0 h-[3px] w-24 bg-gradient-to-r from-cyan-600 to-green-500  lg:-bottom-5"></span>
                        </h2>
                    </div>
                </div>
                <div className="w-full text-center space-y-8 lg:px-16 lg:text-lg pb-14">
                    <p>
                        At Frontiers Hub, we stand by you, providing unwavering support across academia, business, and environmental initiatives. We assist you with embarking on your publication journey with confidence. Elevate your business with our tailored consulting services. and partnering with international editing companies for a global perspective.
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
                        Freelance Academic Editing Services of Manuscripts and Publication Services
                    </h2>
                    <p className="lg:max-w-3xl">
                        We stand by you throughout your publication journey through editing manuscripts to ensure clarity and adherence to standard scientific English, formatting manuscripts according to journal guidelines, and providing comprehensive support from journal selection to submission.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Editing of manuscripts</h2>
                                <ol className="list-[lower-roman] list-inside">
                                    <li>
                                        <span>We provide editorial assistance on your manuscripts:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li><span className="font-medium">Edit manuscripts </span>so that the final text is in standard scientific English and has clear, well-structured sentences</li>
                                            <li><span className="font-medium">Format manuscripts </span>according to the target journal where required while following other specific instructions.</li>
                                            <li>Ensure that all<span className="font-medium"> subject-specific conventions </span>are followed.</li>
                                        </ol>
                                    </li>
                                </ol>
                                <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Academics such as lecturers, doctoral and masters’ students as well as research institutions.</dd>
                                </dl>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h2 className="font-semibold">Guide and facilitate the publication process of authors</h2>
                                <ol className="list-[lower-roman] list-inside space-y-4">
                                    <li>
                                        <span>Assist client choose you a journal:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>We offer journal selection</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist client during the manuscript preparation stage:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>All the services highlighted under i</li>
                                            <li>Plagiarism check, Artwork formatting, Cover letter creation</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist clients during the manuscript submission process prior to publication:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>Journal Submission.</li>
                                            <li>Re-editing and re-submission support.</li>
                                            <li>Assist in monitoring activity on author dashboard.</li>
                                            <li>Prepare drafts of emails for correspondence with editors.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist clients with reviewer responses during publication:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>Assist (partially or fully) clients in coming up with responses to reviewers.</li>
                                            <li>Prepare response letters to clients.</li>
                                        </ol>
                                    </li>
                                    {/* <li>
                                        <span>Partnering with International Editing Companies</span>
                                        <ol className="list-disc list-inside pl-4">
                                        </ol>
                                    </li> */}
                                    {/* <li>
                                        <span>We provide editorial assistance on your manuscripts:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li><span className="font-medium">Edit manuscripts </span>so that the final text is in standard scientific English and has clear, well-structured sentences</li>
                                            <li><span className="font-medium">Format manuscripts </span>according to the target journal where required while following other specific instructions.</li>
                                            <li>Ensure that all<span className="font-medium"> subject-specific conventions </span>are followed.</li>
                                        </ol>
                                    </li> */}
                                </ol>

                                {/* <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Academics such as lecturers, doctoral and masters’ students as well as research institutions.</dd>
                                </dl> */}
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            {/* What we do 2 */}
            <section className="card m-6 p-6 md:py-10 md:mx-24 md:px-12 rounded-2xl drop-shadow-2xl glass-bg">
                <div className="flex flex-col justify-center">
                    <h2 className="font-display relative text-xl text-heading lg:text-3xl mb-2 lg:max-w-3xl">
                        Business consulting services
                    </h2>
                    <p className="lg:max-w-3xl">
                        Elevate your business with our tailored consulting services:
                        <ol className="list-disc list-inside pl-4">
                            <li>Crafting business concept notes, model canvases, and proposals.</li>
                            <li>Guiding practical production aspects and sector identification.</li>
                            <li>Introducing Key Performance Indicators for effective progress measurement.</li>
                            <li>Conducting quality assurance for diverse companies.</li>
                        </ol>
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Assist clients with business related writings</h2>
                                <ol className="">
                                    <li>
                                        <ol className="list-disc pl-4">
                                            <li>Business concept note writing, business model canvas writing and business proposal writing.</li>
                                            <li>Guide companies on how to carry the practical production bits of their businesses.</li>
                                            <li>Identifying sectors that companies can delve into and developing business plans in that direction.</li>
                                        </ol>
                                    </li>
                                </ol>
                                {/* <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Academics such as lecturers, doctoral and masters’ students as well as research institutions.</dd>
                                </dl> */}
                            </div>
                        </li>

                        <li>
                            <div>
                                <h2 className="font-semibold">Introducing Key Performance Indicators which will help companies measure their progress</h2>
                                {/* <ol className="list-[lower-roman] list-inside space-y-4">
                                    <li>
                                        <span>Assist client choose you a journal:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>We offer journal selection</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist client during the manuscript preparation stage:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>All the services highlighted under i</li>
                                            <li>Plagiarism check, Artwork formatting, Cover letter creation</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist clients during the manuscript submission process prior to publication:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>Journal Submission.</li>
                                            <li>Re-editing and re-submission support.</li>
                                            <li>Assist in monitoring activity on author dashboard.</li>
                                            <li>Prepare drafts of emails for correspondence with editors.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Assist clients with reviewer responses during publication:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li>Assist (partially or fully) clients in coming up with responses to reviewers.</li>
                                            <li>Prepare response letters to clients.</li>
                                        </ol>
                                    </li>
                                    <li>
                                        <span>Partnering with International Editing Companies</span>
                                        <ol className="list-disc list-inside pl-4">
                                        </ol>
                                    </li>
                                    <li>
                                        <span>We provide editorial assistance on your manuscripts:</span>
                                        <ol className="list-disc list-inside pl-4">
                                            <li><span className="font-medium">Edit manuscripts </span>so that the final text is in standard scientific English and has clear, well-structured sentences</li>
                                            <li><span className="font-medium">Format manuscripts </span>according to the target journal where required while following other specific instructions.</li>
                                            <li>Ensure that all<span className="font-medium"> subject-specific conventions </span>are followed.</li>
                                        </ol>
                                    </li>
                                </ol>

                                <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Academics such as lecturers, doctoral and masters’ students as well as research institutions.</dd>
                                </dl> */}
                            </div>
                        </li>

                        <li>
                            <div>
                                <h2 className="font-semibold">Conducting quality assurance for diverse companies.</h2>
                                {/* <ol className="">
                                    <li>
                                        <ol className="list-disc pl-4">
                                            <li>Business concept note writing, business model canvas writing and business proposal writing.</li>
                                            <li>Guide companies on how to carry the practical production bits of their businesses.</li>
                                            <li>Identifying sectors that companies can delve into and developing business plans in that direction.</li>
                                        </ol>
                                    </li>
                                </ol> */}
                                <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Business companies (start-ups and fully-fledged companies)</dd>
                                </dl>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>


            {/* What we do 3 */}
            <section className="card m-6 p-6 md:py-10 md:mx-24 md:px-12 rounded-2xl drop-shadow-2xl glass-bg">
                <div className="flex flex-col justify-center">
                    <h2 className="font-display relative text-xl text-heading lg:text-3xl mb-2 lg:max-w-3xl">
                        Research/Grant proposal writing
                    </h2>
                    <p className="lg:max-w-3xl">
                        Harnessing the solutions proffered by academic research.
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Writing proposals for grants that will either tow a research tangent or a practical tangent.</h2>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            {/* What we do 4 */}
            <section className="card m-6 p-6 md:py-10 md:mx-24 md:px-12 rounded-2xl drop-shadow-2xl glass-bg">
                <div className="flex flex-col justify-center">
                    <h2 className="font-display relative text-xl text-heading lg:text-3xl mb-2 lg:max-w-3xl">
                        Academic Helpline
                    </h2>
                    <p className="lg:max-w-3xl">
                        Empowering students with comprehensive academic support through:
                        <ol className="list-disc list-inside pl-4">
                            <li>Assistance in thesis, assignments, and research proposal writing.</li>
                            <li>Aid in data collection.</li>
                        </ol>
                    </p>
                </div>
                <div className="my-4 lg:max-w-3xl">
                    <h2 className="font-display relative text-xl lg:text-2xl mb-2">
                        Services
                    </h2>
                    <ol className="list-decimal space-y-4 pl-4">
                        <li>
                            <div>
                                <h2 className="font-semibold">Assist students (particularly postgraduates) with academic writing</h2>
                                <ol className="">
                                    <li>
                                        <ol className="list-disc pl-4">
                                            <li>Thesis writing</li>
                                            <li>Assignments</li>
                                            <li>Research Proposal writing</li>
                                        </ol>
                                    </li>
                                </ol>
                                {/* <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Academics such as lecturers, doctoral and masters’ students as well as research institutions.</dd>
                                </dl> */}
                            </div>
                        </li>

                        <li>
                            <div>
                                <h2 className="font-semibold">Assist students with data collection</h2>
                                {/* <ol className="">
                                    <li>
                                        <ol className="list-disc pl-4">
                                            <li>Business concept note writing, business model canvas writing and business proposal writing.</li>
                                            <li>Guide companies on how to carry the practical production bits of their businesses.</li>
                                            <li>Identifying sectors that companies can delve into and developing business plans in that direction.</li>
                                        </ol>
                                    </li>
                                </ol> */}
                                {/* <dl className="my-4">
                                    <dt className="font-medium">Target Audience</dt>
                                    <dd>Business companies (start-ups and fully-fledged companies)</dd>
                                </dl> */}
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default FrontierHub;
