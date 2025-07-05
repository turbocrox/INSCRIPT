import React from "react";
import logo  from "../assets/logo.png";
import shape from "../assets/Shape.png";

const Navbar: React.FC = () => {
  const log = (msg: string) => () => console.log(msg);

  return (
    <nav
      /* full‑width bar, items spaced left↔right */
      className="flex items-center justify-between h-14 px-4
                 border-b border-gray-200 bg-white text-sm font-poppins"
    >
      {/* ─────────── left side ─────────── */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Inscript Logo" className="h-4 w-5" onClick={log('logo clicked')} />

        <span className="ml-2 text-gray-400" onClick={log('Workspace clicked')}>
          Workspace
        </span>
        <span className="mx-1 text-gray-300">{'>'}</span>

        <span className="text-gray-400 font-medium" onClick={log('Folder 2 clicked')}>
          Folder 2
        </span>
        <span className="mx-1 text-gray-300">{'>'}</span>

        <span className="text-black" onClick={log('Spreadsheet 3 clicked')}>
          Spreadsheet 3
        </span>

        <img
          src={shape}
          alt="More"
          className="h-1 w-4 ml-1"
          onClick={log('More icon clicked')}
        />
      </div>

      {/* ─────────── right side ─────────── */}
      <div className="flex items-center gap-2">
        <img src="/Search.png"   alt="search"        className="h-10 w-[165px]" onClick={log('search bar clicked')} />
        <img src="/bell.png"     alt="notifications" className="h-10 w-10"      onClick={log('bell clicked')} />
        <img src="/Profile.png"  alt="profile"       className="h-10 w-[112px] rounded-full" onClick={log('profile clicked')} />
      </div>
    </nav>
  );
};

export default Navbar;
