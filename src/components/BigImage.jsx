import React from "react";
import { Check } from "lucide-react";

export default function BigImage() {
  return (
    <section className="w-full px-6 py-16 bg-white pt-0">
      <div className="max-w-6xl mx-auto">

        {/* Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* Main Image */}
          <img
            src="https://cdn-blog.superprof.com/blog_us/wp-content/uploads/2021/08/know-how-to-start-a-career-in-personal-training-scaled.jpg" // replace with your image path
            alt="Personal training session"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* Floating Guarantee Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
            
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
              <Check className="text-green-600 w-5 h-5" />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                100% Guaranteed
              </p>
              <p className="text-sm text-gray-500">
                Results or we work for free
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}