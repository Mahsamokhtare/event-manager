import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ProtectedRoute } from "./router/ProtectedRoute";
import Home from "./pages/Home";
import { PublicLayout } from "./components/layout/PublicLayout";
import CreateEvent from "./pages/CreateEvent";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/events/new",
        element: (
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
