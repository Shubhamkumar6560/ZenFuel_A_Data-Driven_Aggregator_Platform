import React, { useState } from "react";
import { toast } from "react-toastify";
import gym from "../assets/fitgym.jpg";

const jobListings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Work on React-based web apps and UI/UX improvements.",
  },
  {
    title: "Fitness Trainer",
    location: "New Delhi",
    type: "Part-time",
    description: "Conduct in-person training sessions and track user progress.",
  },
  {
    title: "Data Analyst",
    location: "Remote",
    type: "Internship",
    description: "Analyze gym usage data and generate reports.",
  },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${gym})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left - Job Listings */}
        <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">🚀 Career Opportunities</h2>
          {jobListings.map((job, idx) => (
            <div
              key={idx}
              className="mb-6 p-5 border rounded-xl shadow hover:shadow-lg transition-all bg-white cursor-pointer hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                📍 {job.location} | 🕒 {job.type}
              </p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>

        {/* Right - Application Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-black bg-opacity-60 text-white">
          <h2 className="text-3xl font-bold mb-6">📩 Apply Now</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            <select
              name="position"
              required
              className="w-full border border-gray-300 text-black px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            >
              <option value="">Select Position</option>
              {jobListings.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full border border-gray-300 text-black px-4 py-3 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              onChange={handleChange}
            />
            {formData.resume && (
              <p className="text-sm text-green-300">📎 {formData.resume.name}</p>
            )}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
