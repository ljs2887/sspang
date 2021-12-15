import { getByDisplayValue } from '@testing-library/dom';
import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'
import { patchNoticeOnePost } from '../../api';
import NoticeComment from './NoticeComment.jsx'
import './NoticeView.css';

function NoticeView(props) {
  // const { id } = props.match.params
  const { id } = useParams()
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeDate, setNoticeDate] = useState('');
  const [noticeHits, setNoticeHits] = useState(['']);
  const [noticeLike, setNoticeLike] = useState(['1']);
  const [noticeContent, setNoticeContent] = useState(['공지사항입니다. 이제 11월이네요 추운겨울 잘 보내세요']);
  const [noticeComment, setNoticeComment] = useState(['나도 그게 맞다고 생각한다....', '동감함다', '안녕']);
  const [noticeCommentTime, setNoticeCommentTime] = useState(['1분전', '12분전', '14분전']);
  const [underId, setUnderId] = useState('')
  const commentnum = noticeComment.length;

  const noticeOnePost= useCallback(
    async () => {
      try {
        const { data } = await patchNoticeOnePost(id)
        setNoticeTitle(data.title)
        setNoticeDate(data.date)
        setNoticeContent(data.content)
        setUnderId(data._id)
      } catch (error) {
        console.error(error);
      }
    },
    [id],
  )

  useEffect(() => {
    noticeOnePost()
  }, [noticeOnePost])

  return(
      <>
        <div>
          <div>
            <div className="noticeview_line"></div>
            <div className="noticeview_title">
              {noticeTitle}
            </div>
            <div className="noticeview_lists">
              <div className="noticeview_lists_date">
                {noticeDate}
              </div>
              <div className="noticeview_lists_hits">
                조회수 {noticeHits}
              </div>
              <div className="noticeview_lists_like">
                추천수 {noticeLike}
              </div>
            </div>
            <div className="noticeview_line"></div>
          </div>

          <div>
            <div className="noticeview_content">
              {noticeContent}
            </div>
            <div className="noticeview_line"></div>
            <Link to="/notice">
              <button className="noticeview_back">
                목 록
              </button>
            </Link>
          </div>

          <div className="noticeview_comment">
            전체 댓글( { commentnum } )
          </div>
          
          <NoticeComment underId={underId}/>
        </div>
      </>
  )
}

export default NoticeView;