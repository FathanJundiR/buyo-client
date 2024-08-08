import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { useState } from "react";
import { useEffect } from "react";

export default function EditLaptop({ url }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [laptop, setLaptop] = useState({});

  async function fetchLaptop() {
    try {
      const { data } = await axios.get(`${url}/laptops/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setLaptop(data.data);
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

  useEffect(() => {
    fetchLaptop();
  }, []);

  async function handleSubmit(e, dataLaptop) {
    e.preventDefault();
    try {
      await axios.put(`${url}/laptops/${id}`, dataLaptop, {
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
      <Form
        handleSubmit={handleSubmit}
        nameProp="Edit Product"
        laptop={laptop}
      />
    </>
  );
}
