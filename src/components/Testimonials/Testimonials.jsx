import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Amazing developer! Delivered a stunning and fast web app. Highly recommend.",
  },
  {
    name: "Jane Smith",
    feedback: "Creative and professional. Great attention to detail!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gradient">Testimonials</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white/70 rounded-xl shadow-md hover:shadow-xl backdrop-blur-md"
          >
            <p className="italic">"{t.feedback}"</p>
            <h4 className="mt-4 font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
