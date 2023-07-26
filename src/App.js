import React from "react";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import Navbar from "./Navbar";
import Time from "./Time";
import { Route, Routes, useLocation } from "react-router-dom";

import "./nav.css";

const App = () => {
  const l = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Time key="time" location={l} />}></Route>
        <Route
          path="/timer"
          element={<Timer location={l} key="timer" />}
        ></Route>
        <Route
          path="/stopwatch"
          element={<Stopwatch location={l} key="stopwatch" />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
