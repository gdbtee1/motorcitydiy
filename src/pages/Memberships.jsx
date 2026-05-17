import { motion } from "framer-motion";
import { Check, Crown, Wrench, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Day Pass",
    price: "$49",
    period: "/day",
    icon: <Wrench className="text-red-500" />,
    featured: false,
    features: [
      "Single day garage access",
      "Standard tool access",
      "1 service bay reservation",
      "Community lounge access",
    ],
  },
  {
    name: "Member",
    price: "$199",
    period: "/month",
    icon: <ShieldCheck className="text-red-500" />,
    featured: true,
    features: [
      "Unlimited monthly access",
      "Priority bay reservations",
      "QR member check-in",
      "Discounted add-ons",
      "24/7 access",
    ],
  },
  {
    name: "Pro Builder",
    price: "$399",
    period: "/month",
    icon: <Crown className="text-red-500" />,
    featured: false,
    features: [
      "Dedicated priority support",
      "Commercial client access",
      "Premium lift scheduling",
      "Private storage locker",
      "Business booking tools",
    ],
  },
];

export default function Memberships() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 md:pt-32 px-4 md:px-6">
      <section className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 uppercase tracking-[5px] text-xs"
        >
          Memberships
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mt-4"
        >
          Choose Your Garage Access
        </motion.h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg">
          Flexible plans built for hobbyists, serious builders, and professional mechanics.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-3xl p-8 border ${
              plan.featured
                ? "border-red-500 bg-red-500/10 scale-[1.02]"
                : "border-white/10 bg-white/5"
            }`}
          >
            {plan.featured && (
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-red-600 text-xs font-medium">
                Most Popular
              </div>
            )}

            <div className="mb-4">{plan.icon}</div>
            <h2 className="text-2xl font-bold">{plan.name}</h2>

            <div className="mt-3 flex items-end gap-1">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className="text-zinc-400 mb-1">{plan.period}</span>
            </div>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-zinc-300">
                  <Check size={18} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/signup"
              className={`mt-8 block text-center py-4 rounded-2xl font-medium ${
                plan.featured
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Choose Plan
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto py-24 text-center">
        <h3 className="text-3xl md:text-5xl font-black">
          Need a custom commercial plan?
        </h3>
        <p className="text-zinc-400 mt-4">
          Perfect for mobile mechanics, shops, and fleet operators.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl"
        >
          Contact Sales
        </Link>
      </section>
    </div>
  );
}