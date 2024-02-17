"use client";
import { useState } from "react";
import { EyeOff,Eye } from "lucide-react";

function AdminSignin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Admin Login
        </span>
        <form className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Username or Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Username or Email"
              required
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                required
              />
              <button
                className="absolute top-2 right-2 text-[#7d7d7d]"
                type="button"
                onClick={toggleShowPassword}
              >
                {showPassword ? <Eye /> : <EyeOff />} {/* Toggle button text */}
              </button>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
            Login
          </button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">
          Forgot password?
        </a>
      </div>
    </div>
  );
}

export default AdminSignin;
