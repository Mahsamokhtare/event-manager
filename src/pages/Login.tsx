import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { handleError } from "../utils/errorHandler";
import image from "../../src/assets/images/pexels-photo-3752659.jpeg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { loginUser } = useAuth()!;

  const handleSubmit = async () => {
    setError("");
    try {
      await loginUser({ email, password });
      navigate("/");
    } catch (err) {
      setEmail("");
      setPassword("");
      setError(handleError(err));
    }
  };

  return (
    <>
      <div className="h-screen flex">
        {/* Left side - Card */}
        <div className="w-1/2 flex items-center justify-center ">
          <div className="rounded-2xl max-w-lg">
            <header className="px-3 py-4 rounded-t-2xl">
              <h1 className="text-center text-gray-900 text-5xl font-bold">
                Log in your account
              </h1>
            </header>

            <div className="p-4 flex flex-col gap-3">
              {error && (
                <div className="flex items-center border border-red-800 px-2 py-2 rounded-lg bg-red-100">
                  <i className="fa-solid fa-circle-exclamation text-red-800 pr-2"></i>
                  <p className="text-red-800">{error}</p>
                </div>
              )}
              <div className="mb-3">
                <label className="block pb-1 text-gray-600">Email</label>
                <input
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 p-2 rounded w-full "
                />
              </div>
              <div className="mb-3">
                <label className="block pb-1 text-gray-600">Password</label>
                <input
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 p-2 rounded w-full "
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-[#e4bf6f] text-white p-2 mt-3 rounded cursor-pointer"
              >
                Log in
              </button>
              <div className="text-center mt-4 text-sm">
                <span>You don't have an account? </span>
                <Link
                  to="/signup"
                  className="text-blue-500 font-semibold hover:underline cursor-pointer"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2">
          <img src={image} alt="Event" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}
