import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import MobileMenu from "./MobileMenu2";
import { expertisesList } from "../data/expertisesList";
import pagesLinks from "../data/pagesLinks";

const Header = () => {
  const [currentPage, SetCurrentPage] = useState("");
  const loc = useLocation();

  useEffect(() => {
    const pathId = loc.pathname?.split("/").pop();
    // console.log(pathId)
    SetCurrentPage(pathId);
  }, [loc]);

  const activePageStyle = (pageName) =>
    currentPage === `${pageName}` ? { borderBottom: "1.5px solid black" } : {};

  return (
    <header className="w-full h-[65px] px-8 min-xl:px-[10vw] py-2 flex justify-between align-middle bg-white relative top-0 z-3">
      <Link to={pagesLinks.home}>
        <img
          src="/logos/anvi-logo.png"
          alt="anvi logo"
          className="w-full min-w-[100px] shrink-0 max-w-[150px] object-cover object-center"
        />
      </Link>
      <nav className="flex flex-row justify-center align-middle gap-2">
        {/* Desktop Menus */}
        <ul className="m-0 p-2 flex justify-center align-middle gap-5 max-md:hidden">
          <li
            className="flex self-center hover:scale-105 transition-all duration-100 text-md"
            style={activePageStyle(pagesLinks.about)}
          >
            <Link to={pagesLinks.about}>About</Link>
          </li>
          <li
            className="flex self-center hover:scale-105 transition-all duration-100 text-md"
            style={activePageStyle(pagesLinks.solutions)}
          >
            <Link to={pagesLinks.solutions}>Solutions</Link>
          </li>
          <li className="flex self-center transition-all duration-100 text-md">
            <div className="group inline-block">
              <span className="flex justify-center align-middle p-2 cursor-pointer">
                Expertise
                <MdKeyboardArrowDown size={20} />
              </span>

              <ul className="absolute -z-1 right-0 top-[55px] w-[500px] place-items-center h-screen grid-cols-3 gap-2 grid-rows-3 grid -translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 expertise-links-box bg-[#fffffd] min-w-max p-0 px-2 pb-[50vh] m-0 transition-all duration-700">
                {expertisesList.map((each) => (
                  <li key={each.label} className="w-full h-auto grid-rows-1">
                    <a
                      href={each.url}
                      target="_self"
                      className="w-auto min-w-max text-sm flex px-[2vw] py-2 hover:scale-105 transition-all duration-120 hover:text-black hover:underline text-center"
                    >
                      {each.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li
            className="flex self-center hover:scale-105 transition-all duration-100 text-md"
            style={activePageStyle("insights")}
          >
            <Link to={pagesLinks.insights}>Insights</Link>
          </li>
          <li
            className="flex self-center hover:scale-105 transition-all duration-100 text-md"
            style={activePageStyle("contact")}
          >
            <Link to={pagesLinks.contact}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menus */}
        <div className="self-center min-md:hidden">
          <MobileMenu currentPage={currentPage} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
