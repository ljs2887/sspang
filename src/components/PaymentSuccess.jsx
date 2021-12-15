import React from 'react'
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <>
      <p style={{margin: '20px 0 100px 45%'}}>결제 완료 되었습니다!!</p>
      <Link to="/" style={{margin: '100px 0 0 47%'}}>
        <button className="payment_checkbutton">홈으로</button>
      </Link>
    </>
  )
}

export default PaymentSuccess

