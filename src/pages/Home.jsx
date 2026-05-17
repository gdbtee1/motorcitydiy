import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Calendar, Users, ArrowRight, Star, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-6">
              <Star size={14} className="text-red-500" /> Detroit's First Premium DIY Auto Garage
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95]">
              Build.
              <br />
              Repair.
              <br />
              <span className="text-red-500">Create.</span>
            </h1>

            <p className="text-zinc-300 mt-6 text-lg md:text-xl max-w-xl">
              A premium automotive workspace built for enthusiasts, builders, and professionals. Rent bays, access lifts, and work like a pro.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/garage" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
                Book a Bay <ArrowRight size={18} />
              </Link>
              <Link to="/photos" className="border border-white/20 hover:border-white px-8 py-4 rounded-2xl font-medium text-center">
                View Facility
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
              <div>
                <p className="text-2xl font-black">4+</p>
                <p className="text-xs text-zinc-400">Service Bays</p>
              </div>
              <div>
                <p className="text-2xl font-black">24/7</p>
                <p className="text-xs text-zinc-400">Member Access</p>
              </div>
              <div>
                <p className="text-2xl font-black">500+</p>
                <p className="text-xs text-zinc-400">Tools Available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000" className="rounded-3xl h-[260px] md:h-[320px] object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000" className="rounded-3xl h-[260px] md:h-[320px] object-cover w-full mt-10" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-[4px] text-xs">Why MotorCity DIY</p>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Built for Real Builders</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Wrench />, title: 'Professional Equipment', text: 'Lifts, diagnostics, and pro-grade tools.' },
            { icon: <Calendar />, title: 'Smart Booking', text: 'Reserve bays instantly online.' },
            { icon: <ShieldCheck />, title: 'Secure Access', text: 'QR check-in & member-only access.' },
            { icon: <Users />, title: 'Community', text: 'Built for Detroit car culture.' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="text-red-500 mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-zinc-400 mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="py-10 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-2"><Clock className="text-red-500" /><span>Open Daily</span></div>
          <div className="flex flex-col items-center gap-2"><MapPin className="text-red-500" /><span>Detroit, Michigan</span></div>
          <div className="flex flex-col items-center gap-2"><ShieldCheck className="text-red-500" /><span>Secure Member Access</span></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-600/20 to-white/5 p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black">Ready to build at MotorCity DIY?</h2>
          <p className="text-zinc-300 mt-4 max-w-2xl mx-auto">
            Join today for premium workspace access, flexible bookings, and a builder-first experience.
          </p>
          <Link to="/signup" className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-medium">
            Start Membership
          </Link>
        </div>
      </section>
    </div>
  );
}