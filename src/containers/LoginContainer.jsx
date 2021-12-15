import React, { Component } from "react";
import { connect } from "react-redux";
import LoginBoxCopy from "components/LoginBoxCopy";
import { registerUser } from "store/modules/user";

export class LoginBoxContainer extends Component {
  handleSelect = (token) => {
    const { registerUser } = this.props;
    console.log("what");
    registerUser(token);
  };

  render() {
    const { token } = this.props;
    return <LoginBoxCopy onSubmit={this.handleSelect} user={token} />;
  }
}

// props로 넣어줄 스토어 상태값
const mapStateToProps = (state) => ({
  color: state.counter.color,
});

// props로 넣어줄 액션액션 생성함수
const mapDispatchToProps = (dispatch) => ({
  registerUser: (color) => dispatch(registerUser(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBoxContainer);
