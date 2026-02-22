import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

const ExitIntent = ({ forceShow = false }) => {
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (forceShow) {
      setShow(true);
      return;
    }

    if (sessionStorage.getItem("exitIntentShown")) return;

    const triggerExit = () => {
      if (!sessionStorage.getItem("exitIntentShown")) {
        setShow(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const scrollPercent = (scrollTop + windowHeight) / fullHeight;

      if (scrollPercent > 0.7) {
        if (lastScrollY.current - scrollTop > 80) {
          triggerExit();
        }
      }

      lastScrollY.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceShow]);

  const handleStay = () => {
    setShow(false);
    const testimonials = document.getElementById("testimonials");
    testimonials?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
      
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Wait! Before You Leave 👀
        </h3>

        {/* Subtext */}
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          See real transformations and results before making your decision.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleStay}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition duration-300"
        >
          Show Testimonials
        </button>

      </div>
    </div>
  );
};

export default ExitIntent;