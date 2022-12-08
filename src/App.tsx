import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import PlayerInfo from "./containers/PlayerInfo/PlayerInfo";
import EditForm from "./containers/EditForm/EditForm";
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>

          <Route path="/pages/:id" element={(
            <PlayerInfo/>
          )}/>

          <Route path="/pages/admin" element={(
            <EditForm/>
          )}/>

        </Routes>
      </main>
      <footer className="bg-success py-3">
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
