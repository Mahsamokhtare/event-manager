import { Outlet } from "react-router";
import { Header } from "./Header";

export const PublicLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};
