import React from "react";
import { Link } from "react-router-dom";
import "css/Header.css";
import Logo from "asset/img/sipang.jpg";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header_logo">
          <Link to="/">
            <img alt="Spang" src={Logo} />
          </Link>
        </div>
        <div className="header_menu">
          <ul>
            <li>
              <Link to="/search">예약하기</Link>
            </li>
            <li>
              <Link to="/notice">공지사항</Link>
            </li>
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
