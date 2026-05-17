export default function Photos() {
  return (
    <div className="pt-28 md:pt-32 px-4 md:px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <section className="text-center">

        <p className="text-red-500 uppercase tracking-[5px] text-xs">
          Facility Gallery
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4">
          MotorCity Visuals
        </h1>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          A look inside the workspace, equipment, and builder environment.
          Designed to showcase real automotive culture and future studio content.
        </p>

      </section>

      {/* FEATURE GRID */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">

        {[
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2000",
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
        ].map((img, i) => (
          <div
            key={i}
            className="h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={img}
              alt="Garage"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </section>

      {/* SECOND GRID (LIFESTYLE / BRAND FEEL) */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">

        {[
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000",
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000",
        ].map((img, i) => (
          <div
            key={i}
            className="h-80 md:h-[420px] rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src={img}
              alt="Workshop"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </section>

      {/* FUTURE PRODUCTION PLACEHOLDER */}
      <section className="mt-20 p-10 md:p-16 rounded-3xl border border-white/10 bg-white/5 text-center">

        <h2 className="text-2xl md:text-4xl font-black">
          Studio Gallery Coming Soon
        </h2>

        <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
          This section will showcase professional photography,
          member builds, and featured automotive projects.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">

          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 md:h-32 rounded-xl bg-white/10"
            />
          ))}

        </div>

      </section>

    </div>
  );
}