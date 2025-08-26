import React, { useEffect, useState } from "react";

const gymLocations = [
  {
    name: "IronFit Gym",
    address: "123 Main St, New Delhi, India",
    mapLink: "https://www.google.com/maps?q=123+Main+St,+New+Delhi",
    image: "https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "State-of-the-art equipment with personal training support and sauna.",
    lat: 28.6139,
    lng: 77.2090
  },
  {
    name: "MuscleZone Fitness",
    address: "45 Sector-21, Gurgaon, Haryana",
    mapLink: "https://www.google.com/maps?q=45+Sector-21,+Gurgaon",
    image: "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "High-intensity strength training classes and group workouts.",
    lat: 28.4595,
    lng: 77.0266
  },
  {
    name: "Beast Mode Gym",
    address: "789 Park Avenue, Noida, Uttar Pradesh",
    mapLink: "https://www.google.com/maps?q=789+Park+Avenue,+Noida",
    image: "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Popular for CrossFit and HIIT sessions led by certified coaches.",
    lat: 28.5355,
    lng: 77.3910
  },
  {
    name: "ZenBody Wellness",
    address: "88 Yoga Street, Pune, Maharashtra",
    mapLink: "https://www.google.com/maps?q=88+Yoga+Street,+Pune",
    image: "https://images.pexels.com/photos/4164644/pexels-photo-4164644.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Ideal for yoga lovers with peaceful ambiance and clean interiors.",
    lat: 18.5204,
    lng: 73.8567
  },
  {
    name: "PowerHouse Gym",
    address: "22 Gym Hub, Bengaluru, Karnataka",
    mapLink: "https://www.google.com/maps?q=22+Gym+Hub,+Bengaluru",
    image: "https://images.pexels.com/photos/6388514/pexels-photo-6388514.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Modern gym with advanced machines, lockers, and cafe.",
    lat: 12.9716,
    lng: 77.5946
  },
  {
    name: "Urban Pump Fitness",
    address: "202 Muscle Lane, Hyderabad",
    mapLink: "https://www.google.com/maps?q=202+Muscle+Lane,+Hyderabad",
    image: "https://images.pexels.com/photos/6388373/pexels-photo-6388373.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Popular among bodybuilders, offers tailored coaching plans.",
    lat: 17.3850,
    lng: 78.4867
  },
  {
    name: "FitNest Studio",
    address: "11 Health Block, Chandigarh",
    mapLink: "https://www.google.com/maps?q=11+Health+Block,+Chandigarh",
    image: "https://images.pexels.com/photos/6295996/pexels-photo-6295996.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Trendy fitness studio with cardio, dance, and wellness classes.",
    lat: 30.7333,
    lng: 76.7794
  },
];

// Haversine formula to calculate distance between two lat/lng points
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const GymLocations = () => {
  const [sortedGyms, setSortedGyms] = useState(gymLocations);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const gymsWithDistance = gymLocations.map((gym) => {
          const distance = getDistance(latitude, longitude, gym.lat, gym.lng);
          return { ...gym, distance };
        });

        // Sort by distance
        gymsWithDistance.sort((a, b) => a.distance - b.distance);
        setSortedGyms(gymsWithDistance);
        setLoading(false);
      },
      (err) => {
        console.warn("Geolocation not allowed or failed:", err);
        setLoading(false); // fallback to unsorted
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-3xl font-bold text-black text-center mt-36 mb-10">
        🏋️‍♀️ Gym Locations Near You
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Fetching your location...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedGyms.map((gym, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={gym.image}
                alt={gym.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-2">
                  {gym.name}
                </h3>
                <p className="text-gray-600 mb-2">{gym.description}</p>
                <p className="text-gray-500 text-sm mb-1">{gym.address}</p>
                {gym.distance && (
                  <p className="text-gray-500 text-sm mb-2">
                    📍 {gym.distance.toFixed(1)} km away
                  </p>
                )}
                <a
                  href={gym.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔗 View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GymLocations;
