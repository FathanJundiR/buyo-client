import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
// import Detail from "../views/Detail";
import { localUrl, gcpUrl } from "../utils/baseUrl";
import Login from "../views/Login";
import Toastify from "toastify-js";
import EditLaptop from "../views/EditLaptop";
import AddLaptop from "../views/AddLaptop";

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
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please log in first",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home url={url} />,
      },
      {
        path: "/laptops/add",
        element: <AddLaptop url={url} />,
      },
      {
        path: "/laptops/edit/:id",
        element: <EditLaptop url={url} />,
      },
    ],
  },
]);

export default router;
