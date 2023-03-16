import React, { useEffect, useState } from "react";
import SmallCardNumber from "./smallCardNumber.jsx";
import SmallCardWatch from "./smallCardWatch.jsx";

const SecondsCounter = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    let firstTime = new Date();
    const myinterval = setInterval(() => {
      let timeTemp = new Date();
      let dif = Math.floor(
        timeTemp.getTime() / 1000 - firstTime.getTime() / 1000
      );

      setTime(dif);
    }, 1000);
    setIntervalId(myinterval);
  }, []);

  let arraySplittedTime = String(time).split("").reverse();
  let fullArrayCards = Array.apply(null, Array(6))
    .map((x, i) => {
      if (i < arraySplittedTime.length) {
        return <SmallCardNumber number={arraySplittedTime[i]} key={i} />;
      }
      return <SmallCardNumber number={0} key={i} />;
    })
    .reverse();

  const stopTrg = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const resume = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    let firstTimeResume = new Date();
    const myinterval = setInterval(() => {
      let timeTemp = new Date();
      let dif = Math.floor(
        timeTemp.getTime() / 1000 - firstTimeResume.getTime() / 1000
      );

      setTime(time + dif);
    }, 1000);
    setIntervalId(myinterval);
  };
  const restart = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    let firstTimeResume = new Date();
    const myinterval = setInterval(() => {
      let timeTemp = new Date();
      let dif = Math.floor(
        timeTemp.getTime() / 1000 - firstTimeResume.getTime() / 1000
      );

      setTime(dif);
    }, 1000);
    setIntervalId(myinterval);
  };

  return (
    <div className="container-fluid">
      <div className="row  bg-black">
        <div className="col-12 d-flex justify-content-center">
          <SmallCardWatch />
          {fullArrayCards}
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 pt-2  bg-white  d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary text-black w-100"
            onClick={stopTrg}
          >
            Stop
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 pt-2  bg-white  d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary text-black w-100 "
            onClick={resume}
          >
            Resume
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4 pt-2  bg-white  d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary text-black w-100"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
