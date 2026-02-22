import { Scale, Wheat, Dumbbell } from "lucide-react";

export default function Problems() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-20 font-serif">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-black tracking-tight text-gray-900 mb-6 text-red-500 pb-5">
            Why Plan Not Working?
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6">
              <Scale className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't lose stubborn fat?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              You're eating less and moving more, but the scale won't budge.
              It's frustrating and demotivating.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
              <Wheat className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tired of diets that fail?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Keto, Paleo, Intermittent Fasting... you've tried them all,
              but the weight always comes back.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <Dumbbell className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Confused about workouts?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Information overload is real. You don't know what exercises are
              actually effective for your body type.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}