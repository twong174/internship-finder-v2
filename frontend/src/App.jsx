import { useState } from "react";

import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import WelcomePage from "./components/pages/WelcomePage";

function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] p-2 gap-2 ">
      <header className="">
        <Header />
      </header>
      <main className="">
        <WelcomePage />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
