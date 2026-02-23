import React, { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

export default function Apply({ closeForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally send data to backend

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
      onClick={closeForm}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-md p-8 md:p-10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            {/* FORM */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Apply Now
              </h2>
              <p className="text-gray-500 mt-2">
                Fill the details below to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="+91 98765 43210"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg transition"
              >
                Apply Now
              </button>

            </form>
          </>
        ) : (
          <>
            {/* SUCCESS BOX */}
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />

              <h2 className="text-2xl font-bold text-gray-800">
                You're In! 🎉
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                We’ve sent you an email with the next steps.
                <br />
                Please check your inbox (and spam folder).
              </p>

              <button
                onClick={closeForm}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}