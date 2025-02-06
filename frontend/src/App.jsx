import { useState } from "react";

function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] p-2 gap-2 ">
      <header className="border">Header</header>
      <main className="border">Main</main>
      <footer className="border">Footer</footer>
    </div>
  );
}

export default App;
