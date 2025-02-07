import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const WelcomePage = () => {
  return (
    <div className="p-2">
      <div className="h-full border flex flex-col gap-2">
        <div className="border font-bold text-9xl"> SOKUDO </div>
        <div className="border w-1/2 text-2xl font-light">
          FIND YOUR DREAM INTERNSHIP 50% FASTER!
        </div>
        <button className="border w-min p-1 rounded-md cursor-pointer">
          <a href = "/home">
          START{" "}

          </a>
          {" "}
        
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
