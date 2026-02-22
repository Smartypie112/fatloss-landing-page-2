import React from "react";
import { Dumbbell, Salad, Flame, HeartHandshake } from "lucide-react";

const solutions = [
  {
    icon: <Flame size={28} />,
    title: "Personalized Fat-Loss & Muscle Plans",
    description:
      "Custom plans tailored to your body type, goals, and lifestyle so you actually see results.",
    bg: "bg-red-100 text-red-600",
  },
  {
    icon: <Dumbbell size={28} />,
    title: "Quick Home & Gym Workouts",
    description:
      "Efficient workouts you can do anywhere — no confusion, no wasted time.",
    bg: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Salad size={28} />,
    title: "Easy-to-Follow Nutrition",
    description:
      "Simple, practical meal guidance that fits your routine — no extreme dieting.",
    bg: "bg-green-100 text-green-600",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Support & Motivation",
    description:
      "Stay consistent with guidance, accountability, and motivation every step of the way.",
    bg: "bg-purple-100 text-purple-600",
  },
];

const Solutions = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-5xl font-black font-anton tracking-tight text-green-600 mb-3">
          SOLUTIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-gray-500 tracking-tight mb-6">
          Here’s How We Fix It
        </h2>

      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md p-8 text-left text-black hover:shadow-lg transition"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6 ${item.bg}`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;