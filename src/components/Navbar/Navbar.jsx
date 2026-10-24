import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <nav className="max-w-7xl mx-auto p-7 items-center flex justify-between md:h-[14vh h-[12vh]">
        {/* logo */}
        <a href="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        {/* desktop menu */}
        <ul className=" md:flex items-center gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider  text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        {/* Nav Action */}
        <div className="flex items-center gap-x-2">
          {/* input field */}
          <div className=" md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              type="text"
              name="text"
              id="text"
              placeholder="Search...."
              autoComplete="off"
            />
            <button className="bg-linear-to-b from-red-600 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl">
              <IoSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          {/* hamburger */}
          <a href="#" className="text-zinc-800 text-2xl md:hidden">
            <TbMenu2 />
          </a>
          {/* mobile menu */}
           <ul className="flex items-center gap-x-15 md:hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider  text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
