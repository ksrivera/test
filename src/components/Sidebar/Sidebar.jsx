import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 h-screen px-4">
      <div className="px-4 py-8 flex items-center justify-center border-b border-gray-300/30">
        <h1 className="text-white text-2xl leading-6 font-extrabold cursor-pointer">
          Admin Panel
        </h1>
      </div>

      <div className="flex items-center gap-4 py-5 border-b border-gray-300/30">
        <FaTachometerAlt color="white" />
        <p className="text-base leading-6 font-bold text-white">Dashboard</p>
      </div>

      <div className="pt-4 border-b border-gray-300/30">
        <p className="text-xs font-extrabold leading-4 text-white opacity-40">
          INTERFACE
        </p>

        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaRegSun className="text-white" />
            <p className="text-base leading-6 font-normal text-white">
              Components
            </p>
          </div>
          <FaChevronRight className="text-white" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <FaWrench className="text-white" />
          <p className="text-base leading-6 font-normal text-white">
            Utilities
          </p>
        </div>
        <FaChevronRight className="text-white" />
      </div>

      <div className="pt-4 border-b border-gray-300/30">
        <p className="text-xs font-extrabold leading-4 text-white opacity-40">
          ADDONS
        </p>
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaStickyNote className="text-white" />
            <p className="text-base leading-6 font-normal text-white">Pages</p>
          </div>
          <FaChevronRight className="text-white" />
        </div>
        <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
          <div className="flex items-center gap-4">
            <FaRegChartBar className="text-white" />
            <p className="text-base leading-6 font-normal text-white">Charts</p>
          </div>
          <FaChevronRight className="text-white" />
        </div>
        <div className="flex items-center gap-4 py-4">
          <FaRegCalendarAlt className="text-white" />
          <p className="text-base leading-6 font-normal text-white">Tables</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-4">
        <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
          <FaChevronLeft className="text-white" />
        </div>
      </div>

      <div className="bg-blue-700 mt-4 flex items-center justify-center flex-col py-4 px-3 gap-4 rounded">
        <FaBolt className="text-white" />
        <p className="text-xs leading-5 font-normal text-white opacity-40 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ex.
        </p>
        <button className="bg-teal-600 text-white flex items-center justify-center h-7 w-full rounded-sm text-base leading-6 font-normal">
          Subscribe to my YT!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
