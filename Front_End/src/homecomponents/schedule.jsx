import React from "react";

const randomNews = [
  {
    title: "5 Benefits of Working Out at Home",
    description: "Learn how exercising at home can improve your health and save time.",
    url: "https://example.com/benefits-home-workouthttps://www.fitnessgallery.com/blog/exercise-tips/benefits-of-exercising-at-home/",
  },
  {
    title: "Top 10 Home Exercises for Beginners",
    description: "Start your fitness journey with these simple exercises anyone can do.",
    url: "https://example.com/top-home-exercisehttps://nyboneandjoint.com/the-benefits-of-home-exercise/https://www.healthline.com/health/fitness-exercise/at-home-workoutss",
  },
  {
    title: "How to Stay Motivated for Home Workouts",
    description: "Tips and tricks to keep your workout routine consistent without a gym.",
    url: "https://example.com/motivation-home-workouthttps://www.gaiam.com/blogs/discover/5-ways-to-stay-motivated-to-exercise-regularly",
  },
];

const gymSchedule = [
  { day: "Monday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Tuesday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Wednesday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Thursday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Friday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Saturday", open: "8:00 AM", close: "8:00 PM" },
  { day: "Sunday", open: "8:00 AM", close: "6:00 PM" },
];

const backgroundImageUrl = "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg?auto=compress&cs=tinysrgb&w=1920";

const SchedulePage = () => {
  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
        Gym News, Videos & Schedule
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto bg-black bg-opacity-70 rounded-lg p-8">
        {/* Left Section: News + Videos */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Gym News & Videos</h2>

          {/* News */}
          <ul className="space-y-5 mb-8 max-h-[350px] overflow-y-auto pr-3">
            {randomNews.map((item, index) => (
              <li key={index} className="border-b border-white/30 pb-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-semibold text-lg"
                >
                  {item.title}
                </a>
                <p className="text-white/80 mt-1">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* Videos */}
          <div className="grid gap-6">
            <iframe
              className="w-full h-48 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/UBMk30rjy0o"
              title="Full Body Home Workout"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full h-48 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/2pLT-olgUJs"
              title="10-Minute Beginner Workout"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Right Section: Gym Schedule */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Gym Opening Times</h2>
          <table className="w-full text-left border-collapse bg-white bg-opacity-20 rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-black bg-opacity-50 text-white">
                <th className="p-4">Day</th>
                <th className="p-4">Open</th>
                <th className="p-4">Close</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {gymSchedule.map(({ day, open, close }, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white bg-opacity-10" : ""}
                >
                  <td className="p-4">{day}</td>
                  <td className="p-4">{open}</td>
                  <td className="p-4">{close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SchedulePage;
