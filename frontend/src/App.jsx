import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
