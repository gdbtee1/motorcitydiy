import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-white"
      : "text-zinc-300 hover:text-white";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="font-bold">
          Motor<span className="text-red-500">City</span> DIY
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link className={linkClass("/")} to="/">Home</Link>
          <Link className={linkClass("/garage")} to="/garage">Garage</Link>
          <Link className={linkClass("/photos")} to="/photos">Photos</Link>
          <Link className={linkClass("/contact")} to="/contact">Contact</Link>
        </div>

        {/* AUTH */}
        <div className="hidden md:flex gap-3 items-center">
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm text-zinc-300">
                Dashboard ({user.plan})
              </Link>

              <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded-full text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-zinc-300">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-red-600 px-4 py-2 rounded-full text-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}