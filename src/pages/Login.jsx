import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5"
      >
        <h1 className="text-3xl font-black text-center">Login</h1>

        <input
          className="w-full mt-6 p-4 bg-black border border-white/10 rounded-xl"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full mt-4 bg-red-600 py-3 rounded-xl">
          Login
        </button>
      </form>

    </div>
  );
}