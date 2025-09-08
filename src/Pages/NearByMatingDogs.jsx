import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const NearbyMatingDogs = () => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [nearbyDogs, setNearbyDogs] = useState([]);

  const handleSearchNearbyDogs = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dogMate/getDogForMating",
        { longitude, latitude, maxDistanceInKm: maxDistance },
        { withCredentials: true }
      );
      setNearbyDogs(data.nearbyDogs);
      toast.success(data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch nearby dogs"
      );
    }
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-6 shadow-lg rounded-lg w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Find Nearby Dogs for Mating
        </h2>
        <form onSubmit={handleSearchNearbyDogs} className="space-y-4">
          <input
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="number"
            placeholder="Max Distance (km)"
            value={maxDistance}
            onChange={(e) => setMaxDistance(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Search Nearby Dogs
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {nearbyDogs.length > 0 ? (
          nearbyDogs.map((dog) => (
            <motion.div
              key={dog._id}
              className="bg-white p-4 shadow rounded-lg"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={dog.dogImage?.url || "/placeholder.jpg"}
                alt={dog.dogName}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{dog.dogName}</h3>
              <p className="text-gray-600">Breed: {dog.dogBreed}</p>
              <p className="text-gray-600">Age: {dog.dogAge}</p>
              <p className="text-gray-600">Gender: {dog.dogGender}</p>
              <p className="text-gray-600">Location: {dog.dogLocation}</p>
              <p className="text-gray-600">Nature: {dog.dogNature}</p>
              <p className="text-gray-600">
                Animal Aggression: {dog.animalAggression}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No nearby dogs found. Try searching!
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default NearbyMatingDogs;
