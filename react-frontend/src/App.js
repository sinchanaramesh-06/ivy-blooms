import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Ivy Blooms</h1>
      </header>

      <section className="hero">
        <h2>Bring Nature Indoors</h2>
        <p>Fresh indoor plants for your home</p>
        <button onClick={() => alert("Shop coming soon!")}>
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default App;