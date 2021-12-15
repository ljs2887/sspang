import { createContext } from "react";

const defaultUserContext = {
  isLoggedin: false,
  userId: null,
  userName: "",
};

const UserContext = createContext(defaultUserContext);

export default UserContext;
