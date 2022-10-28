import React from "react";
import Logo from "../../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handlerClick = (e) => setNav((prev) => !prev);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <a href="">
          <img src={Logo} alt="" style={{ width: "50px" }} />
        </a>
      </div>

      {/* menu bar */}
      <ul className="hidden md:flex">
        <li className="hover:border-b-2 hover:border-cyan-500">
          <a href=""> Home</a>
        </li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger menu */}
      <div onClick={handlerClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Work</li>
        <li className="py-6 text-4xl ">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Form <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
