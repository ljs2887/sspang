import React, { useCallback, useState } from 'react'
import "./ShowInfo.css";
import { searchGym } from 'api'

function ShowInfo(props) {
  const [isShow, setIsShow] = useState(true);
  const [gym, setGym] = useState('')
  const [gymRes, setGymRes] = useState([])

  const onSubmitForm = useCallback(async (e) => {
    e.preventDefault()
      try {
        const { data } = await searchGym(gym)
        setGymRes([...data])
      } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      }
    }, [gym]
  )

  const onChangeGym = (e) => {
    setGym(e.target.value)
  }
  
  return (
    <section>
      <>
        {/* <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        trigger
      </button>

        <h1>isShow : {isShow}</h1> */}
      </>

      <section>
        <article className="info_container">
          <div className="info_item_image">
            <button className="btn_right">👈</button>
            <img alt="facility infomation" src={props.facility.img[0]} />
            <img alt="facility infomation" src={props.facility.img[1]} />
            <img alt="facility infomation" src={props.facility.img[2]} />
            <button className="btn_right">👉</button>
          </div>
          <div class="info_item_text">
            {/* <p>기관명 : {props.facility.name}</p> */}
            <p>기관명 : 신사체육관</p>
            {/* <p>주소 : {props.facility.address}</p> */}
            <p>주소 : 강남구 신사동</p>
            {/* <p>전화번호 : {props.facility.call}</p> */}
            <p>전화번호 : 010-1234-5678</p>
            {/* <p>코트 수 : {props.facility.courtNum}</p> */}
            <p>코트 수 : 3</p>
            {/* <p>1시간 금액 : {props.facility.perHour}</p> */}
            <p>1시간 금액 : 12,000원</p>
          </div>
          <button className="btn_rez">결제하기</button>
          <button className="btn_forward">체육관 바로가기</button>
        </article>
      </section>
    </section>
  );
}

export default ShowInfo;
