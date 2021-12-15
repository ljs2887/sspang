import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { patchNoticePost } from '../api';
import "css/Main.css";
import GymSearch from "./search/GymSearch";

function Main(props) {
  const rankingData = ["성남체육관", "압구정체육관", "신사체육관"];
  const [ranking, setRanking] = useState(rankingData[0]);
  const [noticeId, setNoticeId] = useState([]);
  const [noticeTitle, setNoticeTitle] = useState([]);
  const [noticeDate, setNoticeDate] = useState([]);

  const Ranking = () => {
    useEffect(() => {
      const id = setInterval(() => {
        let tmp = rankingData.indexOf(ranking);
        let changeIndex = rankingData.length - 1 === tmp ? 0 : tmp + 1;
        setRanking(rankingData[changeIndex]);
      }, 3000);
      return () => clearInterval(id);
    }, []);

    return <>{`${rankingData.indexOf(ranking) + 1}. ${ranking}`}</>;
  };

  const noticePost = useCallback(
    async () => {
      try {
        const { data } = await patchNoticePost()
        setNoticeId(data.map(v => v._id))
        setNoticeTitle(data.map(v => v.title))
        setNoticeDate(data.map(v => v.date))
      } catch (error) {
        console.error(error);
      }
    },
    [],
  )

  useEffect(() => {
    noticePost()
  }, [noticePost])

  return (
    <>
      <div className="search">
        <div className="main_img"></div>
        <GymSearch />
      </div>

      <div>
        <h2 className="main_title">HOT 체육관!</h2>
        <div className="main_rank">
          <Ranking />
        </div>
      </div>

      <div>
        <h2 className="main_title">접속 위치 주변 체육관</h2>
      </div>

      <div>
        <div className="main_box_group">
          <div className="main_box1">성남 체육관</div>
          <div className="main_box2">모란 체육관</div>
          <div className="main_box3">건대 체육관</div>
        </div>
        <div className="main_box_group">
          <div className="main_box4">천안 체육관</div>
          <div className="main_box5">신사 체육관</div>
          <div className="main_box6">논현 체육관</div>
        </div>
      </div>

      <div className="main_reservation">
        {/* <p className="main_reservation_text1">그곳이 어디든 그곳이 몇시던</p> */}
        <div className="main_reservation_text1">
          <p>그곳이 어디든 그곳이 몇시던</p>
        </div>
        <div className="main_reservation_text2">
          <p>언제 어디서든! SPANG!</p>
        </div>
        <button>
          <Link to="/search">예약하기</Link>
        </button>
      </div>

      <div className="main_twobox">
        <div className="main_community">
          <div className="main_community_title">커뮤니티 새글</div>
          <div className="main_squre">
            {noticeTitle.map((a, i) => {
              return (
                <>
                  <div key={i} className="main_community_content">
                    <p className="main_community_content_title">
                      {" "}
                      <Link to={`/notice-view/${ noticeId[i] }`}>{noticeTitle[i]}</Link>
                    </p>
                    <p className="main_community_content_time">{noticeDate[i]}</p>
                    <div className="main_line"></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="main_notice">
          <div className="main_notice_title">공지사항</div>
          <div className="main_squre">
            {[1, 2, 3, 4].map(function (a, i) {
              return (
                <div key={i} className="main_notice_content">
                  <p className="main_notice_content_title">
                    {" "}
                    <Link to="/notice">{props.noticeTitle[i]}</Link>
                  </p>
                  <p className="main_notice_content_time">{i + 1}분 전</p>
                  <div className="main_line"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
