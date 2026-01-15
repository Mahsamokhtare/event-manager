import { Outlet } from "react-router";
import Navbar from "./Navbar";

export const PublicLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
