import { useState } from "react";
import "./Clock.scss";

export default function Clock() {
  let initTime = new Date().toLocaleTimeString();
  let day = new Date().toLocaleDateString();

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const [time, setTime] = useState(initTime);
  setInterval(updateTime, 1000);

  return (
    <span className="clock">
      {day},{time}
    </span>
  );
}
