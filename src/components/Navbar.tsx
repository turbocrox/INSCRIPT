import React from "react";
import logo from "../assets/logo.png";
import shape from "../assets/Shape.png";

const Navbar: React.FC = () => (
  <nav className="flex items-center gap-2 p-4 border-b border-gray-200 bg-white text-sm font-poppins pb-4.5">
    <img src={logo} alt="Inscript Logo" className="h-4 w-5" />
    <span className="ml-2 text-gray-400">Workspace</span>
  <span className="mx-1 text-gray-300 text-sm leading-none">{'>'}</span>

    <span className="text-gray-400 font-medium">Folder 2</span>
   <span className="mx-1 text-gray-300 text-sm leading-none">{'>'}</span>


    <span className="text-gray-900 font-semibold">Spreadsheet 3</span>

    <img
      src={shape}
      alt="More options"
      className="h-4 w-4 object-contain ml-1"
    />
  </nav>
);

export default Navbar;
