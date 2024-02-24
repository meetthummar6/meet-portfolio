import Image from "next/image"
const ContactUs = () => {
    return (
        <div className="mt-24 p-6 h-[880px] relative flex flex-col"id="contact">
            <Image 
                src="/O9FG4W0.jpg"
                alt="banner"
                fill
                className="absolute"
            />
            <div className="absolute">
            <div className="flex flex-col mx-auto justify-start gap-y-6 items-center">
                <div className="text-3xl font-bold pl-2">
                    CONTACT
                </div>
                <div className="text-xl h-2 w-16 rounded-lg bg-red-600">
                </div>
                <div className="text-xl text-center leading-relaxed mx-8 md:mx-72 text-neutral-600">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </div>
            </div>
            <form action="">
            <div className="mt-10 p-10 bg-white h-[600px] mx-auto flex flex-col max-w-[600px] shadow-xl gap-6 rounded">
                <div className="text-2xl font-semibold text-neutral-700">
                    Name
                </div>
                <input type="text" placeholder="Enter your Name" className="border-2 p-2 mt-2 bg-neutral-200 rounded" />
                <div className="text-2xl font-semibold">
                    Email
                </div>
                <input type="text" placeholder="Enter your Email" className="border-2 p-2 mt-2 bg-neutral-200 rounded" />
                <div className="text-2xl font-semibold">
                    Message
                </div>
                <textarea placeholder="Enter your name" className="border-2 p-2 mt-2 bg-neutral-200 rounded h-40" />
                <button className="bg-red-600 text-white font-bold self-end mr-6 px-8 py-3 rounded hover:-translate-y-1 transition">
                    Submit
                </button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default ContactUs