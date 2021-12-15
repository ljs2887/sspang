import React, { useState } from "react";
import "css/MyPage.css";

function MyPage(props) {
  const [historyMode, setHistoryMode] = useState("present");

  const changeHistoryMode = (e) => {
    if (historyMode === "present") {
      setHistoryMode("past");
    } else if (historyMode === "past") {
      setHistoryMode("present");
    }
  };

  const onClick = (e) => {
    console.log(e.target);
  };

  return (
    <article className="mypage_container">
      <section className="mypage_profile">
        <div className="profile_left">
          <img alt="profile img" src="https://picsum.photos/250/250" />
        </div>
        <div className="profile_right">
          <p className="mypage_id">반가워요! {historyMode}님!</p>
          <div>
            <button onClick={onClick}>예약하기</button>
            <button onClick={onClick}>회원정보 수정</button>
          </div>
        </div>
      </section>

      <section className="mypage_history_box">
        <ul className="mypage_history">
          <li onClick={changeHistoryMode}>과거 예약내역</li>
          <li> / </li>
          <li onClick={changeHistoryMode}>예약내역</li>
        </ul>
        <div className="mypage_gym">
          <div className="mypage_gym_img"></div>
          <div className="mypage_gym_info">
            <div className="mypage_gym_infotext">체육관 : 우리동네 체육관</div>
            <div className="mypage_gym_infotext">시간 : 11:30</div>
            <div className="mypage_gym_infotext">금액 : 23,000원</div>
            <button className="mypage_gym_cancel">예약 취소</button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default MyPage;
