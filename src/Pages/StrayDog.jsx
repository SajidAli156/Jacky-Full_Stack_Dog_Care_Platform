// import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AiOutlineFileImage, AiFillDelete } from "react-icons/ai";
// import { motion } from "framer-motion";

// const StrayDog = () => {
//   const [avatar, setAvatar] = useState("");
//   const [dogColor, setDogColor] = useState("");
//   const [dogDesc, setdogDesc] = useState("");
//   const [dogBehaviour, setDogBehaviour] = useState("");
//   const [address, setAddress] = useState("");
//   const [dogGender, setDogGender] = useState("");
//   const [avatarPreview, setAvatarPreview] = useState("");

//   const [strayDog, setStrayDog] = useState([]);

//   const navigateTo = useNavigate();

//   const getAllStrayDogs = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/strayDog/getAllPosts",
//         { withCredentials: true }
//       );
//       setStrayDog(data.strayDog);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleImagePreview = (e, setPreview, setFile) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setPreview(reader.result);
//       setFile(file);
//     };
//   };

//   const addStrayDog = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("dogBehaviour", dogBehaviour);
//     formData.append("address", address);
//     formData.append("avatar", avatar);
//     formData.append("dogColor", dogColor);
//     formData.append("dogGender", dogGender);

//     if (dogDesc.length > 0) {
//       formData.append("dogDesc", dogDesc);
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:3000/api/v1/strayDog/createPost",
//         formData,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setDogColor("");
//       setAvatar("");
//       setAvatarPreview("");
//       setdogDesc("");
//       setDogGender("");
//       toast.success(data.message);
//       getAllStrayDogs(); // Refresh the blog list after adding a new one
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     getAllStrayDogs();
//   }, []);

//   return (
//     // <div className="bg-purple-200">
//     //   <div>
//     //     <h3>Post stray Dog details</h3>
//     //     <form onSubmit={addStrayDog}>
//     //       <div style={{ display: "flex", flexDirection: "column" }}>
//     //         <label>Dog MAIN IMAGE</label>
//     //         <img
//     //           src={docAvatarPreview ? `${docAvatarPreview}` : "/imgPL.webp"}
//     //           alt="mainImg"
//     //           className="mainImg"
//     //         />
//     //         <input
//     //           type="file"
//     //           onChange={(e) =>
//     //             handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
//     //           }
//     //           style={{ border: "none" }}
//     //         />
//     //       </div>

//     //       <div>
//     //         <input
//     //           type="text"
//     //           placeholder="Dog Behaviour"
//     //           value={dogBehaviour}
//     //           onChange={(e) => setDogBehaviour(e.target.value)}
//     //         />
//     //         <input
//     //           type="text"
//     //           placeholder="Adress"
//     //           value={address}
//     //           onChange={(e) => setAddress(e.target.value)}
//     //         />
//     //         <input
//     //           type="text"
//     //           placeholder="dog Colour"
//     //           value={dogColor}
//     //           onChange={(e) => setDogColor(e.target.value)}
//     //         />

//     //         <textarea
//     //           rows="10"
//     //           placeholder="Blog First Sub Paragraph Comes Here..."
//     //           value={dogDesc}
//     //           onChange={(e) => setdogDesc(e.target.value)}
//     //         />
//     //       </div>

//     //       <div>
//     //         <select
//     //           id="dogGender"
//     //           name="dogGender"
//     //           className="w-full p-2 text-white-700 leading-tight focus:outline-none"
//     //           value={dogGender}
//     //           onChange={(e) => setDogGender(e.target.value)}
//     //         >
//     //           <option value="">Select dogGender</option>
//     //           <option value="Male">Male</option>
//     //           <option value="Female">Female</option>
//     //         </select>
//     //       </div>

//     //       <button type="submit">Add dog details</button>
//     //     </form>
//     //   </div>

//     //   {/* to admin */}
      
//     //   <section>
//     //     {strayDog && strayDog.length > 0
//     //       ? strayDog.map((dog) => (
//     //           <div key={dog._id}>
//     //             {dog.docAvatar && <img src={dog.docAvatar.url} alt="blogImg" />}

//     //             {dog.oneImage && <img src={dog.oneImage.url} alt="blogImg" />}
//     //             <h4>{dog.dogDesc}</h4>
//     //             {dog.twoImage && <img src={dog.twoImage.url} alt="blogImg" />}
//     //             <h4>{dog.age}</h4>
//     //             {dog.threeImage && (
//     //               <img src={dog.threeImage.url} alt="blogImg" />
//     //             )}

//     //             <h4>{dog.dogGender}</h4>

//     //             <h4>{dog.dogColor}</h4>
//     //             <h4>{dog.address}</h4>
//     //             <h4>{dog.dogBehaviour}</h4>
//     //             <h4>{dog.dogDesc}</h4>
//     //           </div>
//     //         ))
//     //       : "No Dogs.."}
//     //   </section>
//     // </div>


//     <div className="py-12 min-h-screen flex items-center justify-center">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-4">
//         <h3 className="text-3xl font-bold text-white-700 mb-6 text-center">
//           Post Stray Dog details
//         </h3>
//         <form onSubmit={addStrayDog} className="space-y-4">
//           <div className="flex flex-col items-center">
//             <label className="text-white-700 text-sm font-bold mb-2">
//               <AiOutlineFileImage className="inline-block text-white-500 mr-2" />
//               Dog MAIN IMAGE
//             </label>
//             <motion.img
//               src={avatarPreview ? avatarPreview : "/imgPL.webp"}
//               alt="mainImg"
//               className="mainImg h-48 w-48 object-cover shadow-xl rounded"
//               whileHover={{ scale: 1.05 }}
//             />
//             <input
//               type="file"
//               onChange={(e) => handleImagePreview(e, setAvatarPreview, setAvatar)}
            
//             />
//           </div>

//           <div className="space-y-2">
//             <input
//               type="text"
//               placeholder="Dog Behaviour"
//               value={dogBehaviour}
//               onChange={(e) => setDogBehaviour(e.target.value)}
//               className="w-full p-2 text-white-700 leading-tight focus:outline-none bg-white-200 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-2 text-white-700 leading-tight focus:outline-none bg-white-200 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Dog Colour"
//               value={dogColor}
//               onChange={(e) => setDogColor(e.target.value)}
//               className="w-full p-2 text-white-700 leading-tight focus:outline-none bg-white-200 rounded"
//             />
//             <textarea
//               rows="5"
//               placeholder="Dog Description"
//               value={dogDesc}
//               onChange={(e) => setdogDesc(e.target.value)}
//               className="w-full p-2 text-white-700 leading-tight focus:outline-none bg-white-200 rounded"
//             />
//           </div>

//           <div>
//             <select
//               id="dogGender"
//               name="dogGender"
//               value={dogGender}
//               onChange={(e) => setDogGender(e.target.value)}
//               className="w-full p-2 text-white-700 leading-tight focus:outline-none bg-white-200 rounded"
//             >
//               <option value="">Select dogGender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 flex items-center justify-center"
//           >
//             <AiOutlineFileImage className="mr-2" /> Add Dog details
//           </button>
//         </form>


//         {/* for admin */}

//         <section>
//           {strayDog && strayDog.length > 0 ? (
//             strayDog.map((dog) => (
//               <motion.div
//                 key={dog._id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white-50"
//               >
//                 {dog.avatar && (
//                   <motion.img
//                     src={dog.avatar.url}
//                     alt="Dog Image"
//                     className="w-full h-48 object-cover rounded mb-2"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                 )}
//                 <h4 className="text-xl font-semibold text-white-700 mb-2">{dog.dogDesc}</h4>
//                 <div className="flex space-x-2">
//                   {dog.oneImage && (
//                     <motion.img
//                       src={dog.oneImage.url}
//                       alt="Dog Image"
//                       className="w-1/3 h-24 object-cover rounded"
//                       whileHover={{ scale: 1.05 }}
//                     />
//                   )}
//                   {dog.twoImage && (
//                     <motion.img
//                       src={dog.twoImage.url}
//                       alt="Dog Image"
//                       className="w-1/3 h-24 object-cover rounded"
//                       whileHover={{ scale: 1.05 }}
//                     />
//                   )}
//                   {dog.threeImage && (
//                     <motion.img
//                       src={dog.threeImage.url}
//                       alt="Dog Image"
//                       className="w-1/3 h-24 object-cover rounded"
//                       whileHover={{ scale: 1.05 }}
//                     />
//                   )}
//                 </div>
//                 <div className="flex flex-wrap space-x-2 mt-2">
//                   <div className="flex items-center">
//                     <strong className="mr-1">Description:</strong> {dog.dogDesc}
//                   </div>
//                   <div className="flex items-center">
//                     <strong className="mr-1">Gender:</strong> {dog.dogGender}
//                   </div>
//                   <div className="flex items-center">
//                     <strong className="mr-1">Colour:</strong> {dog.dogColor}
//                   </div>
//                   <div className="flex items-center">
//                     <strong className="mr-1">Address:</strong> {dog.address}
//                   </div>
//                   <div className="flex items-center">
//                     <strong className="mr-1">Behaviour:</strong> {dog.dogBehaviour}
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <h2 className="text-center text-white-500">No Dogs..</h2>
//           )}
//         </section>
//       </div>
//     </div>

    


    
//   );
// };

// export default StrayDog;
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineFileImage } from "react-icons/ai";
import { motion } from "framer-motion";

const StrayDog = () => {
  const [avatar, setAvatar] = useState("");
  const [dogColor, setDogColor] = useState("");
  const [dogDesc, setDogDesc] = useState("");
  const [dogBehaviour, setDogBehaviour] = useState("");
  const [address, setAddress] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const [strayDogs, setStrayDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getAllStrayDogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/strayDog/getAllPosts",
        { withCredentials: true }
      );
      setStrayDogs(data.strayDog || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch stray dogs.");
    }
  };

  const handleImagePreview = (e, setPreview, setFile) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const addStrayDog = async (e) => {
    e.preventDefault();
    if (!avatar || !dogBehaviour || !address || !dogColor || !dogGender) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("dogBehaviour", dogBehaviour);
    formData.append("address", address);
    formData.append("avatar", avatar);
    formData.append("dogColor", dogColor);
    formData.append("dogGender", dogGender);
    if (dogDesc.trim()) formData.append("dogDesc", dogDesc);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/strayDog/createPost",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(data.message);
      // Reset form
      setDogBehaviour("");
      setAddress("");
      setAvatar("");
      setAvatarPreview("");
      setDogColor("");
      setDogGender("");
      setDogDesc("");
      getAllStrayDogs();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add dog.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStrayDogs();
  }, []);

  return (
    <div className="py-12 min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Post Stray Dog Details
        </h2>

        <form onSubmit={addStrayDog} className="space-y-4">
          <div className="flex flex-col items-center">
            <label className="text-gray-700 mb-2 flex items-center">
              <AiOutlineFileImage className="mr-2" /> Dog Main Image
            </label>
            <motion.img
              src={avatarPreview || "/imgPL.webp"}
              alt="Preview"
              className="h-48 w-48 object-cover rounded shadow"
              whileHover={{ scale: 1.05 }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImagePreview(e, setAvatarPreview, setAvatar)}
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Dog Behaviour"
              value={dogBehaviour}
              onChange={(e) => setDogBehaviour(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Dog Colour"
              value={dogColor}
              onChange={(e) => setDogColor(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
            <select
              value={dogGender}
              onChange={(e) => setDogGender(e.target.value)}
              className="p-2 border rounded w-full"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <textarea
            placeholder="Dog Description"
            value={dogDesc}
            onChange={(e) => setDogDesc(e.target.value)}
            className="p-2 border rounded w-full"
            rows="4"
          />

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            } flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Dog Details"}
          </button>
        </form>

        <hr className="my-6" />

        <h3 className="text-2xl font-semibold text-gray-700 text-center">
          Reported Stray Dogs
        </h3>

        {strayDogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strayDogs.map((dog) => (
              <motion.div
                key={dog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border rounded-lg shadow p-4 space-y-2"
              >
                {dog.avatar && (
                  <motion.img
                    src={dog.avatar.url}
                    alt="Dog"
                    className="w-full h-40 object-cover rounded"
                    whileHover={{ scale: 1.05 }}
                  />
                )}
                <h4 className="text-lg font-semibold text-gray-700">
                  {dog.dogDesc || "No Description"}
                </h4>
                <p>
                  <strong>Gender:</strong> {dog.dogGender}
                </p>
                <p>
                  <strong>Colour:</strong> {dog.dogColor}
                </p>
                <p>
                  <strong>Behaviour:</strong> {dog.dogBehaviour}
                </p>
                <p>
                  <strong>Address:</strong> {dog.address}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No dogs reported yet.</p>
        )}
      </div>
    </div>
  );
};

export default StrayDog;
