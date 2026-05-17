import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-28 md:pt-32 px-4 md:px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <section className="text-center">

        <p className="text-red-500 uppercase tracking-[5px] text-xs">
          Contact Facility
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4">
          Let’s Get You Access
        </h1>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Reach out for membership applications, facility tours,
          or general questions about the garage.
        </p>

      </section>

      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-2 gap-8 mt-16">

        {/* CONTACT FORM */}
        <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5">

          <h2 className="text-2xl md:text-3xl font-bold">
            Request Access
          </h2>

          <p className="text-zinc-500 mt-3">
            Submit your information and our team will contact you.
          </p>

          <form
            action="https://formsubmit.co/access@motorcitydiy.com"
            method="POST"
            className="space-y-5 mt-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl bg-black border border-white/10"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl bg-black border border-white/10"
            />

            <input
              type="text"
              name="subject"
              placeholder="Membership Interest"
              className="w-full p-4 rounded-xl bg-black border border-white/10"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project or questions..."
              required
              className="w-full h-40 p-4 rounded-xl bg-black border border-white/10"
            />

            <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-medium transition">
              Submit Request
            </button>
          </form>

        </div>

        {/* INFO PANEL */}
        <div className="space-y-6">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
            <Building2 className="text-red-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Facility</p>
              <p className="text-zinc-500 text-sm mt-1">
                MotorCity DIY Garage
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
            <MapPin className="text-red-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-zinc-500 text-sm mt-1">
                Detroit, Michigan
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
            <Phone className="text-red-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-zinc-500 text-sm mt-1">
                (989) 733-0020
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
            <Mail className="text-red-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-zinc-500 text-sm mt-1">
                access@motorcitydiy.com
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
            <Clock className="text-red-500 flex-shrink-0" />
            <div>
              <p className="font-semibold">Hours</p>
              <p className="text-zinc-500 text-sm mt-1">
                24/7 Member Access
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="mt-20">

        <h2 className="text-3xl md:text-5xl font-black text-center">
          Visit the Facility
        </h2>

        <p className="text-zinc-500 text-center mt-4">
          Located in Detroit’s automotive industrial district
        </p>

        <div className="mt-8 rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="Detroit Facility Map"
            src="https://www.google.com/maps?q=Detroit,MI&output=embed"
            className="w-full h-[350px] md:h-[500px] grayscale contrast-125"
            loading="lazy"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="mt-24 border-t border-white/10 pt-16 text-center pb-10">

        <h2 className="text-3xl md:text-5xl font-black">
          Membership Is Limited
        </h2>

        <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
          Apply early to secure your preferred access tier and workspace availability.
        </p>

      </section>

    </div>
  );
}