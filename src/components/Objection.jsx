import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Objection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "I have no time. Can I still do this?",
      answer:
        "Absolutely. We have specialized high-intensity workouts that take as little as 20 minutes. If you can scroll social media for 20 minutes, you have time for this program.",
    },
    {
      question: "I've failed before. Why is this different?",
      answer:
        "Most programs fail because they rely on willpower alone. We rely on systems, accountability, and science. You get step-by-step coaching so you're never left guessing.",
    },
    {
      question: "Do I have to give up my favorite foods?",
      answer:
        "No! We teach flexible dieting. You'll learn how to fit pizza, burgers, or ice cream into your plan while still hitting your fat loss goals.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most clients feel more energy in week 1 and see visible changes by week 3. Significant transformation typically happens within the 8–12 week window.",
    },
    {
      question: "Do I need to go to the gym?",
      answer:
        "No. You can train at home or in the gym. We customize everything based on your lifestyle and access to equipment.",
    },
    {
      question: "Is this sustainable long-term?",
      answer:
        "Yes. Our focus is building habits you can maintain for life — not crash diets or extreme routines.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700">
          Still Unsure?
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          what's holding you back.
        </p>
      </div>

      <div className="mt-16 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              {openIndex === index ? (
                <Minus className="w-6 h-6 text-blue-600" />
              ) : (
                <Plus className="w-6 h-6 text-blue-600" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}