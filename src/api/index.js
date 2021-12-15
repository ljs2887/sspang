import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

axios.defaults.baseURL = "https://sipang.herokuapp.com/";
axios.defaults.withCredentials = true;

// const instance = axios.create({
// 	baseURL: process.env.REACT_APP_URl
// })

function signUpUser(payload) {
  return axios.post('/user', payload)
} 

function loginUser(payload) {
  return axios.post('/user/login', payload)
}

function getUser() {
  return axios.get('/user')
}

function searchGym(payload) {
  return axios.get(`/gym/${payload}`)
}

function createNoticePost(noticeInfo) {
	return axios.post('/board', noticeInfo)
}

function patchNoticePost() {
  return axios.get('/board')
}

function patchNoticeOnePost(id) {
  return axios.get(`/board/${id}`)
}

function noticeCommentCreate(id, commentInfo) {
  return axios.post(`/comment/${id}`, commentInfo)
}

function noticeCommentPost(id) {
  return axios.get(`/comment/${id}`)
}
//---
function noticeCommentDeleteOne(id) {
  return axios.delete(`/comment/${id}`)
}

function noticeCommentOneFatch(id) {
  return axios.get(`/comment/${id}/one`)
}

function noticeCommentUpdateOne(id, noticeInfo) {
  return axios.put(`/comment/${id}/one`, noticeInfo)
}

export { 
  signUpUser, 
  loginUser, 
  getUser, 
  searchGym, 
  createNoticePost, 
  patchNoticePost, 
  patchNoticeOnePost,
  noticeCommentCreate,
  noticeCommentPost,
  noticeCommentDeleteOne,
  noticeCommentOneFatch,
  noticeCommentUpdateOne
   }