import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="">
      <nav className="max-w-7xl mx-auto p-7 items-center flex justify-between ">
        {/* logo */}
        <a href="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        {/* desktop menu */}
        <ul className="flex items-center gap-x-15">
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
          <div className="p-1 border-2 border-orange-500 rounded-full flex items-center">
            <input className="flex-1 h-[5vh] px-3 focus:outline-none"
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
