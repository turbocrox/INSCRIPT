import React from "react";
import logo  from "../assets/logo.png";
import shape from "../assets/Shape.png";

const Navbar: React.FC = () => {
  // click helper
  const log = (msg: string) => () => console.log(msg);

  return (
    <nav
      className="relative flex items-center gap-2 w-[1440px] h-[56px] px-4
                 border-b border-gray-200 bg-white text-sm font-poppins"
    >
      <img src={logo} alt="Inscript Logo" className="h-4 w-5" onClick={log('logo clicked')} />

      <span className="ml-2 h-[20] w-[76] text-gray-400" onClick={log('Workspace clicked')}>
        Workspace
      </span>
      <span className="mx-1 text-gray-300 leading-none">{'>'}</span>

      <span className="text-gray-400 h-[20] w-[56] font-medium" onClick={log('Folder 2 clicked')}>
        Folder 2
      </span>
      <span className="mx-1 text-gray-300 leading-none">{'>'}</span>

      <span className="text-black h-[24] w-[113]" onClick={log('Spreadsheet 3 clicked')}>
        Spreadsheet 3
      </span>

      <img
        src={shape}
        alt="More"
        className="h-1 w-4 ml-1"
        onClick={log('More icon clicked')}
      />

      {/* right‑hand block */}
      <div className="absolute inset-y-0 right-4 flex items-center gap-2">
        <img
          src="/Search.png"
          alt="search"
          className="h-[40px] w-[165px]"
          onClick={log('search bar clicked')}
        />
        <img
          src="/bell.png"
          alt="notifications"
          className="h-[40px] w-[40px]"
          onClick={log('bell clicked')}
        />
        <img
          src="/Profile.png"
          alt="profile"
          className="h-[40px] w-[112px] rounded-full mr-3"
          onClick={log('profile clicked')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
