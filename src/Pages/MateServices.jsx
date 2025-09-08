import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";

const MateServices = () => {
  const [dogImage, setDogImage] = useState("");
  const [dogColor, setDogColor] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogLocation, setDogLocation] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [dogNature, setDogNature] = useState("");
  const [animalAggression, setAnimalAggression] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogImagePreview, setDogImagePreview] = useState("");
  const [dogMate, setDogMate] = useState([]);
  const [breed, setBreed] = useState("");

  const navigateTo = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!breed.trim()) return;
    navigateTo(`/dogs/breed/${breed.trim()}`);
  };

  const getMateDogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/dogMate/getAllDogs",
        { withCredentials: true }
      );
      setDogMate(data.dogMate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImagePreview = (e, setPreview, setFile) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      setFile(file);
    };
  };

  const addMateDog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dogLocation", dogLocation);
    formData.append("dogImage", dogImage);
    formData.append("dogColor", dogColor);
    formData.append("dogName", dogName);
    formData.append("dogBreed", dogBreed);
    formData.append("dogAge", dogAge);
    formData.append("dogNature", dogNature);
    formData.append("dogWeight", dogWeight);
    formData.append("animalAggression", animalAggression);
    formData.append("dogGender", dogGender);
    formData.append("dogDescription", dogDescription);


    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dogMate/post",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setDogColor("");
      setAnimalAggression("");
      setDogAge("");
      setDogNature("");
      setDogBreed("");
      setDogLocation("");
      setDogWeight("");
      setDogName("");
      setDogImage("");
      setDogImagePreview("");
      setDogDescription("");
      setDogGender("");

      toast.success(data.message);
      getMateDogs();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getMateDogs();
  }, []);

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-100 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 shadow-lg rounded-xl w-full max-w-4xl"
      >
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Post Your Dog’s Details 🐾
        </h3>
        <form onSubmit={addMateDog} className="space-y-6">
          <div className="flex flex-col items-center">
            <motion.img
              src={dogImagePreview ? dogImagePreview : "/imgPL.webp"}
              alt="dog preview"
              className="w-32 h-32 rounded-full bg-gray-200 object-cover mb-4 shadow"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <label className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              <HiOutlinePhotograph className="inline mr-2" />
              Upload Image
              <input
                type="file"
                onChange={(e) =>
                  handleImagePreview(e, setDogImagePreview, setDogImage)
                }
                className="hidden"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Dog Name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Breed"
              value={dogBreed}
              onChange={(e) => setDogBreed(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Age"
              value={dogAge}
              onChange={(e) => setDogAge(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Location"
              value={dogLocation}
              onChange={(e) => setDogLocation(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Color"
              value={dogColor}
              onChange={(e) => setDogColor(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Weight"
              value={dogWeight}
              onChange={(e) => setDogWeight(e.target.value)}
              className="input"
            />
          </div>



          <textarea
            rows="4"
            placeholder="Describe your dog..."
            value={dogDescription}
            onChange={(e) => setDogDescription(e.target.value)}
            className="input"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={dogGender}
              onChange={(e) => setDogGender(e.target.value)}
              className="input"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              value={dogNature}
              onChange={(e) => setDogNature(e.target.value)}
              className="input"
            >
              <option value="">Select Nature</option>
              <option value="Friendly">Friendly</option>
              <option value="NotFriendly">Not Friendly</option>
            </select>
            <select
              value={animalAggression}
              onChange={(e) => setAnimalAggression(e.target.value)}
              className="input"
            >
              <option value="">Animal Aggression?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
          >
            <FaPaw className="mr-2" />
            Add Dog Details
          </button>
        </form>
      </motion.div>

      <motion.section
        className="mt-10 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Available Mates 🐶
        </h3>
        {dogMate && dogMate.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogMate.map((dog) => (
              <motion.div
                key={dog._id}
                className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                {dog && dog.dogImage && (
                  <img
                    src={dog.dogImage.url}
                    alt={dog.dogName}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                )}

                <h4 className="text-lg font-bold mb-1">{dog.dogName}</h4>
                <p className="text-gray-600 text-sm mb-1">{dog.dogDescription}</p>
                <p className="text-gray-600 text-sm">Age: {dog.dogAge}</p>
                <p className="text-gray-600 text-sm">Gender: {dog.dogGender}</p>
                <p className="text-gray-600 text-sm">Color: {dog.dogColor}</p>
                <p className="text-gray-600 text-sm">Location: {dog.dogLocation}</p>
                <p className="text-gray-600 text-sm">Breed: {dog.dogBreed}</p>
                <p className="text-gray-600 text-sm">Weight: {dog.dogWeight}</p>
                <p className="text-gray-600 text-sm">Nature: {dog.dogNature}</p>
                <p className="text-gray-600 text-sm">
                  Animal Aggression: {dog.animalAggression}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No Dogs Found</p>
        )}
      </motion.section>

      <form
        onSubmit={handleSearch}
        className="mt-10 w-full max-w-md flex gap-2"
      >
        <input
          type="text"
          placeholder="Search dog by breed..."
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default MateServices;
