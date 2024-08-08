import { useEffect, useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";

export default function Home({ url }) {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();

  async function fetchLaptops() {
    try {
      const { data } = await axios.get(`${url}/laptops`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setLaptops(data.data);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.message,
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
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${url}/laptops/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Toastify({
        text: "Success delete",
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

      fetchLaptops();
    } catch (error) {
      Toastify({
        text: error.response.data.error,
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
    fetchLaptops();
  }, []);

  return (
    <>
      <div className="mb-8 flex justify-start">
        <div
          className="btn btn-secondary"
          onClick={() => navigate("/laptops/add")}
        >
          Add More
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>NO.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {laptops?.map((laptop, index) => {
              return (
                <tr key={laptop.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={laptop.imgUrl} alt="Laptop Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{laptop.name}</td>
                  <td className="text-clip overflow-hidden">{laptop.brand}</td>
                  <td>
                    <div className="flex gap-3">
                      <div
                        className="btn flex-auto btn-accent"
                        onClick={(e) => navigate(`/laptops/edit/${laptop.id}`)}
                      >
                        Edit
                      </div>
                      <div
                        className="btn flex-auto btn-primary"
                        onClick={(e) => navigate(`/laptops/image/${laptop.id}`)}
                      >
                        Image
                      </div>
                      <div
                        className="btn flex-auto btn-secondary"
                        onClick={(e) => handleDelete(laptop.id)}
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
