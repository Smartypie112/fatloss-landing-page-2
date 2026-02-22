import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah",
    age: 29,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdtFe_PwW2it10QD3PxLQ-56KP-f_F3fk7tZKR4PLJQ&s=10",
    quote:
      "I lost 12 kg in just 10 weeks! The meal plans were so easy to follow, and the workouts actually fit into my busy schedule.",
    results: ["↓ 12kg Lost", "↓ 15% Body Fat"],
  },
  {
    name: "Mike",
    age: 34,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyQ8UvpI7lNJO35fO0BA3aW8ANENLDSjWDWoVLnadsg&s=10",
    quote:
      "Best decision I ever made. The coaching support was incredible. I finally have the abs I've wanted since college.",
    results: ["↓ 8kg Lost", "↑ 4kg Muscle"],
  },
];

const Proof = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-black">
          Real People. Real Results.
        </h2>

        <p className="text-gray-600 text-lg">
          Join thousands who have already transformed their lives.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto space-y-16">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Single Transformation Image */}
            <div className="relative">
              <img
                src={item.image}
                alt="transformation"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Name + Stars */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-black">
                  {item.name}, {item.age}
                </h3>

                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{item.quote}"
              </p>

              {/* Results Badges */}
              <div className="flex flex-wrap gap-4">
                {item.results.map((res, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-full text-sm"
                  >
                    {res}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proof;