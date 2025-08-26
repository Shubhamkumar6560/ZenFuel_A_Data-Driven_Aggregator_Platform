import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import gym from "../assets/fitgym.jpg";

const BookTrainer = () => {
  const [trainer, setTrainer] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [booking, setBooking] = useState(null);
  const [status, setStatus] = useState("Scheduled");
  const [countdown, setCountdown] = useState("");

  const trainers = ["Arjun Singh", "Priya Mehra", "David Roy", "Anjali Sharma"];

  // Load saved booking
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trainerBooking"));
    if (saved) {
      setBooking(saved);
      if (saved.status) setStatus(saved.status);
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    if (!booking || status === "Done") return;

    const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = bookingDateTime - now;

      if (diff <= 0) {
        setStatus("Done");
        const updated = { ...booking, status: "Done" };
        setBooking(updated);
        localStorage.setItem("trainerBooking", JSON.stringify(updated));
        setCountdown("Session completed");
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [booking, status]);

  const handleBooking = () => {
    if (!trainer || !date || !time) {
      toast.warn("Please fill all fields");
      return;
    }
    const newBooking = { trainer, date, time, status: "Scheduled" };
    setBooking(newBooking);
    setStatus("Scheduled");
    localStorage.setItem("trainerBooking", JSON.stringify(newBooking));
    toast.success("Trainer booked successfully!");
  };

  const cancelBooking = () => {
    setBooking(null);
    localStorage.removeItem("trainerBooking");
    setTrainer("");
    setDate("");
    setTime("");
    setCountdown("");
    toast.info("Booking canceled");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${gym})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-5xl grid md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Form Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">📆 Book a Trainer</h2>

          {!booking ? (
            <>
              <label className="mb-1 font-semibold text-gray-700">Trainer</label>
              <select
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                className="mb-4 p-3 border rounded w-full focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Choose --</option>
                {trainers.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <label className="mb-1 font-semibold text-gray-700">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mb-4 p-3 border rounded w-full focus:ring-2 focus:ring-blue-500"
              />

              <label className="mb-1 font-semibold text-gray-700">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mb-6 p-3 border rounded w-full focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleBooking}
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition w-full"
              >
                Book Now
              </button>
            </>
          ) : (
            <div className="p-4 bg-green-100 rounded-lg text-gray-900">
              <h4 className="text-xl font-semibold text-green-700 mb-2">✅ Booking Confirmed</h4>
              <p><strong>Trainer:</strong> {booking.trainer}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Status:</strong> {status}</p>
              {status !== "Done" && <p><strong>Countdown:</strong> {countdown}</p>}

              <button
                onClick={cancelBooking}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Cancel Booking
              </button>
            </div>
          )}
        </div>

        {/* Right Decorative Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-10">
          <h3 className="text-2xl font-bold mb-4">🏋️ Stay Fit at Home</h3>
          <p className="text-lg text-center mb-2">
            Book your personal trainer and take control of your health goals today. Easy, quick, and effective!
          </p>

          {booking && status !== "Done" && (
            <div className="mt-4 text-center bg-white bg-opacity-10 px-4 py-2 rounded-lg">
              <p className="text-sm">⏳ Time until session:</p>
              <p className="text-lg font-semibold">{countdown}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTrainer;
