import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { current } from "./redux/actions/userActions";
import NotFound from "./Pages/404/404";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Boosting from "./Pages/Boosting/Boosting";
import Homepage from "./Pages/Homepage/Homepage";
import WorkWithus from "./Pages/Work with us/WorkWithUs";
import Faq from "./Pages/FAQ/FAQ";
import "./App.scss";

function App() {
  const [setup, setSetup] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    setSetup(true);
  }, [dispatch]);

  if (!setup) return null;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/boosting" element={<Boosting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/workwithus" element={<WorkWithus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
