import React, { useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { dark } from "@mui/material/styles/createPalette";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-end">
      <button onClick={toggleDarkMode}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
};

export default Header;
