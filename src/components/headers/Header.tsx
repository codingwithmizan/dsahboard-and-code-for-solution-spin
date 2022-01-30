import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize, MdOutlineChat } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineBars } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { BsDot, BsSearch } from "react-icons/bs";
import Avatar from "react-avatar";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const Header: FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className=" text-gray-500 bg-gray-100  text-2xl font-medium  flex justify-between px-12 pt-6 pb-8 sticky top-0">
      <div className="flex space-x-10">
        <button
          className="text-gray-500 hover:text-gray-600 lg:hidden"
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AiOutlineBars />
        </button>
        <div className="hidden xl:block">
          <ul className="flex space-x-4 ">
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout Builder</NavLink>
            </li>
            <li>
              <button>Crafted</button>
            </li>
            <li>
              <button>Apps</button>
            </li>
            <li>
              <button>Mega menu</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex space-x-8">
          <li className='hidden md:block'>
            <button>
              <BsSearch size={20} />
            </button>
          </li>
          <li className='hidden lg:block'>
            <NavLink to="/widgets/charts">
              <AiOutlineBarChart size={24} />
            </NavLink>
          </li>
          <li className='hidden lg:block'>
            <NavLink to="/pages">
              <RiPagesLine size={24} />
            </NavLink>
          </li>
          <li className="relative hidden lg:block ">
            <NavLink to="/chat">
              <BsDot className="absolute -top-5 text-green-500 " size={24} />
              <MdOutlineChat size={24} />
            </NavLink>
          </li>
          <li className='hidden lg:block'>
            <NavLink to="/widgets">
              <MdOutlineDashboardCustomize />
            </NavLink>
          </li>
          <li className='hidden sm:block'>
            <button className="relative -top-1 ">
              <Avatar
                size="30"
                round="5px"
                name="Wim Mostmans"
                src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
