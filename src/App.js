import React from "react";
import "./style/App.css";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
