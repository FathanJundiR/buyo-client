import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterMenu from "../components/FilterMenu";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
