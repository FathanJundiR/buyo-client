import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import Detail from "../views/Detail";
import { localUrl, gcpUrl } from "../utils/baseUrl";
import Login from "../views/Login";
import Toastify from "toastify-js";
import AskAi from "../views/AskAi";

const url = gcpUrl;
const router = createBrowserRouter([
  {
    element: <Login url={url} />,
    path: "/login",
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home url={url} />,
      },
      {
        path: "/ask-ai",
        element: <AskAi url={url} />,
      },
      {
        path: "/laptops/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
