import React, { useState, useEffect } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const workouts = {
  Cardio: { types: ["Running", "Cycling", "Jump Rope"], calories: 300 },
  "Weight Training": { types: ["Chest", "Legs", "Back", "Shoulders"], calories: 200 },
  Yoga: { types: ["Hatha", "Vinyasa", "Power"], calories: 150 },
  CrossFit: { types: ["WOD", "EMOM", "Tabata"], calories: 350 },
  HIIT: { types: ["Sprints", "Dumbbell", "Core"], calories: 400 },
  Rest: { types: ["Stretching", "Walk"], calories: 50 },
};

const GymPlanner = () => {
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [completedDays, setCompletedDays] = useState([]);
  const [expandedDay, setExpandedDay] = useState(null);

  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem("gymPlan")) || {};
    const savedCompleted = JSON.parse(localStorage.getItem("completedDays")) || [];
    setWorkoutPlan(savedPlan);
    setCompletedDays(savedCompleted);
  }, []);

  useEffect(() => {
    localStorage.setItem("gymPlan", JSON.stringify(workoutPlan));
    localStorage.setItem("completedDays", JSON.stringify(completedDays));
  }, [workoutPlan, completedDays]);

  const toggleCompletion = (day) => {
    const updated = completedDays.includes(day)
      ? completedDays.filter((d) => d !== day)
      : [...completedDays, day];
    setCompletedDays(updated);
  };

  const handleWorkoutChange = (day, value) => {
    setWorkoutPlan((prev) => ({ ...prev, [day]: value }));
  };

  const toggleExpand = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const totalSelected = Object.keys(workoutPlan).length;
  const progress = Math.round((completedDays.length / (totalSelected || 1)) * 100);

  // Calculate total calories burned for completed days only
  const totalCaloriesBurned = completedDays.reduce((total, day) => {
    const workout = workoutPlan[day];
    if (workout && workouts[workout]) {
      return total + workouts[workout].calories;
    }
    return total;
  }, 0);

  return (
    <div
      className="min-h-screen p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-70 rounded-lg max-w-5xl mx-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">🏋️‍♂️ Gym Planner</h1>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
            <div
              className="bg-green-500 h-6 text-center font-semibold text-black transition-width duration-500"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
          <p className="mt-2 text-center text-gray-300">
            {completedDays.length} days done out of {totalSelected} planned
          </p>

          {/* Calories Info */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Total Calories Burned</h3>
              <p className="text-2xl text-green-400">{totalCaloriesBurned} kcal</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold">Calories per Completed Day</h3>
              <ul>
                {completedDays.length === 0 && <li>No completed days yet</li>}
                {completedDays.map((day) => {
                  const workout = workoutPlan[day];
                  const calories = workout && workouts[workout]?.calories;
                  return (
                    <li key={day}>
                      <strong>{day}:</strong> {calories || 0} kcal
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {days.map((day) => {
            const selectedWorkout = workoutPlan[day] || "";
            const isCompleted = completedDays.includes(day);
            const isExpanded = expandedDay === day;

            return (
              <div
                key={day}
                className={`bg-gray-900 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-[1.03] ${
                  isCompleted ? "border-4 border-green-500" : "border border-gray-700"
                }`}
                onClick={() => toggleExpand(day)}
              >
                <div className="p-5 flex flex-col space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{day}</h3>
                    <div
                      className={`px-3 py-1 rounded-full font-semibold text-sm ${
                        isCompleted ? "bg-green-600" : "bg-gray-700"
                      }`}
                    >
                      {isCompleted ? "Done ✓" : "Pending"}
                    </div>
                  </div>

                  {/* Workout summary */}
                  <p className="text-gray-300 min-h-[40px]">
                    {selectedWorkout ? selectedWorkout : "No workout selected"}
                  </p>

                  {/* If expanded, show dropdown and mark button */}
                  {isExpanded && (
                    <>
                      <select
                        value={selectedWorkout}
                        onChange={(e) => handleWorkoutChange(day, e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <option value="">Select Workout</option>
                        {Object.keys(workouts).map((w) => (
                          <option key={w} value={w}>
                            {w}
                          </option>
                        ))}
                      </select>

                      {selectedWorkout && (
                        <ul className="mt-2 text-sm text-green-400 list-disc list-inside">
                          {workouts[selectedWorkout].types.map((type) => (
                            <li key={type}>{type}</li>
                          ))}
                          <li>
                            <strong>Calories Burned:</strong>{" "}
                            {workouts[selectedWorkout].calories} kcal (approx.)
                          </li>
                        </ul>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCompletion(day);
                        }}
                        className={`mt-4 w-full py-2 rounded font-semibold transition-colors ${
                          isCompleted
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        {isCompleted ? "Mark as Not Done" : "Mark as Done"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GymPlanner;
