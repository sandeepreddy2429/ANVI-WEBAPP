import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu2";
import { expertiseLinksList } from "../data/expertiseLinks";

const Header = () => (
  <header className="w-full max-h-[120px] px-8 py-2 flex justify-between align-middle bg-white">
    <Link to="/">
      <img
        src="/logos/anvi-logo.png"
        alt="anvi logo"
        className="w-full min-w-[100px] shrink-0 max-w-[150px] object-cover object-center"
      />
    </Link>
    <nav className="flex flex-row justify-center align-middle gap-2">
      {/* Desktop Menus */}
      <ul className="m-0 p-2 flex justify-center align-middle gap-5 max-md:hidden">
        <li className="flex self-center hover:scale-105 transition-all duration-100 text-md">
          <Link to="/about">About</Link>
        </li>
        <li className="flex self-center hover:scale-105 transition-all duration-100 text-md">
          <Link to="/solutions">Solutions</Link>
        </li>
        <li className="flex self-center transition-all duration-100 text-md">
          <div className="relative group inline-block">
            <span className="flex justify-center align-middle">
              Expertise
              <MdKeyboardArrowDown size={20} />
            </span>

            <ul className="absolute left-[-100%] top-[25px] grid-cols-2 hidden col-aut group-hover:grid expertise-links-box bg-[#fff] min-w-max shadow-md p-0 m-0 z-10">
              {Object.entries(expertiseLinksList).map(([label, path]) => (
                <li key={path} className="w-full">
                  <Link
                    to={path}
                    className="w-auto min-w-max text-sm flex px-[2vw] py-2 hover:scale-105 transition-all duration-120 hover:text-black text-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="flex self-center hover:scale-105 transition-all duration-100 text-md">
          <Link to="/insights">Insights</Link>
        </li>
        <li className="flex self-center hover:scale-105 transition-all duration-100 text-md">
          <Link>Contact</Link>
        </li>
      </ul>

      {/* Mobile Menus */}
      <div className="self-center min-md:hidden">
        <MobileMenu />
      </div>
    </nav>
  </header>
);

export default Header;
