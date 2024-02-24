import Image from "next/image"

const HeroPage = () => {
    return (
        <div className="h-[600px] w-full">
            <div className="top-20 left-0 h-full w-full relative">
                <Image
                    src="/O9FG4W0.jpg"
                    alt="banner"
                    fill
                    className="absolute"
                />
                <div className="absolute w-full h-full flex flex-col mx-auto  justify-start gap-y-6 items-center">
                    <div className="mt-[180px] text-xl md:text-3xl font-black leading-relaxed">
                        HEY, I&apos;M MEET THUMMAR
                    </div>
                    <div className="text-xl text-center leading-relaxed mx-5 sm:mx-40">
                        Creating beautiful and user-friendly websites that adapt seamlessly to any device, blending creativity with the latest tech trends
                    </div>
                    <button className="mt-10 bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:-translate-y-1 transition">
                        <a href="/resume_Meet Thummar.pdf" download>RESUME</a>
                    </button>
                    <div className="mt-10 hidden sm:flex gap-8 mx-auto">
                        <a href="https://github.com/MeetThummar">
                            <Image
                                src="/github.svg"
                                alt="github"
                                width={30}
                                height={30}
                                className="hover:scale-105 hover:-translate-y-1 transition"
                            />
                        </a>
                        <a href="https://in.linkedin.com/in/meet-thummar-576200220">
                        <Image
                            src="/linkedin.svg"
                            alt="linkedin"
                            width={30}
                            height={30}
                            className="hover:scale-105 hover:-translate-y-1 transition"
                        />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage