import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ProtectedRoute } from "./router/ProtectedRoute";
import Home from "./pages/Home";
// import { PublicLayout } from "./components/layout/PublicLayout";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  // {
  //   element: <PublicLayout />,
  //   errorElement: <NotFound />,

  //   children: [
  //     { path: "/login", element: <Login /> },
  //     { path: "/signup", element: <Signup /> },
  //   ],
  // },
  {
    element: <AppLayout />,
    errorElement: <NotFound />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/event/:id", element: <EventDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
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
