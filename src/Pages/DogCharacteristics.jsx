// import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const DogCharacteristics = () => {
//   const [dogCharacteristics, setDogCharacteristics] = useState("");



//   const navigateTo = useNavigate();

//   const getAllDogCharacteristics = async () => {
//     try {

//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/dogCharacteristics/getAllBreeds",
//         { withCredentials: true }
//       );
//       setDogCharacteristics(data.dogCharacteristics);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const handleAvatarImage1 = (e, setPreview, setFile) => {
//   //   const file = e.target.files[0];
//   //   const reader = new FileReader();
//   //   reader.readAsDataURL(file);
//   //   reader.onload = () => {
//   //     setPreview(reader.result);
//   //     setFile(file);
//   //   };
//   // };

//   // const addDogCharacteristics = async (e) => {
//   //   const formData = new FormData();
//   //     formData.append("coat", coat);
//   //     formData.append("size", size);
//   //     formData.append("temperament", temperament);
//   //     formData.append("breed", breed);
//   //     formData.append("energyLevel", energyLevel);
//   //     formData.append("exerciseNeeds", exerciseNeeds);
//   //     formData.append("image1Avatar", image1Avatar);
//   //     formData.append("trainingNeeds", trainingNeeds);
//   //     formData.append("nature", nature);
//   //     formData.append("animalAggression", animalAggression);
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await axios.post(
//   //       "http://localhost:3000/api/v1/dogCharacteristics/post",
//   //       formData,
//   //       {
//   //         withCredentials: true,
//   //         headers: { "Content-Type": "multipart/form-data" },
//   //       }
//   //     );
//   //     getAllDogCharacteristics();
//   //     toast.success(data.message);
//   //     setCoat("");
//   //     setSize("");
//   //     setTemperament("");
//   //     setEnergyLevel("");
//   //     setBreed("");
//   //     setExerciseNeeds("");
//   //     setImage1Avatar("");
//   //     setImage1AvatarPreview("");
//   //     setTrainingNeeds("");
//   //     setNature("");
//   //     setAnimalAggression("");
//   //   } catch (error) {
//   //     toast.error(error.response.data.message);
//   //   }
//   // };

//   useEffect(() => {
//     getAllDogCharacteristics();
//   }, []);

//   return (
//     // <div className="bg-purple-200">
//     //   <div className="max-w-2xl bg-white mx-auto mt-10 p-6  shadow-md rounded-lg">
//     //     <h1 className="text-3xl font-bold text-purple-600 mb-6 mt-12 text-center">
//     //       Create Dog Characteristics
//     //     </h1>

//     //     {/* For Admin-> */}

//     //     <form onSubmit={addDogCharacteristics} className="space-y-4">

    
            
//     //         <div className="flex flex-col items-center">
//     //           <img
//     //             src={
//     //               image1AvatarPreview ? image1AvatarPreview : "/docHolder.jpg"
//     //             }
//     //             alt="Image1 Avatar"
//     //             className="w-32 h-32 rounded-full bg-purple-200 text-white object-cover mb-4"
//     //           />
//     //           <label className="flex items-center cursor-pointer bg-purple-500 text-white py-2 px-4 rounded hover:bg-green-600">
//     //             <FaRegImage className="mr-2" /> Upload Image
//     //             <input
//     //               type="file"
//     //               onChange={handleAvatarImage1}
//     //               className="hidden"
//     //             />
//     //           </label>
//     //         </div>

//     //         <div className="flex items-center mb-4">
//     //         <select
//     //           value={coat}
//     //           onChange={(e) => setCoat(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">coat</option>
//     //           <option value="small">small</option>
//     //           <option value="medium">medium</option>
//     //           <option value="large">large</option>
//     //         </select>
//     //       </div>

//     //       <div className="flex items-center mb-4">
//     //         <select
//     //           value={exerciseNeeds}
//     //           onChange={(e) => setExerciseNeeds(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">Exercise Needs</option>
//     //           <option value="LessNeeded">LessNeeded</option>
//     //           <option value="DailyNeeded">DailyNeeded</option>
//     //           <option value="DailyTwoTimes">DailyTwoTimes</option>
//     //         </select>
//     //       </div>

         

          

//     //       <div className="flex items-center mb-4">
//     //         <select
//     //           value={size}
//     //           onChange={(e) => setSize(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">size</option>
//     //           <option value="small">small</option>
//     //           <option value="medium">medium</option>
//     //           <option value="large">large</option>
//     //         </select>
//     //       </div>

//     //       <div className="flex items-center mb-4">
            
//     //         <input
//     //           value={breed}
//     //           onChange={(e) => setBreed(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         />
               
              
//     //       </div>

//     //       <div className="flex items-center mb-4">

//     //         <select
//     //           value={temperament}
//     //           onChange={(e) => setTemperament(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">temperament</option>
//     //           <option value="Friendly">Friendly</option>
//     //           <option value="Aggressive">Aggressive</option>
//     //           <option value="AnimalAggressive">AnimalAggressive</option>
//     //         </select>
//     //       </div>

//     //       <div className="flex items-center mb-4">
//     //         <FaBath className="mr-2 text-purple-500" />
//     //         <select
//     //           value={energyLevel}
//     //           onChange={(e) => setEnergyLevel(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">Energy Level</option>
//     //           <option value="Low">Low</option>
//     //           <option value="Medium">Medium</option>
//     //           <option value="High">NHigh</option>
//     //         </select>
//     //       </div>



//     //       <div className="flex items-center mb-4">
//     //         <FaUserFriends className="mr-2 text-purple-500" />
//     //         <select
//     //           value={animalAggression}
//     //           onChange={(e) => setAnimalAggression(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">AnimalAggression</option>
//     //           <option value="Not">Not</option>
//     //           <option value="Yes">Yes</option>
//     //           <option value="NotMuch">NotMuch</option>
//     //         </select>
//     //       </div>

//     //       <div className="flex items-center mb-4">
//     //         <FaUtensils className="mr-2 text-purple-500" />
//     //         <select
//     //           value={nature}
//     //           onChange={(e) => setNature(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">nature</option>
//     //           <option value="FriendlyWithEveryone">FriendlyWithEveryone</option>
//     //           <option value="NotFrindlyWithOtherDogs">NotFrindlyWithOtherDogs</option>
//     //         </select>
//     //       </div>

//     //       <div className="flex items-center mb-4">
//     //         <FaBed className="mr-2 text-purple-500" />
//     //         <select
//     //           value={trainingNeeds}
//     //           onChange={(e) => setTrainingNeeds(e.target.value)}
//     //           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//     //         >
//     //           <option value="">Training Requirements</option>
//     //           <option value="Daily1Hour">Daily1Hour</option>
//     //           <option value="Daily2Hour">Daily2Hour</option>
//     //           <option value="Daily3Hour">Daily3Hour</option>
//     //           <option value="Daily4Hour">Daily4Hour</option>
//     //         </select>
//     //       </div>
//     //       <button
//     //         type="submit"
//     //         className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center justify-center"
//     //       >
//     //         <FaSave className="mr-2" /> Add Dog Characteristics
//     //       </button>
//     //     </form>

//     //     <div className="mt-10">
//     //       <h2 className="text-2xl font-bold text-purple-600 mb-4">
//     //         Dog Characteristics
//     //       </h2>
//     //       {dogCharacteristics && dogCharacteristics.length > 0 ? (
//     //         dogCharacteristics.map((characteristics) => (
//     //           <div
//     //             key={characteristics._id}
//     //             className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white-50"
//     //           >
//     //             <h3 className="text-lg flex justify-center items-center font-bold mb-2 text-purple-600">
//     //               {characteristics.breed}
//     //             </h3>

//     //             <div className="grid grid-cols-2 gap-4">
//     //               {/* Image */}
//     //               <img
//     //                 src={
//     //                   characteristics.image1Avatar &&
//     //                   characteristics.image1Avatar.url
//     //                 }
//     //                 alt="characteristics Image 1"
//     //                 className="w-full h-48 object-cover rounded mb-4"
//     //               />
//     //             </div>

//     //             <div
//     //               className="flex items-center mb-2"
//     //               value={characteristics.coat}
//     //             >
//     //               {characteristics.coat}
//     //             </div>

//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 size: {characteristics.size}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 exerciseNeeds: {characteristics.exerciseNeeds}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 nature: {characteristics.nature}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 animalAggression:{" "}
//     //                 {characteristics.animalAggression}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 temperament: {characteristics.temperament}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 energyLevel: {characteristics.energyLevel}
//     //               </span>
//     //             </div>
//     //             <div className="flex items-center mb-2">
//     //               <span className="w-full px-2 py-1 border border-gray-300 rounded">
//     //                 Pg/Flat: {characteristics.trainingNeeds}
//     //               </span>
//     //             </div>
//     //           </div>
//     //         ))
//     //       ) : (
//     //         <h2 className="text-center text-white-500">
//     //           No Dog Characteristics Found
//     //         </h2>
//     //       )}
//     //     </div>
//     //   </div>
//     // </div>



// <div className=" p-8 min-h-screen flex flex-col items-center">
//       <div className="max-w-2xl bg-white mx-auto mt-10 p-6 shadow-md rounded-lg">
      

//         <div className="mt-10">
//           <h2 className="text-2xl font-bold  mb-4">
//             Dog Characteristics
//           </h2>
//           {dogCharacteristics && dogCharacteristics.length > 0 ? (
//             dogCharacteristics.map((characteristics) => (
//               <div
//                 key={characteristics._id}
//                 className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white-50"
//               >
//                 <h3 className="text-lg flex justify-center items-center font-bold mb-2 text-slate-900">
//                   {characteristics.breed}
//                 </h3>

//                 <div className="grid grid-cols-2 gap-4">
//                   {/* Image */}
//                   <img
//                     src={
//                       characteristics.image1Avatar &&
//                       characteristics.image1Avatar.url
//                     }
//                     alt="characteristics Image 1"
//                     className="w-full h-48 object-cover rounded mb-4"
//                   />
//                 </div>

//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Coat: {characteristics.coat}
//                   </span>
//                 </div>

//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Size: {characteristics.size}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Exercise Needs: {characteristics.exerciseNeeds}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Nature: {characteristics.nature}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Animal Aggression: {characteristics.animalAggression}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Temperament: {characteristics.temperament}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Energy Level: {characteristics.energyLevel}
//                   </span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="w-full px-2 py-1 border border-gray-300 rounded">
//                     Training Needs: {characteristics.trainingNeeds}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h2 className="text-center text-white-500">
//               No Dog Characteristics Found
//             </h2>
//           )}
//         </div>
//       </div>
//     </div>




//   );
// };

// export default DogCharacteristics;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DogCharacteristics = () => {
  const [dogCharacteristics, setDogCharacteristics] = useState([]);
  const navigateTo = useNavigate();

  const getAllDogCharacteristics = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/dogCharacteristics/getAllBreeds",
        { withCredentials: true }
      );
      setDogCharacteristics(data.dogCharacteristics);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load dog characteristics.");
    }
  };

  useEffect(() => {
    getAllDogCharacteristics();
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10">
          Dog Characteristics Gallery
        </h1>

        {dogCharacteristics && dogCharacteristics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogCharacteristics.map((dog) => (
              <div
                key={dog._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={dog.image1Avatar?.url || "/placeholder.jpg"}
                  alt={dog.breed}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-purple-700 mb-3 text-center">
                    {dog.breed}
                  </h2>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>
                      <span className="font-semibold">Coat:</span> {dog.coat}
                    </li>
                    <li>
                      <span className="font-semibold">Size:</span> {dog.size}
                    </li>
                    <li>
                      <span className="font-semibold">Exercise Needs:</span> {dog.exerciseNeeds}
                    </li>
                    <li>
                      <span className="font-semibold">Nature:</span> {dog.nature}
                    </li>
                    <li>
                      <span className="font-semibold">Animal Aggression:</span> {dog.animalAggression}
                    </li>
                    <li>
                      <span className="font-semibold">Temperament:</span> {dog.temperament}
                    </li>
                    <li>
                      <span className="font-semibold">Energy Level:</span> {dog.energyLevel}
                    </li>
                    <li>
                      <span className="font-semibold">Training Needs:</span> {dog.trainingNeeds}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <h2 className="text-xl text-gray-600">No Dog Characteristics Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DogCharacteristics;
