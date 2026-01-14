import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ProtectedRoute } from "./router/ProtectedRoute";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/signin", element: <Login></Login> },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home></Home>
          </ProtectedRoute>
        ),
        // element: <Proted></Proted>,
      },
    ],
  },
]);
