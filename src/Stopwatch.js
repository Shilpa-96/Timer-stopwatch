import React, { useState, useEffect } from "react";

const Stopwatch = ({ location }) => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [status, setStatus] = useState(false);
  const [buttontext, setButtontext] = useState("Start");
  const [intervalid, setIntervalid] = useState();
  const path = location.pathname;
  var second = 0,
    sec;

  const stoprender = () => {
    if (path !== "/stopwatch") {
      clearInterval(intervalid);
    }
  };

  useEffect(() => {
    stoprender();
  }, [time]);

  const handleClick = () => {
    setStatus(true);
    if (buttontext === "Start") {
      setIntervalid(setInterval(run, 1000));
      second = time.h * 3600 + time.m * 60 + time.s;
      setButtontext("Pause");
    } else {
      clearInterval(intervalid);
      setButtontext("Start");
    }
  };

  const handleRestart = () => {
    clearInterval(intervalid);
    setTime({ h: 0, m: 0, s: 0 });
    setStatus(false);
    setButtontext("Start");
  };

  var newm = 0,
    newh = 0,
    news = 0;

  const run = () => {
    second++;
    sec = second;
    newh = Math.floor(sec / 3600);
    sec = sec % 3600;
    newm = Math.floor(sec / 60);
    sec = sec % 60;
    news = sec;
    setTime({ h: newh, m: newm, s: news });
  };

  return (
    <>
      <div className="container-stopwatch">
        <h1 className="title">Stopwatch</h1>
        <div className="timer">
          <div className="hour">{time.h < 10 ? "0" + time.h : time.h}</div>:
          <div className="minute">{time.m < 10 ? "0" + time.m : time.m}</div>:
          <div className="sec">{time.s < 10 ? "0" + time.s : time.s}</div>
        </div>
        <button type="button" className="start-pause" onClick={handleClick}>
          {buttontext}
        </button>
        {status && (
          <button type="button" className="restart" onClick={handleRestart}>
            Reastart
          </button>
        )}
      </div>
    </>
  );
};

export default Stopwatch;
