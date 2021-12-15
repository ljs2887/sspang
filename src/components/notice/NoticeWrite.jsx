import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NoticeWrite.css';
import { createNoticePost } from '../../api';

 const NoticeWrite = withRouter(props => {
  const [noticeTitle, setNoticeTitle] = useState('')
  const [noticeContent, setNoticeContent] = useState('')

  const onChangeNoticeTitle = (e) => {
    setNoticeTitle(e.target.value)
  }

  const onChangeNoticeContent = (e) => {
    setNoticeContent(e.target.value)
  }

  const onSubmitNoticeForm = async (e) => {
    e.preventDefault()
    const noticeInfo = {
      title: noticeTitle,
      content: noticeContent
    }
    try {
      await createNoticePost(noticeInfo)
      props.history.push('/notice')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="container">
        <div className="notice_title">
          <p>제목</p>
        <input 
          value = { noticeTitle } 
          onChange = { onChangeNoticeTitle }
          type="text" 
          class="form-control" 
          id="exampleFormControlInput1" 
          placeholder="제목을 입력해주세요"/>
        </div>

        <div className="notice_content">
          <p>내용</p>
        <input 
          value = { noticeContent } 
          onChange = { onChangeNoticeContent }
          type="text" 
          class="form-control" 
          id="exampleFormControlInput1" 
          placeholder="내용을 입력해 주세요."
          rows="8"/>
        </div>
      </div>
      <div className="notice_btn">
        <button onClick={ onSubmitNoticeForm }>확인</button>
        <button><Link to={"/notice"}>취소</Link></button>
      </div>
    </>
  )
})

export default NoticeWrite;