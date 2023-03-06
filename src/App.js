import React from "react";
import "./style/App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
