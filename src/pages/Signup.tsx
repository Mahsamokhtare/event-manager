import { useState } from "react";
import { useNavigate } from "react-router";
import { signup } from "../api/auth.api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await signup({ email, password });
    navigate("/login");
  };

  return (
    <>
      <div className="h-screen flex">
        {/* Left side - Card */}
        <div className="w-1/2 flex items-center justify-center ">
          <div className="rounded-2xl max-w-lg">
            <header className="px-3 py-4 rounded-t-2xl">
              <h1 className="text-center text-gray-900 text-5xl font-bold">Create your account</h1>
            </header>

            <div className="p-4 flex flex-col gap-3">
              <div className="mb-3">
                <label className="block pb-1">Email Adress</label>
                <input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 p-2 rounded w-full "
                />
              </div>
              <div className="mb-3">
                <label className="block pb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 p-2 rounded w-full "
                />
              </div>

              <button onClick={handleSubmit} className="bg-[#e4bf6f] text-white p-2 mt-3 rounded">
                Signup
              </button>
              <div className="text-center mt-4 text-sm">
                <span>Already have an account? </span>
                <a href="/login" className="text-blue-500 font-semibold hover:underline">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/3752659/pexels-photo-3752659.jpeg"
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
