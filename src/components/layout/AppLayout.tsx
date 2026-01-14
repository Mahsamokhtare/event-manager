import { useNavigation } from "react-router";
// export default function AppLayout() {
//   const navigation = useNavigation();
//   const isLoading = navigation.state === "loading";
//   return <></>;
// }
import { Outlet } from "react-router";
// import { Header } from "../../pages/Header";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      {/* Global layout UI */}
      {/* <Header></Header> */}

      {/* Optional global loading indicator */}
      {navigation.state === "loading" && <p>Loading...</p>}

      {/* Child routes render here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
