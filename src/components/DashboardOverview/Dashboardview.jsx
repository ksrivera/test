import React from "react";
import { FaSearch, FaRegBell, FaEnvelope } from "react-icons/fa";
//import profile from "../assets/profile.png";

const DashboardView = () => {
  return (
    <div className="flex items-center justify-between h-20 shadow-lg px-6">
      {/* Search Bar */}
      <div className="flex items-center rounded-md">
        <input
          type="text"
          className="bg-[#F8F9FC] h-10 outline-none pl-3 w-96 rounded-md placeholder:text-sm leading-5 font-normal"
          placeholder="Search for..."
        />
        <div className="bg-[#4E73DF] h-10 px-4 flex items-center justify-center cursor-pointer rounded-tr-md rounded-br-md">
          <FaSearch className="text-white" />
        </div>
      </div>

      {/* Notifications and email and Picture */}
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-6 border-r-2 pr-6">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-4 relative">
          <p>Ryan Azur</p>
          <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
            <img
              src=''
              alt=""
              className="rounded-full h-11 w-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
