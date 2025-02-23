import React from "react";
import { Link } from "react-router-dom";
import { bottomNavBarLinks, topNavbarLinks } from "../../utils/common-utils.js";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import logo from "../../assets/image.png";
import logo2 from "../../assets/image copy.png";

const Navbar = () => {
  return (
    <div className="w-full text-white text-sm">
      <div className=" w-full">
        <div className="bg-[#D45552] w-full flex  items-center justify-center ">
          <div className="w-full max-w-6xl mx-auto flex gap-2 flex-col justify-center  ">
            <div className="flex items-center " >
              {topNavbarLinks.map((link, index) => (
                <Link to={`/${link}`} className="  text-center  hover:bg-[#6e1210]  py-1 px-2 rounded-md ">
                  {link}
                </Link>
              ))}
            </div>
            <div className="flex item-center my-">
              <Link to="sidemap" className="mx-2 px-1">
                Site Map
              </Link>{" "}
              |
              <Link to="A" className="mx-2 px-1">
                A
              </Link>{" "}
              |
              <Link to="A+" className="mx-2 px-1">
                A+
              </Link>{" "}
              |
              <Link to="English" className="mx-2 px-1">
                English
              </Link>{" "}
              |
              <Link to="Login" className="mx-2 px-1 flex item-center ">
                Login <FaCaretDown className="my-auto" />
              </Link>{" "}
              |
            </div>
          </div>
        </div>
        <div className="flex justify-between  items-center gap-2 py-2 max-w-6xl mx-auto">
          <img src={logo} alt="" />
          <img src={logo2} alt="" />
          <div className="flex gap-4">
            <input type="search" name="" id="" className="border-1 rounded-lg px-2 py-2 outline-none text-black" placeholder="Enhanced By google" />
            <button className="bg-[#D45552] rounded-full p-2">
              <FaSearch className="" />
            </button>
          </div>
        </div>
        <div className=" bg-[#0A1A32] flex gap-4  h-10  ">
        {bottomNavBarLinks.map((category, index) => (
          <div key={index} className="flex justify-evenly w-full max-w-6xl mx-auto">
            {Object.entries(category).map(([section, links]) => (
                <button className=" py-2 w-fit px-2 hover:bg-[#D45552] flex items-center justify-center cursor-pointer">{section}{section.length>0&&(<FaCaretDown/>)}</button>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
