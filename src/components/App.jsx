import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import { getUser } from "api";
import "css/App.css";
import Header from "components/Header.jsx";
import Footer from "components/Footer.jsx";
import Main from "components/Main.jsx";
import Notice from "components/notice/Notice.jsx";
import NoticeView from "components/notice/NoticeView.jsx";
import NoticeWrite from "components/notice/NoticeWrite.jsx";
import NoticeCommentUpdate from "components/notice/NoticeCommentUpdate.jsx";
import Payment from "components/Payment.jsx";
import LoginBox from "components/login/LoginBox.jsx";
import LoginBoxCopy from "components/login/LoginBoxCopy.jsx";
import SignupForm from "components/login/SignupForm.jsx";
import SearchBox from "components/search/SearchBox.jsx";
import MyPage from "components/MyPage.jsx";
import Community from "components/community/Community.jsx";
import CommunityView from "components/community/CommunityView.jsx";
import CommunityWrite from "components/community/CommunityWrite.jsx";
import PaymentSuccess from "components/PaymentSuccess.jsx";

const communityTitle = [
  "배드민턴이 너무 어려워요....",
  "이 배드민채 어떤가요?",
  "체육관 너무 좋네요^^",
  "배린이 임니다 ㅎ,,",
];

const noticeTitle = [
  "배드민턴은 SIPANG...",
  "으음~ 머시따~!",
  "내 집 같은 체육관은 ...",
  "SIPANG 예약 할인 이벤트!",
];

function App() {

  const [userInfo, setUserInfo] = useState({})
  
  const patchUserInfo = useCallback(
    async () => {
      try {
        const { data } = await getUser()
        setUserInfo(data)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    [],
  )

  useEffect(() => {
    patchUserInfo()
  }, [userInfo, patchUserInfo])

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main communityTitle={communityTitle} noticeTitle={noticeTitle} />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/notice">
          <Notice />
        </Route>

        <Route path="/notice-view/:id">
          <NoticeView />
        </Route>

        <Route path="/notice-write">
          <NoticeWrite />
        </Route>

        <Route path="/notice-comment-update">
          <NoticeCommentUpdate />
        </Route>

        <Route path="/logins">
          <LoginBox />
        </Route>

        <Route path="/login">
          <LoginBoxCopy />
        </Route>

        <Route path="/signup">
          <SignupForm />
        </Route>

        {/* <Route path="/join"><JoinBox /></Route> */}
        <Route path="/search">
          <SearchBox />
        </Route>

        <Route path="/my-page">
          <MyPage />
        </Route>

        <Route path="/community">
          <Community />
        </Route>

        <Route path="/community-view">
          <CommunityView />
        </Route>

        <Route path="/community-write">
          <CommunityWrite />
        </Route>

        <Route path="/payment-success">
          <PaymentSuccess />
        </Route>
        
      </Switch>

      <Footer />
    </>
  );
}

export default App;
