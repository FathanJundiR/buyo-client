import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaptop } from "../features/laptop/laptopSlice";
import Toastify from "toastify-js";
import loadingGif from "../assets/loadingGif.svg";
import Card from "../components/Card";
import FilterMenu from "../components/FilterMenu";
import bannerGemini from "../assets/bannerGemini.webp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { laptops, loading, error } = useSelector((state) => state.laptop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <div
        className="hero mb-4 "
        style={{
          backgroundImage: `url(${bannerGemini})`,
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bingung Memilih?</h1>
            <p className="mb-5 text-slate-50">
              Gemini AI hadir untuk membantu anda! <br></br>
              Dibuat oleh orang-orang berotak senku yang ada di Google
            </p>
            <button
              className="btn btn-primary"
              onClick={(e) => navigate("/ask-ai")}
            >
              Tanya Gemini
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4">
        <div className=" flex items-center justify-center col-span-1">
          <FilterMenu />
        </div>
        <div className="flex items-center justify-center col-span-3">
          <div className="flex flex-col gap-4">
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
