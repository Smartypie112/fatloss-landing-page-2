import React from "react";
import { Check, Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-blue-700 py-14 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Main Bonus Card */}
        <div className="bg-blue-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-blue-600">

          {/* Badge */}
          <div className="inline-block bg-orange-500 text-white text-xs font-semibold px-5 py-2 rounded-full mb-4">
            LIMITED TIME BONUS
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Join Today & Get Free Extras
          </h2>

          {/* Bonus List */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-orange-400 mt-1" />
              <p className="text-base text-blue-100">
                Free <span className="font-semibold">"Ultimate Meal Prep"</span> Guide ($49 Value)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-orange-400 mt-1" />
              <p className="text-base text-blue-100">
                Access to Private Community
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-orange-400 mt-1" />
              <p className="text-base text-blue-100">
                30-Day Results Guarantee
              </p>
            </div>
          </div>

          {/* Risk Free Card */}
          <div className="mt-10 flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full text-center">

              <Shield className="w-10 h-10 text-orange-500 mx-auto mb-3" />

              <h3 className="text-xl font-bold text-gray-800">
                Risk-Free
              </h3>

              <p className="mt-3 text-gray-600 text-base">
                Try it for 30 days. If you don’t love it, get your money back.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}