import { useState } from "react";
import Toastify from "toastify-js";
import SubmitButton from "../components/SubmitButton";
import { fetchlaptopAskAi } from "../features/laptop/laptopAskAi";
import { useDispatch, useSelector } from "react-redux";
import thinkingGif from "../assets/thinking.gif";

export default function AskAi() {
  const { laptopAskAi, loading, error } = useSelector(
    (state) => state.laptopAskAi
  );
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("performance");
  const [purpose, setPurpose] = useState("gaming");
  const [price, setPrice] = useState("20000000");

  async function handleSubmit(e, dataPrompt) {
    try {
      e.preventDefault();
      dispatch(fetchlaptopAskAi(dataPrompt));
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
      <div className="p-5 flex flex-col gap-8">
        <div>
          <div className="p-8  flex content-start justify-start">
            <div className="flex flex-col gap-2 mt-14">
              <form
                onSubmit={(e) => {
                  const dataPrompt = {
                    priority,
                    price,
                    purpose,
                  };
                  handleSubmit(e, dataPrompt);
                }}
              >
                <div className="grid grid-cols-2 ">
                  <div className="label gap-4">
                    <span className="label-text font-semibold font-mono ">
                      Price Under:{" "}
                    </span>
                  </div>
                  <select
                    className="select select-secondary w-full max-w-xs font-semibold font-mono"
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option value="70000000">Rp. 70.000.000</option>
                    <option value="40000000">Rp. 40.000.000</option>
                    <option value="20000000">Rp. 20.000.000</option>
                    <option value="15000000">Rp. 15.000.000</option>
                    <option value="10000000">Rp. 10.000.000</option>
                    <option value="8000000">Rp. 8.000.000</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 ">
                  <div className="label ">
                    <span className="label-text font-semibold font-mono ">
                      Purpose:{" "}
                    </span>
                  </div>
                  <select
                    className="select select-secondary w-full max-w-xs font-semibold font-mono"
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    <option value="gaming">Gaming</option>
                    <option value="work">Work</option>
                    <option value="design">Design</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="label col-span-1">
                    <span className="label-text font-semibold font-mono ">
                      Priority:{" "}
                    </span>
                  </div>
                  <select
                    className="select select-secondary w-full max-w-xs font-semibold font-mono"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="performance">Performance</option>
                    <option value="battery life">Battery Life</option>
                    <option value="portability">Portability</option>
                  </select>
                </div>

                <div>
                  {/* <button type="submit" className="w-full btn btn-accent mt-10">{nameProp}</button> */}
                  <SubmitButton nameProp="Ask" />
                </div>
              </form>
            </div>
          </div>
          <div className="p- flex content-start justify-center">
            {loading ? (
              <>
                <img src={thinkingGif} alt="" />
              </>
            ) : (
              <div className="flex flex-col items-center ">
                <p>Laptop termantap untuk kebutuhan {purpose} kamu adalah</p>
                <p>
                  <strong>{laptopAskAi?.replaceAll("*", "")}</strong>{" "}
                </p>
              </div>
            )}

            {/* {loading ? "hollaaaa" : laptopAskAi} */}
          </div>
        </div>
      </div>
    </>
  );
}
