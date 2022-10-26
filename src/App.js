import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/404/404";
//import Login from './Pages/Login/Login';
import Boosting from "./Pages/Boosting/Boosting";
import Homepage from "./Pages/Homepage/Homepage";
import Faq from "./Pages/FAQ/FAQ";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/boosting" element={<Boosting />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
