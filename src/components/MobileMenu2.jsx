import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

import { expertiseLinksList } from "../data/expertiseLinks";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathDetails = useLocation();
  let path = pathDetails?.pathname;
//   console.log("path", path);

  const activePageStyle = (pageName) => path === `/${pageName}`
    ? {
        boxShadow: "0 0 5px black inset",
        borderBottom: "1px solid black",
        }
    : {}

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="cursor-pointer p-2 hover:bg-gray-50 transition-all dura-100 rounded-md"
      >
        {!menuOpen ? (
          <TbMenu size={30} style={{ fontWeight: "thin" }} color="black" />
        ) : (
          <RxCross1 size={25} color="black" />
        )}
      </button>
      <div
        className={`h-[calc(100vh-65px)] max-h-svh overflow-y-hidden bg-gray-900 w-[100%] absolute left-0 top-[65px] ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="m-0 h-svh max-h-[calc(100vh-65px)] overflow-y-scroll px-5 pt-2 pb-0 w-full flex flex-col place-items-center justify-evenly align-middle gap-5 bg-[#00000099] text-white text-xl">
          <li
            style={activePageStyle('about')}
          >
            <Link
              to="/about"
              className="w-auto max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              About
            </Link>
          </li>
          <li
            style={activePageStyle('solutions')}>
            <Link
              to="/solutions"
              className="w-auto max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Solutions
            </Link>
          </li>
          <li>
            <div className="relative group inline-block">
              <button
                className="w-auto max-w-[50vw] min-w-max flex items-center px-[10vw] py-2 hover:scale-105 transition-all duration-120 text-center"
                style={{ placeItems: "center" }}
              >
                Expertise
                <MdKeyboardArrowDown size={20} />
              </button>

              <ul className="absolute left-0 hidden group-hover:block expertise-links-box bg-[#000] min-w-max max-w-[300px] shadow-md p-0 m-0 z-10">
                {Object.entries(expertiseLinksList).map(([label, path]) => (
                  <li key={path} className="w-full"
                    style={activePageStyle(label.split('-').join('').toLowerCase())}>
                    <Link
                      to={path}
                      className="w-auto max-w-[50vw] min-w-max text-lg flex px-[8vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 hover:text-white text-center"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li
            style={activePageStyle('insights')}>
            <Link
              to="/insights"
              className="w-auto max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Insights
            </Link>
          </li>
          <li
            style={activePageStyle('contact')}>
            <Link
              to="/contact"
              className="w-auto max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
