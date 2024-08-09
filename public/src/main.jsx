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
      <GoogleOAuthProvider clientId={process.env.VITE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
