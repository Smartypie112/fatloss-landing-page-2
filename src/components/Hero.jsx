import React from 'react';
import { Flame } from "lucide-react";


export default function Hero({ openForm }) {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<Flame className="w-4 h-4 text-orange-500" /> NEW COHORT STARTING SOON
        </div>

        {/* Heading */}
<h1 className="text-6xl md:text-8xl font-black text-black tracking-tight leading-11 drop-shadow-sm">
          Transform <br />
          from{" "}<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fat
          </span>{" "}
          to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Fit
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10">
          Personal coaching, simple workouts & meal plans designed to reshape
          your body and life. No confusion, just results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center sm:flex-row gap-4 items-start sm:items-center">
          
          {/* Primary CTA */}
          <button onClick={openForm} className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 flex items-center gap-3 hover:bg-white hover:text-black">
            Start Your Transformation
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex -space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt=""
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
              +2k
            </div>
          </div>

          <p className="text-gray-600 text-sm md:text-base">
            Join <span className="font-semibold text-gray-900">2,000+</span>{" "}
            happy members
          </p>
        </div>
      </div>
    </section>
  );
}