import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { noticeCommentDeleteOne } from '../../api'

const NoticeCommentEdit = (props) => {
  const [password, setPassword] = useState('')

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value) 
  }, [])

  const onCommentClickDelete = async () => {

    if(window.confirm("정말 삭제하시겠어요?")) {
      try {
        await noticeCommentDeleteOne(props.noticeId)
        props.commentUpdate()
      } catch (error) {
        alert(error.response.data)
      }
    } 
  }

  return (
    <>
      <div className="container boardcontent_buttons">
         <button type="button" className="btns btn-success">
           <Link to={`/notice-comment-update/${ props.noticeId }`}
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
            댓글수정
          </Link>
        </button>
        <button type="button" className="btns btn-success" 
          style={{ fontSize: '12px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}
          onClick={ onCommentClickDelete }>
          댓글삭제
        </button>
      </div>
    </>
  )
}

export default NoticeCommentEdit
