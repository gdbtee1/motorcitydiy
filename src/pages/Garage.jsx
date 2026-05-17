import { motion } from "framer-motion";
import { Calendar, Clock, ShieldCheck, Wrench, ArrowRight } from "lucide-react";

export default function Garage() {
  const slots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM",
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 md:pt-32 px-4 md:px-6">

      {/* HERO */}
      <section className="max-w-7xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 uppercase tracking-[5px] text-xs"
        >
          Garage Booking
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mt-4"
        >
          Schedule Your
          <span className="text-red-500"> Bay Time</span>
        </motion.h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
          Reserve professional-grade garage space instantly.
          Flexible booking for hobbyists, builders, and professionals.
        </p>

      </section>

      {/* TRUST STRIP */}
      <section className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-6">

        <div className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
          <Clock className="mx-auto text-red-500 mb-3" />
          <p>Flexible Time Slots</p>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
          <Wrench className="mx-auto text-red-500 mb-3" />
          <p>Professional Equipment</p>
        </div>

        <div className="p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
          <ShieldCheck className="mx-auto text-red-500 mb-3" />
          <p>Secure Member Access</p>
        </div>

      </section>

      {/* BOOKING SECTION */}
      <section className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-8">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-white/10 bg-white/5"
        >
          <h2 className="text-3xl font-black">
            How Booking Works
          </h2>

          <div className="mt-8 space-y-6">

            {[
              "Choose your preferred time slot",
              "Select your service bay",
              "Confirm your reservation",
              "Receive QR check-in access",
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-zinc-300">{step}</p>
              </div>
            ))}

          </div>

          <div className="mt-10 p-5 rounded-2xl bg-black/40 border border-white/10">
            <p className="text-zinc-400">
              Members receive priority booking windows and discounted bay pricing.
            </p>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold">
              Choose Time Slot
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Calendly integration ready
            </p>
          </div>

          <div className="p-6 space-y-4">

            {slots.map((slot, i) => (
              <button
                key={i}
                className="w-full flex justify-between items-center p-5 rounded-2xl border border-white/10 hover:border-red-500 bg-black/30 transition"
              >
                <span>{slot}</span>
                <ArrowRight size={18} />
              </button>
            ))}

            <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-medium mt-3">
              Continue Booking
            </button>

          </div>

        </motion.div>

      </section>

      {/* EMBED */}
      <section className="max-w-7xl mx-auto py-20">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black">
            Live Scheduling
          </h2>
          <p className="text-zinc-500 mt-2">
            Replace with your real Calendly link later
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="Calendly Placeholder"
            src="https://calendly.com"
            className="w-full h-[650px] bg-black"
          />
        </div>

      </section>

    </div>
  );
}