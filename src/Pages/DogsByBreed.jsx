// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";

// const DogsByBreed = () => {
//   const { breed } = useParams();
//   const [dogs, setDogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDogs = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:3000/api/v1/dogMate/getDogsByBreed/${breed}`, {
//         withCredentials: true,
//       });
//       setDogs(data.dogs);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to load dogs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDogs();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   if (dogs.length === 0) return <p>No dogs found for breed "{breed}"</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dogs of breed: {breed}</h1>

//       {dogs.map((dog) => (
//         <motion.div
//           key={dog._id}
//           className="bg-white p-4 rounded shadow mb-4"
//           whileHover={{ scale: 1.02 }}
//         >
          
//           <h2 className="text-xl font-semibold">{dog.dogName}</h2>
//           {dog && dog.dogImage && (
//                   <img
//                     src={dog.dogImage.url}
//                     alt={dog.dogName}
//                     className="w-full h-48 object-cover rounded mb-3"
//                   />
//                 )}
//           <p>{dog.dogDescription}</p>
//           <p><strong>Location:</strong> {dog.dogLocation}</p>
//           {/* Add more fields as needed */}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default DogsByBreed;



import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";


const DogsByBreed = () => {
  const { breed } = useParams();
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDogs = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/dogMate/getDogsByBreed/${breed}`,
        {
          withCredentials: true,
        }
      );
      setDogs(data.dogs);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load dogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, [breed]); // added breed as dependency in case route param changes

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading...</p>
      </div>
    );

  if (dogs.length === 0)
    return (
      <div className="text-center mt-10 text-gray-500">
        <p className="text-lg">
          No dogs found for breed <span className="font-semibold">"{breed}"</span>
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        🐶 Dogs of Breed: {breed}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {dogs.map((dog) => (
          <motion.div
            key={dog._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {dog.dogImage?.url ? (
              <img
                src={dog.dogImage.url}
                alt={dog.dogName}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {dog.dogName}
              </h2>
              <p className="text-gray-600 text-sm flex-grow">
                {dog.dogDescription || "No description provided."}
              </p>
              <div className="mt-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  📍 {dog.dogLocation}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
              

                <Link to='/contact'> <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition">
                  Contact
                </button></Link>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DogsByBreed;
