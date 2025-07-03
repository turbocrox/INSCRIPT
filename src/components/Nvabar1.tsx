import React from "react";

const Navbar1: React.FC = () => {
  return (
    <nav
      className="relative flex items-center  w-[1440px] h-[48px] px-2
                 border-b border-gray-200 bg-white text-sm"
    >
      <div className="flex items-center gap-2">
        <img
          src="/Toolbar.png"
          alt="Inscript Logo"
          className="h-[36px] w-[91px]"
          onClick={() => console.log(" Toolbar clicked")}
        />
        <img
          src="/line.png"
          alt="divider"
          className="h-[24px] w-[1px] object-contain"
          
        />
        <img
        src="/hide.png"
        alt="hide"
        className="h-[36px] w-[118px] object-contain"
         onClick={() => console.log(" hide field clicked")}
        />
        <img
        src="/Sort.png"
        alt="sort"
        className="h-[36px] w-[73px] object-contain"
         onClick={() => console.log(" sort  clicked")}
        />
        <img
        src="/Filter.png"
        alt="Filter"
        className="h-[36px] w-[80px] object-contain"
         onClick={() => console.log(" filter is  clicked")}
        />
        <img
        src="/Cellview.png"
        alt="CellView"
        className="h-[36px] w-[105px] object-contain"
         onClick={() => console.log(" Cellview is clicked")}
        />
        <img
          src="/Import.png"
          alt="import"
          className="h-[36px] w-[90px] object-contain ml-[450px]"
          onClick={() => console.log("import  options clicked")}
        />
        <img
          src="/Export.png"
          alt="export"
          className="h-[36px] w-[89px] object-contain"
          onClick={() => console.log("export options clicked")}
        />
        <img
            src="/Share.png" 
            alt="Share"
            className="h-[36px] w-[89px] object-contain"
            onClick={() => console.log(" share clicked")}
        />
         <img
            src="/Newaction.png" 
            alt="Share"
            className="h-[36px] w-[150px] object-contain"
            onClick={() => console.log(" New action  is clicked")}
        />
   
      </div>
    </nav>
  );
};

export default Navbar1;
