import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  if (!authContext) {
    return null;
  }

  const { isAuthenticated, logout } = authContext;
  console.log("the user is authenticated?", isAuthenticated);

  return (
    <div className="bg-[#f3e3c0] shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-calendar text-[#b87f05] text-xl"></i>
          <p className="font-bold">EventHub</p>
        </div>

        {/* Conditional rendering based on auth */}
        {!isAuthenticated ? (
          <div className="flex items-center gap-x-5">
            {/* Sign in */}
            <button
              className="flex items-center text-gray-700 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <i className="fa-solid fa-right-to-bracket pr-2"></i>
              <p>Sign in</p>
            </button>

            {/* Sign up */}
            <button
              className="flex items-center text-white bg-[#b87f05] rounded-lg px-4 py-2 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <i className="fa-solid fa-user-plus pr-2"></i>
              <p>Sign Up</p>
            </button>
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
