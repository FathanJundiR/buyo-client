import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaptop } from "../features/laptop/laptopSlice";
import Toastify from "toastify-js";
import loadingGif from "../assets/loadingGif.svg";
import Card from "../components/Card";
import FilterMenu from "../components/FilterMenu";

export default function Home() {
  const { laptops, loading, error } = useSelector((state) => state.laptop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaptop());
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

  if (loading) {
    return (
      <>
        <section className="flex justify-center items-center">
          <img src={loadingGif} />
        </section>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-4">
        <div className=" flex items-center justify-center col-span-1">
          <FilterMenu />
        </div>
        <div className="bg-blue-500 flex items-center justify-center col-span-3">
          <div className="flex flex-col gap-4 bg-red-500">
            {laptops?.map((laptop) => {
              return <Card key={laptop.id} laptop={laptop} />;
            })}
          </div>
        </div>
        {/* <div className="">
         
        </div> */}
      </div>
    </>
  );
}
