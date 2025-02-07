import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import WelcomePage from "./WelcomePage";

const MainPage = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] p-2 gap-2 ">
      <header className="border">
        <Header />
      </header>
      <main className="border">
        <WelcomePage />
      </main>
      <footer className="border">
        <Footer />
      </footer>
    </div>
  );
};

export default MainPage;
