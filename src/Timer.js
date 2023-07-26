import React, { useEffect, useState } from "react";

const Timer = ({ location }) => {
  // const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [buttontext, setButtontext] = useState("Start");
  const [status, setStatus] = useState(false);
  const [timeup, setTimeup] = useState(false);
  const [intervalid, setIntervalid] = useState();
  var second, sec;
  const path = location.pathname;

  const stoprender = () => {
    if (path !== "/timer") {
      clearInterval(intervalid);
    }
  };

  useEffect(() => {
    stoprender();
  }, [h, m, s]);

  const handleClick = () => {
    setTimeup(false);
    console.log("click");
    setStatus(true);
    if (buttontext === "Start") {
      setButtontext("Pause");
      second = h * 3600 + m * 60 + s;
      setIntervalid(setInterval(run, 1000));
    } else {
      setButtontext("Start");
      clearInterval(intervalid);
    }
  };

  const handleRestart = () => {
    clearInterval(intervalid);
    setH(0);
    setM(0);
    setS(0);
    setStatus(false);
    setTimeup(false);
    setButtontext("Start");
  };
  var newh = 0,
    newm = 0,
    news = 0;

  const run = () => {
    second--;
    sec = second;
    if (sec > -1) {
      newh = Math.floor(sec / 3600);
      sec = sec % 3600;
      newm = Math.floor(sec / 60);
      sec = sec % 60;
      news = sec;
      setH(newh);
      setM(newm);
      setS(news);
    } else {
      clearInterval(intervalid);
      setTimeup(true);
      setButtontext("Start");
    }
  };

  return (
    <>
      <div className="container-timer">
        <h1>Timer</h1>
        <div className="box-timer">
          <input
            type="number"
            value={h < 10 ? "0" + h : h}
            min="0"
            onChange={(e) => setH(e.target.value)}
          ></input>
          <span>:</span>
          <input
            type="number"
            value={m < 10 ? "0" + m : m}
            min="0"
            max="59"
            onChange={(e) => {
              setM(e.target.value);
            }}
          ></input>
          <span>:</span>
          <input
            type="number"
            value={s < 10 ? "0" + s : s}
            min="0"
            max="59"
            onChange={(e) => {
              setS(e.target.value);
            }}
          ></input>
        </div>
        <button
          type="button"
          disabled={h === 0 && m === 0 && s === 0}
          onClick={handleClick}
        >
          {buttontext}
        </button>
        <button type="button" disabled={!status} onClick={handleRestart}>
          Restart
        </button>
        <div>{timeup && <h1>Your time is up</h1>}</div>
      </div>
    </>
  );
};

export default Timer;
