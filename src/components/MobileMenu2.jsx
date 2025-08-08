import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TbMenu } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { expertisesList } from "../data/expertisesList";

const MobileMenu = (props) => {
  const { currentPage } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const doNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const activePageStyle = (pageName) =>
    currentPage === `${pageName}`
      ? {
          borderBottom: "1.5px solid #ccc",
        }
      : {};

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
        className={`h-[calc(100vh-60px)] max-h-svh overflow-y-hidden bg-gray-900 w-[100%] absolute left-0 top-[65px] ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mobile-menu-ul m-0 h-svh max-h-[calc(100vh-65px)] overflow-y-scroll px-5 pt-2 pb-0 w-full flex flex-col place-items-center justify-evenly align-middle gap-5 bg-[#00000099] text-white text-xl">
          <li>
            <button
              type="button"
              onClick={() => doNavigate("about")}
              style={activePageStyle("about")}
              className="w-full max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => doNavigate("solutions")}
              style={activePageStyle("solutions")}
              className="w-full max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Solutions
            </button>
          </li>
          <li>
            <div className="relative group inline-block">
              <button
                className="w-full max-w-[50vw] min-w-max flex items-center px-[10vw] py-2 hover:scale-105 transition-all duration-120 text-center"
                style={{ placeItems: "center" }}
              >
                Expertise
                <MdKeyboardArrowDown size={20} />
              </button>

              <ul className="absolute left-0 hidden group-hover:block expertise-links-box bg-[#000] min-w-max max-w-[300px] shadow-md p-0 m-0 z-10">
                {expertisesList.map((each) => (
                  <li key={each.label} className="w-full">
                    <button
                      type="button"
                      onClick={() => doNavigate(each.url)}
                      style={activePageStyle(
                        each.label.split("-").join("").toLowerCase()
                      )}
                      className="w-full max-w-[50vw] min-w-max text-lg flex px-[8vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 hover:text-white text-center"
                    >
                      {each.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <button
              type="button"
              onClick={() => doNavigate("insights")}
              style={activePageStyle("insights")}
              className="w-full max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Insights
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => doNavigate("contact")}
              style={activePageStyle("contact")}
              className="w-full max-w-[50vw] min-w-max flex px-[10vw] py-2 hover:scale-105 transition-all duration-120 hover:bg-gray-900 hover:skew-2 text-center"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
