import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function AddLaptop({ url }) {
  const navigate = useNavigate();

  async function handleSubmit(e, dataLaptop) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/laptops`, dataLaptop, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Success add new data",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();

      navigate("/");
    } catch (error) {
      Toastify({
        text: error.response.data.message,
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
    }
  }

  return (
    <>
      <Form url={url} handleSubmit={handleSubmit} nameProp="Add Laptop" />
    </>
  );
}
