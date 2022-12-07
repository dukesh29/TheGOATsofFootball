import React from 'react';
import Navbar from "./components/Navbar/Navbar";

import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main className="flex-grow-1">

      </main>
      <footer className="bg-success py-3">
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
