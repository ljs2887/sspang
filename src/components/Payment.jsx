// import { getByDisplayValue } from '@testing-library/dom';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "css/Payment.css";

function Payment() {
  const selectList = ["결제수단", "카드결제", "계좌이체"];
  const [Selected, setSelected] = useState("결제수단");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="payment_box">
        <div>
          <h2 className="payment_title">결제하러 오셨네요?</h2>
          <h2 className="payment_title">결제 수단을 선택해주세요.</h2>
          <div className="payment_selectbox">
            <div>
              <select
                className="payment_select"
                onChange={handleSelect}
                value={Selected}
              >
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <p className="payment_switch">
                <SwitchConponent Selected={Selected} />
              </p>
            </div>
          </div>
        </div>

        <div className="payment_check">
          <div className="payment_checkbox">
            <input type="checkbox" name="agree" value="agree" />
            예약 이용약관에 동의 하시겠습니까?
          </div>
          <Link to="/payment-success">
            <button className="payment_checkbutton">결제하기</button>
          </Link>
        </div>
      </div>
    </>
  );
}

function Default() {
  return <div>결제수단 선택하세요!</div>;
}

function Card() {
  return (
    <>
      <div className="payment_card">
        <div className="payment_cardtext">카드번호입력</div>
        <input className="square"></input>
        <input className="square"></input>
        <input className="square"></input>
        <input className="square"></input>
      </div>
    </>
  );
}

function Account() {
  return (
    <div>
      <div className="payment_account">
        <div className="payment_accounttext">
          아래의 계좌 중 선택하여 이체해주세요.
        </div>
        <div className="payment_accounttext">국민) 937702-00-117772 이진수</div>
        <div className="payment_accounttext">신한) 110-454-239550 이진수</div>
        <div className="payment_accounttext">
          기업) 059-096815-01-010 이진수
        </div>
      </div>
    </div>
  );
}

function SwitchConponent(props) {
  switch (props.Selected) {
    case "결제수단":
      return Default();
    case "카드결제":
      return Card();
    default:
      return Account();
  }
}

export default Payment;
