import React from "react";
import ReactDOM from "react-dom";
import App from "components/App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "store/modules/user";

ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </UserProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
