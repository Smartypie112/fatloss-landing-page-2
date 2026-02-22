import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA({ openForm }) {
  return (
    <section className="relative py-24 px-6 text-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6Map2a9JBdRulIzLKC_u_zqGe5pRJKv5NeuKe6P9WpmzBVqhzypJXjM&s=10" // replace with your image path
          alt="Fitness background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Ready to Build Your{" "}
          <span className="text-orange-500">Dream Physique?</span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          Don’t wait for "someday". Your future self is begging you to start
          now. Spots for this month's cohort are filling up fast.
        </p>

        {/* Primary Button */}
        <div className="mt-12">
          <button onClick={openForm} className="group bg-orange-600 hover:bg-orange-500 transition px-10 py-5 rounded-full text-lg font-semibold shadow-[0_0_40px_rgba(234,88,12,0.6)] inline-flex items-center gap-3">
            Join Program Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-sm text-gray-400">
          No credit card required for consultation.
        </p>

      </div>
    </section>
  );
}