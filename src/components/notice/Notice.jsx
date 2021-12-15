import { getByDisplayValue } from '@testing-library/dom';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { patchNoticePost } from '../../api';
import './Notice.css';

function Notice() {
  const { id } = useParams();
  const [noticeId, setNoticeId] = useState([]);
  const [noticeTitle, setNoticeTitle] = useState([]);
  const [noticeDate, setNoticeDate] = useState([]);
  const [noticeHits, setNoticeHits] = useState([]);
  const [noticeLike, setNoticeLike] = useState([]);

  const noticePost = useCallback(
    async () => {
      try {
        const { data } = await patchNoticePost()
        setNoticeId(data.map(v => v._id))
        setNoticeTitle(data.map(v => v.title))
        setNoticeDate(data.map(v => v.date))
        setNoticeHits(data.map(v => v.hits))
        setNoticeLike(data.map(v => v.like))
      } catch (error) {
        console.error(error);
      }
    },
    [],
  )

  useEffect(() => {
    noticePost()
  }, [noticePost])
  
  return(
      <>
        <div>
          <div className="notice_name">
            공지사항
          </div>

          <div>
            <div className="notice_line"></div>
            <div className="notice_lists">
              <div className="notice_lists_title">
                제목
              </div>
              <div className="notice_lists_date">
                작성일
              </div>

            </div>
            <div className="notice_line"></div>
          </div>

          <div>
            {noticeTitle.map((a, i) => {
              return (
                <>
                  <div className="notice_content">
                    <div className="notice_content_title">
                      <Link to={`/notice-view/${ noticeId[i] }`}>{noticeTitle[i]}</Link>
                    </div>
                    <div className="notice_content_date">
                      {noticeDate[i]}
                    </div>
                  </div>
                  <div className="notice_content_line"></div>
                </>
              );
            })}
          </div>

          <button><Link to="/notice-write">글쓰기</Link></button>
        </div>
      </>
  )
}

export default Notice;