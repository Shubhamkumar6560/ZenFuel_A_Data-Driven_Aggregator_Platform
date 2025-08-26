import React from "react";
import { Link } from "react-router-dom";
import mountain from "../assets/green.jpg"; // Make sure to have a mountain image at this path or adjust accordingly

const Price = () => {
  const handlePayment = (amount) => {
    const options = {
      key: "rzp_test_9rYZ3QSYClrSLX", // Replace with your Razorpay key
      amount: amount * 100,
      currency: "INR",
      name: "ZenFuel",
      description: "Membership Purchase",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "ZenFuel User",
        email: "shubhamkumar65604@gmail.com",
        contact: "",
      },
      theme: {
        color: "#00b894",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${mountain})` }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 mt-40 text-white drop-shadow-lg">
        Choose Your Membership
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-7xl mx-auto">
        {/* Member Plan */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 text-center cursor-pointer
          transform transition hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-2">Membership</h3>
          <p className="text-3xl font-bold text-green-600 mb-4">₹2499</p>
          <ul className="text-left mb-6">
            <li>✔ Gym Access</li>
            <li>✔ Weekly Diet Plan</li>
            <li>✔ Basic Trainer Support</li>
          </ul>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
            onClick={() => handlePayment(2499)}
          >
            Join Now
          </button>
        </div>

        {/* Membership Plus */}
        <div
          className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/3 text-center border-2 border-yellow-500
          cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-2">Membership Plus</h3>
          <p className="text-3xl font-bold text-yellow-500 mb-4">₹2999</p>
          <ul className="text-left mb-6">
            <li>✔ All Member Benefits</li>
            <li>✔ Personal Coach</li>
            <li>✔ Personalized Meal Plan</li>
            <li>✔ Progress Tracking Dashboard</li>
          </ul>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition mb-3"
            onClick={() => handlePayment(2999)}
          >
            Upgrade Now
          </button>
          <Link to="/demo">
            <button className="bg-black text-white font-semibold py-2 px-4 rounded w-full">
              Look Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Fun Activities */}
      <div className="max-w-7xl mx-auto mt-16 text-white text-center px-4">
        <h3 className="text-3xl font-bold mb-6 drop-shadow-md">💪 Fun Activities to Keep You Motivated</h3>
        <ul className="space-y-3 text-lg drop-shadow-md">
          <li>🎯 Weekly challenges with prizes</li>
          <li>🧘‍♂️ Virtual group yoga sessions</li>
          <li>🏅 Leaderboards for most workouts</li>
          <li>📅 Daily motivational quotes and tips</li>
          <li>📸 Share your progress photos & stories</li>
        </ul>
      </div>

      {/* Music Gallery Section */}
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg">
          🎧 Personal Music Gallery
        </h3>
        <p className="text-center text-gray-200 mb-6 max-w-xl mx-auto drop-shadow-md">
          Boost your workouts with curated music picks! Tap play and power through your session.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beast Mode",
              artist: "Spotify Workout Hits",
              desc: "High-energy tracks for intense sessions.",
            },
            {
              title: "Zen Yoga",
              artist: "Calm Studio",
              desc: "Soothing background for meditation or yoga.",
            },
            {
              title: "Cardio Flow",
              artist: "Pumped Beats",
              desc: "Perfect rhythm for your cardio sprints.",
            },
            {
              title: "Heavy Lifting",
              artist: "Iron Mix",
              desc: "Rock and metal power-up anthems.",
            },
            {
              title: "Evening Cooldown",
              artist: "Chillify",
              desc: "Relax and recover after training.",
            },
            {
              title: "Dance Burn",
              artist: "Zumba Mix",
              desc: "Latin vibes and fast beats for fun workouts.",
            },
          ].map((track, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transform hover:scale-[1.02] transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-semibold text-blue-600">{track.title}</h4>
                <button className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-sm rounded-full transition">
                  ▶️ Play
                </button>
              </div>
              <p className="text-sm text-gray-500">By {track.artist}</p>
              <p className="mt-2 text-gray-700">{track.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
