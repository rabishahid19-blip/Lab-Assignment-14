import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-10 shadow rounded text-center">
        <h1 className="text-2xl font-bold">Welcome Home 🔐</h1>

        <button
          className="mt-4 bg-red-500 text-white px-4 py-2"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}