import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPaw } from "react-icons/fa";

const AdoptTrainedDog = () => {
  const [mainImage, setMainImage] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [oneImage, setOneImage] = useState("");
  const [description, setDescription] = useState("");
  const [twoImage, setTwoImage] = useState("");
  const [age, setAge] = useState("");
  const [threeImage, setThreeImage] = useState("");
  const [gender, setGender] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [oneImagePreview, setOneImagePreview] = useState("");
  const [twoImagePreview, setTwoImagePreview] = useState("");
  const [threeImagePreview, setThreeImagePreview] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");

  const [trainedDog, setTrainedDog] = useState([]);

  const navigateTo = useNavigate();

  const getAllTrainedDogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/wantATrainedDog/getAllDogs",
        { withCredentials: true }
      );
      setTrainedDog(data.trainedDog);
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

  const addTrainedDog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("breed", breed);
    formData.append("name", name);
    formData.append("mainImage", mainImage);
    formData.append("color", color);
    formData.append("weight", weight);
    formData.append("age", age);
    formData.append("gender", gender);

    if (description.length > 0) {
      formData.append("description", description);
    }
    if (threeImage) {
      formData.append("threeImage", threeImage);
    }
    if (twoImage) {
      formData.append("twoImage", twoImage);
    }
    if (oneImage) {
      formData.append("oneImage", oneImage);
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/wantATrainedDog/postDetails",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setBreed("");
      setName("");
      setColor("");
      setWeight("");
      setPurpose("");

      setMainImage("");
      setMainImagePreview("");

      setDescription("");
      setOneImage("");
      setOneImagePreview("");

      setAge("");
      setTwoImage("");
      setTwoImagePreview("");

      setGender("");
      setThreeImage("");
      setThreeImagePreview("");
      toast.success(data.message);
      getAllTrainedDogs(); // Refresh the blog list after adding a new one
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllTrainedDogs();
  }, []);

  return (
    <section className="bg-swhite px-20 rounded-xl my-10 shadow-xl">
      {trainedDog && trainedDog.length > 0 ? (
        trainedDog.map((dog) => (
          <div key={dog._id} className="bg-white shadow-md rounded-lg overflow-hidden mb-8 p-4">
            <div className="flex flex-col md:flex-row">

              <div className="w-full md:w-2/3 md:pl-4">
                <h3 className="text-2xl font-bold  mb-2 flex items-center">
                  <FaPaw className="mr-2" />
                  {dog.name}
                </h3>
                <p className="textslate-900 text-lg mb-4">{dog.description}</p>

                <div className="flex space-x-4 mb-4">

                  {dog.mainImage && (
                    <img
                      src={dog.mainImage.url}
                      alt={dog.name}
                      className="w-full md:w-1/3 h-20 md:h-auto object-cover rounded-md"
                    />
                  )}

                  {dog.oneImage && (
                    <img
                      src={dog.oneImage.url}
                      alt="subParaOneImg"
                      className="w-full md:w-1/3 h-20 md:h-auto object-cover rounded-md"
                    />
                  )}
                  {dog.twoImage && (
                    <img
                      src={dog.twoImage.url}
                      alt="subParaTwoImg"
                      className="w-full md:w-1/3 h-20 md:h-auto object-cover rounded-md"
                    />
                  )}
                  {dog.threeImage && (
                    <img
                      src={dog.threeImage.url}
                      alt="subParaThreeImg"
                      className="w-full md:w-1/3 h-20 md:h-auto object-cover rounded-md"
                    />
                  )}
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-slate-900 text-lg"><span className="font-bold">Age:</span> {dog.age}</p>
                  <p className="text-slate-900 text-lg"><span className="font-bold">Breed:</span> {dog.breed}</p>
                  <p className="text-slate-900 text-lg"><span className="font-bold">Gender:</span> {dog.gender}</p>
                  <p className="text-slate-900 text-lg"><span className="font-bold">Color:</span> {dog.color}</p>
                  <p className="text-slate-900 text-lg"><span className="font-bold">Weight:</span> {dog.weight}</p>
                  <p className="text-slate-900 text-lg"><span className="font-bold">Purpose:</span> {dog.purpose}</p>
                </div>
              </div>
            </div>
             <Link to="/contact">
    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-2">
      <FaPaw className="text-lg" />
      <span>Contact for Adoption</span>
    </button>
  </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-purple-700 text-xl font-bold">No Trained Dogs..</p>
      )}

      
    </section>

  );
};

export default AdoptTrainedDog;
