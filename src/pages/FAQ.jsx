import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const data = [
    ["Do I need tools?", "No. Equipment is included."],
    ["Can I work commercially?", "Yes with qualifying plans."],
    ["Is it public?", "No. Members only."],
  ];

  return (
    <div className="pt-28 md:pt-32 px-4 md:px-6 max-w-3xl mx-auto">

      <h1 className="text-4xl md:text-6xl font-black text-center">FAQ</h1>

      <div className="space-y-4 mt-12">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 cursor-pointer"
          >
            <p>{item[0]}</p>
            {open === i && (
              <p className="text-zinc-400 mt-3">{item[1]}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}