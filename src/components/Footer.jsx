import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import "css/Footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor:'#3e3e3e', marginTop: '100px' }}>
    <div className = "container">
      <footer className = "py-3 mt-4">
        <ul style={{ display : 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold' }}>Home</Link>
          <Link to="/search" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>예약하기</Link>
          <Link to="/notice" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>공지사항</Link>
          <Link to="/community" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>커뮤니티</Link>
          <Link to="/login" style={{textDecorationLine: 'none', color: '#909090', fontWeight: 'bold'}}>로그인</Link>
        </ul>
        <hr style = {{ border: 'solid 1px #fff', width: '100%', margin: '50px 0'}}/>
        <p style = {{ margin: '0px 0 0 640px', color: 'white'}}className = "text-center text-muted">© 2021 SpangCompany, Inc</p>
      </footer>
    </div>
  </div>
  )
}

export default Footer;
