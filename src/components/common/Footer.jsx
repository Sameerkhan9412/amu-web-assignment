import React from "react";
import { footerLinks } from "../../utils/common-utils";
import { MdLocationPin } from "react-icons/md";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-[#D45552] mt-2 ">
      <div className="grid grid-cols-5 gap-3 max-w-6xl mx-auto">
        <div className=" col-span-4">
          <h1 className="font-bold underline text-lg my-2">Quick Links</h1>
          <div className="grid grid-cols-4 gap-2 text-sm">
            {footerLinks.map((link, index) => (
              <a href="#" className="hover:text-[#D45552]">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold underline text-lg my-2 w-full">
            Contact Us
          </h1>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex items-center">
              <MdLocationPin className="mr-2 text-4xl" />
              <a href="" className="hover:text-[#D45552]">
                Aligarh Muslim University Aligarh, Uttar Pradesh INDIA - 202002
              </a>
            </span>
            <span className="flex items-center">
              <FaPhone className="mr-2 rotate-90" />
              <a href="" className="hover:text-[#D45552]">
                +91-571-2700920
              </a>
            </span>
            <span className="flex items-center">
              <IoMailOpenSharp className="mr-2 text-lg" />
              <a href="" className="hover:text-[#D45552]">
                {" "}
                Email: amupro@amu.ac.in
              </a>
            </span>
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-between w-full col-span-5">
          <span>
            Copyright &copy; 2025 Aligarh Muslim University Aligarh, India.
          </span>
          <span>Design & Developed by:AHA Technology</span>
          <span>Feedback | Disclaimer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
