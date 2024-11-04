import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import SnowFall from "./components/SnowFall";
import Settings from "./pages/Settings";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <SnowFall />
          <Clock />
          <Routes>
            <Route path="/settings" element={<Settings />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
