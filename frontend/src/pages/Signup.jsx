import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    await api.post("/auth/signup", { email, password });

    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          className="w-full p-2 border mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2">
          Signup
        </button>
        
       <button
    type="button"
    onClick={() => navigate("/login")}
    className="text-green-600 font-semibold hover:underline"
  >
    Login
  </button>
      </form>
    </div>
  );
}