import React from "react";
import { ArrowDown } from "lucide-react";

export default function Path() {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description:
        "We analyze your current lifestyle, goals, and body type.",
      circleStyle: "bg-blue-600 text-white shadow-lg",
    },
    {
      number: 2,
      title: "Custom Plan",
      description:
        "Receive your personalized workout and nutrition strategy.",
      circleStyle:
        "border-2 border-blue-600 text-blue-600 bg-white",
    },
    {
      number: 3,
      title: "Coaching",
      description:
        "Weekly check-ins and adjustments to keep you on track.",
      circleStyle:
        "border-2 border-blue-600 text-blue-600 bg-white",
    },
    {
      number: 4,
      title: "Transformation",
      description:
        "Achieve your dream physique and maintain it for life.",
      circleStyle: "bg-orange-600 text-white shadow-lg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your Path to Success
        </h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A simple, proven 4-step process designed to get you from
          where you are to where you want to be.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 max-w-2xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-10 w-full text-center">
              {/* Circle */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full text-xl font-semibold ${step.circleStyle}`}
              >
                {step.number}
              </div>

              <h3 className="mt-10 text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Arrow (not after last item) */}
            {index !== steps.length - 1 && (
              <div className="mt-6 text-gray-300 text-3xl"><ArrowDown className="w-6 h-6 text-gray-400" /></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}