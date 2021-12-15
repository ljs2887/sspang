import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { noticeCommentUpdateOne, noticeCommentOneFatch } from '../../api'
import NoticeCommentContent from './NoticeCommentContent.jsx';

const NoticeCommentUpdate = (props) => {
  const [content, setContent] = useState('')
  const inputRef = useRef(null);
  const { id } = useParams();

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await noticeCommentOneFatch(id)
        setContent(data.content)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  useEffect(() => {
    commentPost()
  }, [commentPost])

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmitComment = async (e) => {
    e.preventDefault()
    const noticeInfo = {
      content,
    }
    try {
      const { data } = await noticeCommentUpdateOne(id, noticeInfo)
      props.history.push('/notice')
    } catch(error) {
      alert(error.response.data)
    }
  }

  return (
    <>
      <NoticeCommentContent underId={props.underId}/>
      
      <form onSubmit={onSubmitComment} >
        <textarea 
            className="form-control" 
            placeholder="댓글을 달아주세요"
            ref={ inputRef }
            rows="3"
            value={ content }
            onChange={ onChangeContent }
            style={{ marginTop: '10px' }} />
        <div>
          <button 
            className="noticeview_comment_write"
            type="submit">
              댓글수정
          </button>
        </div>
      </form>
    </>
  )
}

export default NoticeCommentUpdate
