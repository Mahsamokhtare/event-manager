import { useNavigation } from "react-router";
import { Outlet } from "react-router";
import { Header } from "./Header";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />

      {navigation.state === "loading" && <p>Loading...</p>}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
