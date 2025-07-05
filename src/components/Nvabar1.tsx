import React from "react";

const Navbar1: React.FC = () => {
  return (
    <nav
      className="flex items-center w-full h-[48px] gap-2
                 pt-[6px] pb-[6px] pl-[10px] pr-0
                 border-b border-gray-200 bg-white text-sm opacity-100 "
    >
      {/* Left group */}
      <img
        src="/Toolbar.png"
        alt="Toolbar"
        className="h-[36px] w-[91px]"
        onClick={() => console.log("Toolbar clicked")}
      />
      <img
        src="/line.png"
        alt="Divider"
        className="h-[24px] w-px object-contain"
      />
      <img
        src="/hide.png"
        alt="Hide"
        className="h-[36px] w-[118px] object-contain"
        onClick={() => console.log("Hide clicked")}
      />
      <img
        src="/Sort.png"
        alt="Sort"
        className="h-[36px] w-[73px] object-contain"
        onClick={() => console.log("Sort clicked")}
      />
      <img
        src="/Filter.png"
        alt="Filter"
        className="h-[36px] w-[80px] object-contain"
        onClick={() => console.log("Filter clicked")}
      />
      <img
        src="/Cellview.png"
        alt="CellView"
        className="h-[36px] w-[105px] object-contain"
        onClick={() => console.log("Cellview clicked")}
      />

      {/* Right group, pushed over with ml-auto */}
      <div className="flex items-center gap-2 ml-auto">
        <img
          src="/Import.png"
          alt="Import"
          className="h-[36px] w-[90px] object-contain"
          onClick={() => console.log("Import clicked")}
        />
        <img
          src="/Export.png"
          alt="Export"
          className="h-[36px] w-[89px] object-contain"
          onClick={() => console.log("Export clicked")}
        />
        <img
          src="/Share.png"
          alt="Share"
          className="h-[36px] w-[89px] object-contain"
          onClick={() => console.log("Share clicked")}
        />
        <img
          src="/Newaction.png"
          alt="New Action"
          className="h-[36px] w-[150px] object-contain pr-3"
          onClick={() => console.log("New action clicked")}
        />
      </div>
    </nav>
  );
};

export default Navbar1;
