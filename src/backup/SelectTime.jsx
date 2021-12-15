import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./SelectTime.css";

const SelectTime = () => {
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("12:00");
  const [totalTime, setTotalTime] = useState(0);
  return (
    <>
      <div className="SelectTime_box">
        <div className="select_bar">select_bar</div>
        <div className="selected_time">
          <input name="startTime" type="text" value={startTime} readOnly />
          ~
          <input name="endTime" type="text" value={endTime} readOnly />
        </div>
        <h1>
          총 2시간 {parseInt(totalTime % 60)}분
          예약하시겠습니까?
        </h1>
        <Link to="/payment"><button className="btn_submit_rez">결제하기</button></Link>
      </div>
    </>
  );
};

export default SelectTime;
