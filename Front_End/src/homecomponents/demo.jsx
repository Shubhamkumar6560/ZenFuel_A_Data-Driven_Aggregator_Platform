import React, { useState } from "react";
import vegetarianImg from "../assets/veg.jpg";
import nonVegImg from "../assets/nonveg.jpg";
import bgImage from "../assets/dish.jpg"; // Add your background image here

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "moderate",
    preference: "vegetarian"
  });

  const [calories, setCalories] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMealPlan = (calories, preference) => {
    const calorieTier = calories < 1800 ? "low" : calories < 2500 ? "medium" : "high";

    const plans = {
      vegetarian: {
        low: {
          breakfast: "Oats + banana + almond milk",
          lunch: "Mixed veggie salad + dal + chapati",
          dinner: "Quinoa + tofu stir fry + salad",
          snacks: "Fruit bowl, nuts, coconut water"
        },
        medium: {
          breakfast: "Poha + curd + apple",
          lunch: "Brown rice + chana curry + salad",
          dinner: "Vegetable pulao + paneer curry",
          snacks: "Smoothie, peanut butter toast"
        },
        high: {
          breakfast: "Paratha + curd + banana",
          lunch: "Paneer bhurji + rice + dal",
          dinner: "Rajma chawal + salad + curd",
          snacks: "Milkshake, nuts, granola"
        }
      },
      nonveg: {
        low: {
          breakfast: "Boiled eggs + toast + fruit",
          lunch: "Grilled chicken salad + rice",
          dinner: "Fish curry + steamed veggies",
          snacks: "Yogurt, nuts, boiled egg"
        },
        medium: {
          breakfast: "Omelette + toast + smoothie",
          lunch: "Chicken curry + chapati + salad",
          dinner: "Fish + quinoa + spinach",
          snacks: "Fruits, yogurt, sandwich"
        },
        high: {
          breakfast: "Chicken sandwich + milk",
          lunch: "Biryani + boiled eggs + raita",
          dinner: "Roast chicken + mashed potatoes",
          snacks: "Protein bar, peanut butter toast"
        }
      }
    };

    return plans[preference][calorieTier];
  };

  const calculateCalories = () => {
    const { weight, height, age, gender, activity } = formData;

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityFactor = {
      low: 1.2,
      moderate: 1.55,
      high: 1.9
    };

    const totalCalories = Math.round(bmr * activityFactor[activity]);
    setCalories(totalCalories);
    setMealPlan(getMealPlan(totalCalories, formData.preference));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, filter: "brightness(0.7)" }}
      ></div>

      {/* Black Fade Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-3xl w-full bg-white bg-opacity-90 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Personalized Diet Planner
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="low">Low Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="high">High Activity</option>
          </select>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </div>

        <button
          className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
          onClick={calculateCalories}
        >
          Generate Diet Plan
        </button>

        {calories && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center">
              Daily Caloric Needs: {calories} kcal
            </h3>
            <div className="flex flex-col md:flex-row mt-4 gap-6 items-center">
              <img
                src={formData.preference === "vegetarian" ? vegetarianImg : nonVegImg}
                alt="Meal"
                className="w-64 h-40 object-cover rounded-md shadow"
              />
              <div>
                <h4 className="font-bold text-lg mb-2 text-teal-600">
                  Suggested Meal Plan
                </h4>
                <ul className="list-disc pl-6 text-gray-800">
                  <li>
                    <strong>Breakfast:</strong> {mealPlan.breakfast}
                  </li>
                  <li>
                    <strong>Lunch:</strong> {mealPlan.lunch}
                  </li>
                  <li>
                    <strong>Dinner:</strong> {mealPlan.dinner}
                  </li>
                  <li>
                    <strong>Snacks:</strong> {mealPlan.snacks}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanner;
