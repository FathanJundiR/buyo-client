import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "toastify-js/src/toastify.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "toastify-js/src/toastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}> //vite */}
      <GoogleOAuthProvider clientId="229941318056-2m97q0ducvdff2f7u0lnmak03kguu0t2.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
