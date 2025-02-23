import React from "react";
import HeroSection from "../components/Home/HeroSection";
import MarqueeText from "../components/common/MarqueText";
import { GiGraduateCap } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { sidebarLinks } from "../utils/common-utils";
import { GoTriangleRight } from "react-icons/go";
import News from "../components/Home/News";
import Grade from "../components/Home/Grade";
import Notification from "../components/common/Notification";

const Home = () => {
  return (
    <div className="w-full">
      {/* hero section */}
      <HeroSection />
      {/* marque tag */}
      <MarqueeText />

      <div className="grid grid-cols-5 text-sm max-w-6xl mx-auto ">
        <div className="flex items-center justify-center gap-2 outline-green-500 outline-1 py-2">
          <GiGraduateCap className="text-4xl" />
          <div>
            <p className="text-red-900 font-bold hover:text-red-400 cursor-pointer">
              {" "}
              Accreditation and Ranking
            </p>
            <p className="text-gray-600">Check the latest update</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 outline-green-500 outline-1 py-2">
          <GrTest className="text-4xl" />
          <div>
            <p className="text-red-900 font-bold hover:text-red-400 cursor-pointer">
              {" "}
              Research
            </p>
            <p className="text-gray-600">Academic research @ AMU</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 outline-green-500 outline-1 py-2">
          <LuNotebookPen className="text-4xl" />
          <div>
            <p className="text-red-900 font-bold hover:text-red-400 cursor-pointer">
              {" "}
              MoUs
            </p>
            <p className="text-gray-600">With Other Institutions</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 outline-green-500 outline-1 py-2">
          <GiGraduateCap className="text-4xl" />
          <div>
            <p className="text-red-900 font-bold hover:text-red-400 cursor-pointer">
              {" "}
              enders @ AMU
            </p>
            <p className="text-gray-600">Check the latest one</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 outline-green-500 outline-1 py-2">
          <GiGraduateCap className="text-4xl" />
          <div>
            <p className="text-red-900 font-bold hover:text-red-400 cursor-pointer">
              {" "}
              Placements
            </p>
            <p className="text-gray-600">Connect with best talent @ AMU</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 text-sm max-w-6xl mx-auto gap-4 text-sm">
        <div className="border-1 border-gray-500 px-2">
          <div className="font-bold text-lg my-2">
            Last Updated On: Feb 22, 2025
          </div>
          {sidebarLinks.map((category, index) => {
            const [categoryName, links] = Object.entries(category)[0]; // Extract category name and links
            return (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-[#7C2C27] mb-2">
                  {categoryName}
                </h3>
                {links.map((link, i) => (
                  <span
                    key={i}
                    className="text-gray-600 hover:text-red-400 cursor-pointer flex items-center"
                  >
                    <GoTriangleRight className="mr-2" />
                    {link}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
        <div  className="col-span-2 grid grid-cols-2 h-fit gap-2">
          <div>
            <h1 className="font-bold py-2 px-2">THE FOUNDER</h1>
            <img
              src="https://api.amu.ac.in/storage//images/editor/1607704591_ss2.jpg"
              alt="founder img"
            />
            <p className="mt-3 px-2">
              <b>Sir Syed Ahmad Khan</b>, one of the architects of modern India
              was born on October 17, 1817 in Delhi and started his career as a
              civil servant. The 1857 revolt was one of the turning points in
              Syed Ahmed's life.
            </p>
          </div>
          <div>
            <h1 className="font-bold p-2">VC Message</h1>
            <img
              src="https://api.amu.ac.in/storage//images/editor/1715491160_1715485760_vc1-removebg-preview.png"
              alt="founder img"
            />
            <p className="mt-3 px-2">
              <b>Dear Students, Faculty Members, and Aligs</b>, It is indeed a
              great honor for me to be appointed as Vice-Chancellor of this
              prestigious institution. Aligarh Muslim University has a glorious
              past and has been a pioneer in the context of education, social
              reform, and empowerment.....
            </p>
          </div>
          <div>
            <h1 className="font-bold p-2">WELCOME TO AMU</h1>
            <img
              src="https://api.amu.ac.in/storage//images/editor/1595420271_amu-img.png"
              alt=""
            />
            <p className="my-3">
              Aligarh Muslim University Accredited by NAAC in 'A+' grade having
              13 Faculties viz. Agricultural Sciences, Arts, Commerce,
              Engineering & Technology, Law etc., each comprising of several
              Departments of Studies.
            </p>
          </div>
          <div>
            <h1 className="p-2 font-bold">ACADEMICS</h1>
            <img
              src="https://api.amu.ac.in/storage//images/editor/1595420331_academic-img.png"
              alt=""
            />
            <p className="mt-3">
              Aligarh Muslim University (AMU) draws students from all corners of
              the country as well as foreign countries, especially Africa, West
              Asia and Southeast Asia.
            </p>
          </div>
          <News cols={2}/>
          <Grade/>
          <div className=" col-span-2 mb-2">
            <h1 className="text-center font-bold">AMU SHOWREEL</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/R5JtFKxencY?si=a_kE55JfVcrardxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div>
        <Notification/>
          <div className="my-4">
            <h1 className="text-lg font-bold text-[#DD7A78]">Sports and Games</h1>
            <img src="https://api.amu.ac.in/storage//images/editor/1634836106_riding_updated.jpg" alt="" />
            <p className="font-bold">Sports and Games have been very distinguished feature of AMU since inception</p>
            <button className="py-2 px-4 bg-[#6E1210] rounded-lg text-white font-bold mt-2">View All Highlights</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
