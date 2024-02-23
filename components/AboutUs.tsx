
const AboutUs = () => {
    const skills=[
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "Tailwind",
        "Typescript",
        "Git",
        "Github",
        "C language",
        "C++",
        "Python",
    ]
    return (
        <div className="mt-24 p-6" id="about">
            <div className="flex flex-col mx-auto justify-start gap-y-6 items-center">
                <div className="text-3xl font-bold pl-2">
                    ABOUT ME
                </div>
                <div className="text-xl h-2 w-16 rounded-lg bg-red-600">
                </div>
                <div className="text-xl text-center leading-relaxed mx-8 sm:mx-72">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </div>
            </div>
            <div className="mt-10 p-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col mx-auto justify-start gap-y-6 items-center">
                    <div className="text-2xl font-bold">
                        Know More about me
                    </div>
                    <div className="leading-relaxed font-semibold flex flex-col mx-8 text-gray-600">
                        <div>
                            Hello there! I am Meet Thummar, a passionate and passionate <span className="text-red-600 text-xl font-bold">Full Stack Web Developer</span> who is eager to make a mark in the technology world.  I bring a fresh perspective and a solid foundation in web development to every project.
                        </div>
                        <div>
                            I am always eager to learn and adapt to new technologies and processes, constantly expanding my skill set to stay at the forefront of this rapidly growing industry.
                        </div>
                        <div>
                            As I embark on my professional journey as a Full Stack Developer, I am excited for opportunities to use my skills and creativity to create impactful solutions that create sustainable perspectives.

                            Let's join together and embark on this exciting journey!
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-auto justify-start gap-y-6 items-center">
                    <div className="text-2xl font-bold">
                        My Skills
                    </div>
                    <div className="grid grid-cols-4 text-center gap-4">
                        {skills.map((skill)=>{
                            return <div key={skill} className="text-xl font-semibold bg-red-600 text-white rounded-lg p-2">{skill}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs