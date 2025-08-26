import React from "react";
import heroImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-5xl mt-40 font-bold text-black drop-shadow-lg">About ZenFuel</h1>
      </div>

      <section className="max-w-5xl px-6 py-12 text-center">
        <p className="text-xl text-white">
          At <span className="text-teal-600 font-semibold">ZenFuel</span>, we're more than just a gym — we're a community driven by passion, purpose, and performance.
          Our mission is to help you unlock your full potential, whether you're just starting or pushing toward new goals.
        </p>
      </section>

      <section className="max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Philosophy</h2>
          <p className="text-white leading-relaxed">
            We believe that true wellness is a balance between body and mind. ZenFuel provides a supportive environment where cutting-edge training meets mental focus and mindfulness.
            Our curated programs help improve strength, flexibility, endurance, and confidence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose ZenFuel?</h2>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>🏋️ Certified expert trainers for every fitness level</li>
            <li>🧘 Diverse classes: HIIT, Yoga, Strength, Cardio & more</li>
            <li>🕒 24/7 flexible membership plans</li>
            <li>🧼 State-of-the-art equipment and clean facilities</li>
            <li>💬 Friendly, inclusive, and motivating atmosphere</li>
          </ul>
        </div>
      </section>

  
      <section className="w-full bg-teal-600 text-white py-10 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us & Fuel Your Transformation</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you're looking to lose weight, gain muscle, improve mental clarity, or simply feel better — ZenFuel is your partner in progress.
        </p>
      </section>
    </div>
  );
};

export default About;
