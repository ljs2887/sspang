import React, { useState, useEffect, useCallback } from 'react';
import './NoticeView.css';
import { noticeCommentPost } from '../../api'
import NoticeCommentEdit from './NoticeCommentEdit.jsx'

const NoticeCommentContent = (props) => {
  const [comment, setComment] = useState([])
  const [update, setUpdate] = useState(false)

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await noticeCommentPost(props.underId)
        setComment([...data])
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  const commentUpdate = useCallback(() => {
    setUpdate(prev => !prev)
  }, [])

  useEffect(() => {
    commentPost()
  }, [commentPost])

  return (
    <>
      {
        comment.map((a) => (
        <div key={a._id}>
          <div className="noticeview_line"></div>
          <div className="noticeview_comment_list">
            <div className="noticeview_comment_list_time">
              내용 {a.content}
            </div>
            {a.date} 
          </div>
          <div className="noticeview_comment_list_line"></div>

          <NoticeCommentEdit noticeId={a._id} commentUpdate={commentUpdate}/>
        </div>        
        ))
      }
     </>
  )
}

export default NoticeCommentContent
