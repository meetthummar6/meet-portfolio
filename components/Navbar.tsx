import Image from "next/image"

const Navbar = (
  { toggle, isOpen }: { toggle: () => void, isOpen: boolean }
) => {
  return (
    <div className="flex justify-between z-50 items-center fixed bg-white h-20 w-full py-5 px-2 border-b sm:px-16">
      <div className="flex justify-start items-center gap-4">
        <div className="relative h-12 w-12">
          <Image
            src="/logo.jfif"
            alt="logo"
            fill
            className="absolute object-cover rounded-full ring ring-red-500 hover:ring-teal-500"
          />
        </div>
        <div className="font-bold text-lg cursor-pointer hover:text-red-500">
          <a href="/">Meet Thummar</a>
        </div>
      </div>

      <div className="hidden sm:flex justify-end items-center gap-10 text-lg">
        <div className="font-bold cursor-pointer hover:text-red-500">
          <a href="/">Home</a>
        </div>
        <div className="font-bold cursor-pointer hover:text-red-500">
          <a href="/#about">About</a>
        </div>
        <div className="font-bold cursor-pointer hover:text-red-500">
          <a href="/#projects">Projects</a>
        </div>
        <div className="font-bold cursor-pointer hover:text-red-500">
          <a href="/#contact">Contact</a>
        </div>
      </div>

      <button className="flex relative h-6 w-6 cursor-pointer sm:hidden" onClick={toggle}>
        {
          !isOpen ? (
            <Image
              src="/menu-icon.svg"
              alt="menu-icon"
              fill
              className="absolute"
            />
          ) : (
            <Image
              src="/close-icon.svg"
              alt="close-icon"
              fill
              className="absolute"
            />
          )
        }
      </button>
    </div>
  )
}

export default Navbar