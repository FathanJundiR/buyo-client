import { useNavigate } from "react-router-dom";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function Card({ laptop }) {
  const navigate = useNavigate();

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <div className="flex-1">
          <img
            className="w-32"
            src={
              laptop.imgUrl === "x"
                ? "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                : laptop.imgUrl
            }
            alt="img_laptop"
          />
        </div>
      </figure>
      <div className="card-body bg-base-200">
        <h2 className="card-title">{laptop.name}</h2>
        <span>
          {laptop.cpu}, {laptop.ram}, {laptop.storage}
        </span>
        <span>
          <FormatRupiah value={laptop.price} />
        </span>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-primary text-white"
            onClick={() => navigate(`/laptops/${laptop.id}`)}
          >
            Detail
          </button>
          <button className="btn btn-success" onClick={() => {}}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
