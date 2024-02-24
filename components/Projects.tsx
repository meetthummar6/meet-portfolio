import Image from "next/image"
const Projects = () => {
    return (
        <div className="mt-24 p-6 bg-white" id="projects">
            <div>
                <div className="flex flex-col mx-auto justify-start gap-y-6 items-center">
                    <div className="text-3xl font-bold pl-2">
                        PROJECTS
                    </div>
                    <div className="text-xl h-2 w-16 rounded-lg bg-red-600">
                    </div>
                    <div className="text-xl text-center leading-relaxed mx-8 md:mx-72 text-neutral-600">
                        Here are some of the projects I have worked on
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-5 w-full  md:gap-y-10 gap-x-2 p-6">
                    <div className="relative min-h-56 w-full col-span-2 hover:-rotate-3 hover:scale-105 transition">
                        <Image
                            src="/prompt-pulse.jpeg"
                            alt="prompt-pulse"
                            fill
                            className="rounded-lg aspect-video absolute object-cover"
                        />
                        <div className="absolute w-full h-full bg-black/95 opacity-50 hover:opacity-70 rounded-lg">

                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col gap-y-4  w-full items-center mt-5 md:mt-0">
                        <div className="text-2xl font-bold">
                            Prompt Pulse
                        </div>
                        <div className="text-neutral-700 text-lg text-center leading-relaxed mx-12">
                            An E-Commerce Platform for Selling and Buying AI Prompts with Image generation feature!
                        </div>
                        <div className="flex flex-row text-md gap-2 md:gap-4">
                            <div className="bg-neutral-200 px-2 py-1 rounded-md hover:scale-105 transition">
                                NextJS
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                ReactJS
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Tailwind CSS
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Prisma
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                MongoDB
                            </div>

                        </div>
                        <button className="bg-red-600 text-white font-bold  px-4 py-2 rounded-lg w-44 shadow mx-auto hover:-translate-y-1 transition">
                           <a href="https://github.com/promptpulse01/PromptPulse" target="_blank" className="flex flex-row gap-2 items-center justify-center">View Code<Image
                                src="/github.svg"
                                alt="github"
                                width={30}
                                height={30}
                            />
                            </a> 
                        </button>
                    </div>
                    <div className="relative min-h-56 w-full col-span-2 md:order-4 hover:-rotate-3 hover:scale-105 mt-24 md:mt-10 transition">
                        <Image
                            src="/theme-bucket.jpeg"
                            alt="theme-bucket"
                            fill
                            className="rounded-lg aspect-video absolute object-cover"
                        />
                        <div className="absolute w-full h-full bg-black/95 opacity-50 hover:opacity-70 rounded-lg">

                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col gap-y-4  w-full items-center mt-5 md:mt-10">
                        <div className="text-2xl font-bold">
                            Theme Bucket
                        </div>
                        <div className="text-neutral-700 text-lg text-center leading-relaxed mx-12">
                            An E-Commerce Platform for Selling themes and Templates!
                        </div>
                        <div className="flex flex-row gap-2 md:gap-4">
                            <div className="bg-neutral-200 px-2 py-1 rounded-md hover:scale-105 transition">
                                ReactJS
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Supabase
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Tailwind CSS
                            </div>
                        </div>
                        <button className="bg-red-600 text-white  font-bold  px-4 py-2 rounded-lg w-44   mx-auto hover:-translate-y-1 transition shadow">
                            <a href="https://github.com/shubham26062002/theme-bucket" target="_blank" className="flex flex-row gap-2 items-center justify-center">View Code<Image
                                src="/github.svg"
                                alt="github"
                                width={30}
                                height={30}
                            />
                            </a>
                        </button>
                    </div>
                    <div className="relative min-h-56 w-full col-span-2 md:order-5 hover:-rotate-3 hover:scale-105 mt-24 md:mt-10 transition">
                        <Image
                            src="/movie-recc.jpeg"
                            alt="movie-recommendation"
                            fill
                            className="rounded-lg aspect-video absolute object-cover"
                        />
                        <div className="absolute w-full h-full bg-black/95 opacity-50 hover:opacity-70 rounded-lg">

                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col gap-y-4 md:order-6 w-full items-center mt-5 md:mt-10">
                        <div className="text-2xl font-bold">
                            Movie Recommendation System
                        </div>
                        <div className="text-neutral-700 text-lg text-center leading-relaxed mx-12">
                            A Movie Recommendation System Website for recommending movies!
                        </div>
                        <div className="flex flex-row text-md gap-2 md:gap-4">
                            <div className="bg-neutral-200 px-2 py-1 rounded-md hover:scale-105 transition">
                                HTML
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                CSS
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                JavaScript
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Machine Learning
                            </div>
                            <div className=" bg-neutral-200 px-2 py-1 rounded-sm hover:scale-105 transition">
                                Flask
                            </div>

                        </div>
                        <button className="bg-red-600 text-white font-bold  px-4 py-2 rounded-lg w-44 mx-auto hover:-translate-y-1 transition shadow">
                            <a href="https://github.com/meetthummar6/movie-recc" target="_blank" className="flex flex-row gap-2 items-center justify-center">View Code<Image
                                src="/github.svg"
                                alt="github"
                                width={30}
                                height={30}
                            />
                            </a> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects