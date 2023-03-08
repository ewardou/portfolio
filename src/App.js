import React from "react";
import "./style/App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <main>
        <div>
          <About />
        </div>
        <div className="separator-1"></div>
        <div>
          <Projects />
        </div>
        <div className="separator-2"></div>
        <div>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
