import { Link, NavLink, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
type RoutePath = "/" | "/login" | "/signup";

export const Header = () => {
  const authContext = useAuth();
  const location = useLocation();

  const baseBtn =
    "flex items-center rounded-lg px-4 py-2 cursor-pointer \
   transition-colors duration-300 ease-in-out";

  const activeBtn = "bg-[#b87f05] text-white";
  const inactiveBtn = "text-gray-700";

  const isActive = (path: RoutePath): boolean => {
    const currentPath = location.pathname;

    // Home should activate Signup
    if (path === "/signup" && currentPath === "/") {
      return true;
    }

    return currentPath === path;
  };

  if (!authContext) {
    return null;
  }

  const { isAuthenticated, logout } = authContext;

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-calendar text-[#b87f05] text-xl"></i>
          <Link to={"/"}>
            <p className="font-bold cursor-pointer">EventHub</p>
          </Link>
        </div>

        {/* Conditional rendering based on auth */}
        {!isAuthenticated ? (
          <div className="flex items-center gap-x-5">
            <NavLink
              to="/login"
              className={`${baseBtn} ${
                isActive("/login") ? activeBtn : inactiveBtn
              }`}
            >
              <i className="fa-solid fa-right-to-bracket pr-2"></i>
              <p>Sign in</p>
            </NavLink>

            {/* Sign up */}
            <NavLink
              to="/signup"
              className={`${baseBtn} ${
                isActive("/signup") ? activeBtn : inactiveBtn
              }`}
            >
              <i className="fa-solid fa-user-plus pr-2"></i>
              <p>Sign Up</p>
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-x-5">
            {/* Logout */}
            <button
              className="flex items-center text-gray-700 cursor-pointer"
              onClick={logout}
            >
              <i className="fa-solid fa-right-to-bracket pr-2"></i>
              <p>Logout</p>
            </button>

            {/* User avatar */}
            <button className="flex items-center text-white bg-[#b87f05] rounded-full p-4">
              <i className="fa-solid fa-user"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
