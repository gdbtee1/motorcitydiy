export default function HowItWorks() {
  const steps = [
    "Select access tier",
    "Reserve facility time",
    "Enter assigned bay",
    "Complete build session",
  ];

  return (
    <div className="pt-28 md:pt-32 px-4 md:px-6 max-w-7xl mx-auto">

      <h1 className="text-4xl md:text-6xl font-black text-center">
        Operational Flow
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <p>{i + 1}. {s}</p>
          </div>
        ))}
      </div>

    </div>
  );
}