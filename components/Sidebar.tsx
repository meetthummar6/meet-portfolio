

const Sidebar = (
    {
        toggle, isOpen
    }: {
        toggle: () => void,
        isOpen: boolean
    }
) => {
    return (
        <>
            {isOpen ? (
                <div className="fixed top-20 right-0 w-screen h-fit bg-white flex  flex-col justify-between items-end gap-10 px-5 py-1 z-50">
                    <div className="font-bold flex flex-col w-full border-b text-lg py-3 cursor-pointer hover:text-red-500">
                        <a href="/" className="self-end h-8"> Home</a> 
                    </div>
                    <div className="font-bold flex flex-col w-full border-b text-lg cursor-pointer hover:text-red-500">
                        <a href="/#about" className="self-end h-8"> About</a> 
                    </div>
                    <div className="font-bold flex flex-col w-full border-b text-lg cursor-pointer hover:text-red-500">
                        <a href="/#projects" className="self-end h-8"> Projects</a> 
                    </div>
                    <div className="font-bold flex flex-col w-full border-b text-lg cursor-pointer hover:text-red-500 ">
                        <a href="/#contact" className="self-end h-8"> Contact</a> 
                    </div>
                </div>
            ) : (
                <div className="hidden">

                </div>
            )}
        </>
    )
}

export default Sidebar