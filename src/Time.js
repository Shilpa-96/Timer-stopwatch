import React, { useEffect, useState } from "react";
import moment from "moment";

const Time = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    document.body.classList.add("bg");
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("bg");
    };
  }, []);
  return (
    <>
      <h1 className="time-tile">Date and Time</h1>
      <div className="time">
        <div>
          Date-
          <span>{time.format("L")}</span>
        </div>
        <div>
          Time-
          <span>{time.format("LTS")}</span>
        </div>
      </div>
    </>
  );
};

export default Time;
