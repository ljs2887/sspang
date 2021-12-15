import { signUpUser, signInUser } from "api/index";
import React, { createContext, useContext, useReducer } from "react";

// 액션 타입 정의
export const CREATE_USER = "user/CREATE";
export const LOGIN = "user/LOGIN";
export const LOGOUT = "user/LOGOUT ";

// 액션 생성함수 정의
export const registerUser = (payload) => {
  const data = signUpUser(payload);
  return { type: CREATE_USER, payload: data };
};

export const login = (payload) => {
  const data = signInUser(payload);
  return { type: LOGIN, payload: data };
};

export const logout = () => ({ type: LOGOUT });

// 초기상태 정의
const initialState = {
  isLoggedin: false,
  user: null,
  // user: {
  //   userToken: "",
  //   userID: "",
  //   userName: "",
  // },
};

//  리듀서 작성
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        // user: {
        //   userID: action.user.userID,
        // },
      };
    case LOGIN:
      return {
        ...state,
        isLoggedin: true,
        user: action.userId,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
        user: action.userId,
      };
    default:
      return state;
  }
}
const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find UserProvider");
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot fund UserProvider");
  return dispatch;
};
