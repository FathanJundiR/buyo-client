import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaptopById } from "../features/laptop/laptopByIdSlice";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { laptopById, loading, error } = useSelector(
    (state) => state.laptopById
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchLaptopById(id));
  }, []);

  useEffect(() => {
    if (error) {
      Toastify({
        text: error,
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
  }, [error]);

  if (!loading) {
    return (
      <>
        <Card laptop={laptopById} />
      </>
    );
  }
}
