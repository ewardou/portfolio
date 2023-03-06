import React from "react";
import "./style/App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
