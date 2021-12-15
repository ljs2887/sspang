import React, { useState, useRef, useCallback } from 'react';
import './NoticeView.css';
import { noticeCommentCreate } from '../../api'
import NoticeCommentContent from './NoticeCommentContent.jsx'

const NoticeComment = (props) => {
  const [content, setContent] = useState('')
  const inputRef = useRef(null);
  const contextId = props.underId

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value) 
  }, [])

  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault()
      const commentInfo = {
        content
      }
      try {
        await noticeCommentCreate(contextId, commentInfo)
        setContent('')
        inputRef.current.focus();
        alert('댓글이 작성되었습니다.')
      } catch (error) {
        console.error(error);
      }
    }, [content, contextId]
  )

  return (
    <>
      <NoticeCommentContent underId={props.underId}/>
      
      <form onSubmit={onSubmitForm} >
        <textarea 
            className="form-control" 
            placeholder="댓글을 달아주세요"
            rows="3"
            value={ content }
            onChange={ onChangeContent }
            style={{ marginTop: '10px' }} />
        <div>
          <button 
            className="noticeview_comment_write"
            type="submit">
              댓글달기
          </button>
        </div>
      </form>
    </>
  )
}

export default NoticeComment
