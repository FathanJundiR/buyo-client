import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    Toastify({
      text: "Success Logout",
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#00B29F",
        color: "#17202A",
        boxShadow: "0 5px 10px black",
        fontWeight: "bold",
      },
    }).showToast();
    navigate("/login");
  }

  return (
    <>
      <div className="navbar bg-base-200 mb-16 rounded ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
            不哟 Buyo
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
