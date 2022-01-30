import React, { useState, useEffect, useRef, FC } from "react";
import { NavLink } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdAccountCircle,
  MdOutlineDashboardCustomize,
  MdOutlineChat,
} from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { BsDot, BsFillHddStackFill } from "react-icons/bs";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [isMenuExpand, setIsMenuExpand] = useState(false);

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      console.log("target", target);
      console.log("sidebar", sidebar.current);
      console.log("trigger", trigger.current);

      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static 
                    lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen
                    overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 
                    shrink-0 bg-white text-gray-500 p-4
                    transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`
                  }
      >
        {/* Sidebar header */}
        <div className="text-right h-20">
          <button
            ref={trigger}
            className=" text-gray-500 hover:text-gray-400 "
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <FiChevronRight className="inline-block  text-gray-300 -mr-2" />
            <FiChevronRight className="inline-block text-gray-500" />
          </button>
        </div>

        <div className="space-y-8 text-2xl font-medium">
          <div>
            <ul>
              <li className="mb-2">
                <NavLink to="/">
                  <MdSpaceDashboard className="inline-block pr-3 " size={30} />
                  <span className="inline-block">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/layout">
                  <BsFillHddStackFill
                    className="inline-block pr-3 "
                    size={30}
                  />
                  <span className="inline-block">Layout Builder</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase text-gray-300 font-medium text-2xl mt-7">
              Crafted
            </h4>
            <ul className="ml-2">
              <li className="mb-2">
                <NavLink to="/pages" className="block relative">
                  <RiPagesLine className="inline pr-3 " size={30} />
                  <span>Pages</span>
                  <FiChevronRight
                    className="inline text-gray-400 absolute right-0 top-1.5"
                    size={16}
                  />
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/accounts" className="block relative">
                  <MdAccountCircle className="inline pr-3 " size={30} />
                  <span> Accounts</span>
                  <FiChevronRight
                    className="inline text-gray-400 absolute right-0 top-1.5"
                    size={16}
                  />
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/errors" className="block relative">
                  <AiFillCloseCircle className="inline pr-3 " size={30} />
                  <span> Errors</span>
                  <FiChevronRight
                    className="inline text-gray-400 absolute right-0 top-1.5"
                    size={16}
                  />
                </NavLink>
              </li>
              <li>
                <h4
                  className="relative mb-2"
                  onClick={() => setIsMenuExpand(!isMenuExpand)}
                >
                  <NavLink to="/widgets">
                    <MdOutlineDashboardCustomize
                      className="inline pr-3 "
                      size={30}
                    />
                    <span> Widgets</span>
                    {isMenuExpand ? (
                      <FiChevronDown
                        className="inline text-gray-400 absolute right-0 top-1.5"
                        size={16}
                      />
                    ) : (
                      <FiChevronRight
                        className="inline text-gray-400 absolute right-0 top-1.5"
                        size={16}
                      />
                    )}
                  </NavLink>
                </h4>
                {isMenuExpand && (
                  <ul className="">
                    <li className="mb-2">
                      <NavLink to="/widgets/lists" className="block relative">
                        <BsDot className="inline " size={24} />
                        <span> Lists</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink
                        to="/widgets/statistics"
                        className="block relative"
                      >
                        <BsDot className="inline " size={24} />
                        <span> Statistics</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink to="/widgets/charts" className="block relative">
                        <BsDot className="inline " size={24} />
                        <span> Charts</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink to="/widgets/mixed" className="block relative">
                        <BsDot className="inline " size={24} />
                        <span> Mixed</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink to="/widgets/tables" className="block relative">
                        <BsDot className="inline " size={24} />
                        <span> Tables</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/widgets/feeds" className="block relative">
                        <BsDot className="inline " size={24} />
                        <span> Feeds</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase text-gray-300 font-medium text-2xl mt-6">
              Apps
            </h4>
            <ul className="ml-2">
              <li>
                <NavLink to="/chat" className="block relative">
                  <MdOutlineChat className="inline pr-3" size={30} />
                  <span> Chat</span>
                  <FiChevronRight
                    className="inline text-gray-400 absolute right-0 top-1.5"
                    size={16}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
