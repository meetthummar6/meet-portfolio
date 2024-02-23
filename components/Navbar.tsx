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
            className="absolute object-cover rounded-full ring ring-red-500"
          />
        </div>
        <div className="font-bold text-lg">
          Meet Thummar
        </div>
      </div>

      <div className="hidden sm:flex justify-end items-center gap-10 text-lg">
        <div className="font-bold">
          Home
        </div>
        <div className="font-bold">
          About
        </div>
        <div className="font-bold">
          Projects
        </div>
        <div className="font-bold">
          Contact
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