import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useBookings } from "../context/BookingContext";

export default function Dashboard() {
  const { user, logout, upgradePlan } = useAuth();
  const { bookings } = useBookings();
  const [tab, setTab] = useState("overview");

  return (
    <div className="pt-24 md:pt-28 px-4 md:px-6 max-w-7xl mx-auto">

      <div className="grid md:grid-cols-[240px_1fr] gap-6">

        {/* SIDEBAR */}
        <aside className="p-4 rounded-2xl border border-white/10 bg-white/5 h-fit">

          <h2 className="font-bold text-lg">
            MotorCity Panel
          </h2>

          <p className="text-xs text-zinc-400 mt-1">
            Internal Dashboard
          </p>

          <div className="mt-6 space-y-2 text-sm">

            <button
              onClick={() => setTab("overview")}
              className={`w-full text-left px-3 py-2 rounded-xl ${
                tab === "overview"
                  ? "bg-red-600 text-white"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => setTab("bookings")}
              className={`w-full text-left px-3 py-2 rounded-xl ${
                tab === "bookings"
                  ? "bg-red-600 text-white"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Bookings
            </button>

            <button
              onClick={() => setTab("billing")}
              className={`w-full text-left px-3 py-2 rounded-xl ${
                tab === "billing"
                  ? "bg-red-600 text-white"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              Billing
            </button>

          </div>

          <button
            onClick={logout}
            className="mt-6 w-full bg-red-600 py-2 rounded-xl text-sm"
          >
            Logout
          </button>

        </aside>

        {/* MAIN CONTENT */}
        <main className="p-4 md:p-6 rounded-2xl border border-white/10 bg-white/5">

          {/* OVERVIEW */}
          {tab === "overview" && (
            <div>

              <h1 className="text-2xl md:text-3xl font-black">
                Welcome, {user?.email}
              </h1>

              <p className="text-zinc-400 mt-2">
                Plan: {user?.plan}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">

                <div className="p-4 rounded-2xl border border-white/10">
                  <p className="text-zinc-400 text-sm">Total Bookings</p>
                  <p className="text-2xl font-bold mt-1">
                    {bookings.length}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-white/10">
                  <p className="text-zinc-400 text-sm">Active Plan</p>
                  <p className="text-2xl font-bold mt-1">
                    {user?.plan}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-white/10">
                  <p className="text-zinc-400 text-sm">Status</p>
                  <p className="text-2xl font-bold mt-1 text-green-500">
                    Active
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* BOOKINGS */}
          {tab === "bookings" && (
            <div>

              <h2 className="text-xl font-bold mb-4">
                Your Garage Bookings
              </h2>

              {bookings.length === 0 ? (
                <p className="text-zinc-500">
                  No bookings yet
                </p>
              ) : (
                <div className="space-y-3">

                  {bookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-4 rounded-xl border border-white/10 flex justify-between"
                    >
                      <div>
                        <p className="font-semibold">{b.bay}</p>
                        <p className="text-sm text-zinc-400">
                          {b.date}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

          {/* BILLING */}
          {tab === "billing" && (
            <div>

              <h2 className="text-xl font-bold">
                Membership & Billing
              </h2>

              <p className="text-zinc-400 mt-2">
                Current Plan: {user?.plan}
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">

                <button
                  onClick={() => upgradePlan("Free")}
                  className="px-4 py-2 rounded-xl bg-white/10"
                >
                  Free
                </button>

                <button
                  onClick={() => upgradePlan("Member")}
                  className="px-4 py-2 rounded-xl bg-red-600"
                >
                  Member
                </button>

                <button
                  onClick={() => upgradePlan("Pro")}
                  className="px-4 py-2 rounded-xl bg-green-600"
                >
                  Pro
                </button>

              </div>

              <div className="mt-6 text-sm text-zinc-500">
                Billing integration will connect to Stripe later.
              </div>

            </div>
          )}

        </main>

      </div>

    </div>
  );
}