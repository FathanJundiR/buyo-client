import { useEffect, useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import SubmitButton from "./SubmitButton";

export default function Form({ handleSubmit, laptop, nameProp }) {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [gpu, setGpu] = useState("");
  const [screen, setScreen] = useState("");
  const [os, setOs] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (laptop) {
      setBrand(laptop.brand);
      setName(laptop.name);
      setCpu(laptop.cpu);
      setRam(laptop.ram);
      setStorage(laptop.storage);
      setGpu(laptop.gpu);
      setScreen(laptop.screen);
      setOs(laptop.os);
      setImgUrl(laptop.imgUrl);
      setPrice(laptop.price);
    }
  }, [laptop]);

  return (
    <>
      <div className="mb-8 font-semibold text-xl text-fuchsia-600">
        {nameProp}
      </div>
      <div className="flex flex-col items-center gap-4 mt-14">
        <form
          onSubmit={(e) => {
            const dataLaptop = {
              brand,
              name,
              cpu,
              ram,
              storage,
              gpu,
              screen,
              os,
              imgUrl,
              price,
            };
            handleSubmit(e, dataLaptop);
          }}
        >
          <div>
            <div className="label ">
              <span className="label-text">Brand: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Brand"
              className="input input-secondary w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Name: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Name"
              className="input input-secondary w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">CPU: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop CPU"
              className="input input-secondary w-full"
              value={cpu}
              onChange={(e) => setCpu(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">RAM: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop RAM"
              className="input input-secondary w-full"
              value={ram}
              onChange={(e) => setRam(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Storage: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Storage"
              className="input input-secondary w-full"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">GPU: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop GPU"
              className="input input-secondary w-full"
              value={gpu}
              onChange={(e) => setGpu(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Screen: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Screen"
              className="input input-secondary w-full"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">OS: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop OS"
              className="input input-secondary w-full"
              value={os}
              onChange={(e) => setOs(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Image URL: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Image URL"
              className="input input-secondary w-full"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div>
            <div className="label ">
              <span className="label-text">Price: </span>
            </div>
            <input
              type="text"
              placeholder="Laptop Price"
              className="input input-secondary w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            {/* <button type="submit" className="w-full btn btn-accent mt-10">{nameProp}</button> */}
            <SubmitButton nameProp={nameProp} />
          </div>
        </form>
      </div>
    </>
  );
}
