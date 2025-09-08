// import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaPaw } from "react-icons/fa";
// import { motion } from "framer-motion";


// const Puppy = () => {
//   const [mainImage, setMainImage] = useState("");
//   const [color, setColor] = useState("");
//   const [weight, setWeight] = useState("");
//   const [oneImage, setOneImage] = useState("");
//   const [description, setDescription] = useState("");
//   const [twoImage, setTwoImage] = useState("");
//   const [age, setAge] = useState("");
//   const [threeImage, setThreeImage] = useState("");
//   const [gender, setGender] = useState("");
//   const [mainImagePreview, setMainImagePreview] = useState("");
//   const [oneImagePreview, setOneImagePreview] = useState("");
//   const [twoImagePreview, setTwoImagePreview] = useState("");
//   const [threeImagePreview, setThreeImagePreview] = useState("");
//   const [breed, setBreed] = useState("");
//   const [name, setName] = useState("");
//   const [purpose, setPurpose] = useState("");

//   const [puppies, setPuppies] = useState([]);

//   const navigateTo = useNavigate();

//   const getAllPuppies = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/puppyAdopt/getAllDetails",
//         { withCredentials: true }
//       );
//       setPuppies(data.puppies);
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

//   const addPuppy = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("breed", breed);
//     formData.append("name", name);
//     formData.append("mainImage", mainImage);
//     formData.append("color", color);
//     formData.append("weight", weight);
//     formData.append("age", age);
//     formData.append("gender", gender);
//     formData.append("purpose", purpose);

//     if (description.length > 0) {
//       formData.append("description", description);
//     }
//     if (threeImage) {
//       formData.append("threeImage", threeImage);
//     }
//     if (twoImage) {
//       formData.append("twoImage", twoImage);
//     }
//     if (oneImage) {
//       formData.append("oneImage", oneImage);
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:3000/api/v1/puppyAdopt/postDetails",
//         formData,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setBreed("");
//       setName("");
//       setColor("");
//       setWeight("");
      

//       setMainImage("");
//       setMainImagePreview("");

//       setDescription("");
//       setOneImage("");
//       setOneImagePreview("");

//       setAge("");
//       setTwoImage("");
//       setTwoImagePreview("");

//       setGender("");
//       setThreeImage("");
//       setThreeImagePreview("");
//       toast.success(data.message);
//       getAllPuppies(); // Refresh the blog list after adding a new one
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     getAllPuppies();
//   }, []);

//   return (
//     <div className="bg-purple-200">


      
     

 

// <section className="bg-white p-8">
//       {puppies && puppies.length > 0 ? (
//         puppies.map((puppy) => (
//           <motion.div
//             key={puppy._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden mb-8 p-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex flex-col md:flex-row">
//               {puppy.mainImage && (
//                 <img
//                   src={puppy.mainImage.url}
//                   alt={`${puppy.name}`}
//                   className="w-full md:w-1/3 object-cover rounded-md"
//                 />
//               )}
//               <div className="w-full md:w-2/3 p-4">
//                 <h3 className="text-2xl font-bold  mb-2 flex items-center">
//                   <FaPaw className="mr-2" />
//                   {puppy.name}
//                 </h3>
//                 <p className="text-slate-900 mb-2">{puppy.description}</p>
//                 <div className="flex space-x-4">
//                   {puppy.oneImage && (
//                     <img
//                       src={puppy.oneImage.url}
//                       alt="Image One"
//                       className="w-1/3 object-cover rounded-md"
//                     />
//                   )}
//                   {puppy.twoImage && (
//                     <img
//                       src={puppy.twoImage.url}
//                       alt="Image Two"
//                       className="w-1/3 object-cover rounded-md"
//                     />
//                   )}
//                   {puppy.threeImage && (
//                     <img
//                       src={puppy.threeImage.url}
//                       alt="Image Three"
//                       className="w-1/3 object-cover rounded-md"
//                     />
//                   )}
//                 </div>
//                 <div className="mt-4 text-lg space-y-2">
//                   <p className="text-slate-900 ">
//                     <span className="font-bold">Age:</span> {puppy.age}
//                   </p>
//                   <p className="text-slate-900 ">
//                     <span className="font-bold">Breed:</span> {puppy.breed}
//                   </p>
//                   <p className="text-slate-900 ">
//                     <span className="font-bold">Gender:</span> {puppy.gender}
//                   </p>
//                   <p className="text-slate-900 ">
//                     <span className="font-bold">Color:</span> {puppy.color}
//                   </p>
//                   <p className="text-slate-900 ">
//                     <span className="font-bold">Weight:</span> {puppy.weight}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))
//       ) : (
//         <motion.p
//           className="text-center text-purple-700 text-xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           No Puppies..
//         </motion.p>
//       )}
//     </section>
//     </div>

//   );
// };

// export default Puppy;



import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPaw } from "react-icons/fa";
import { motion } from "framer-motion";

const Puppy = () => {
  // const [mainImage, setMainImage] = useState("");
  // const [color, setColor] = useState("");
  // const [weight, setWeight] = useState("");
  // const [oneImage, setOneImage] = useState("");
  // const [description, setDescription] = useState("");
  // const [twoImage, setTwoImage] = useState("");
  // const [age, setAge] = useState("");
  // const [threeImage, setThreeImage] = useState("");
  // const [gender, setGender] = useState("");
  // const [mainImagePreview, setMainImagePreview] = useState("");
  // const [oneImagePreview, setOneImagePreview] = useState("");
  // const [twoImagePreview, setTwoImagePreview] = useState("");
  // const [threeImagePreview, setThreeImagePreview] = useState("");
  // const [breed, setBreed] = useState("");
  // const [name, setName] = useState("");
  // const [purpose, setPurpose] = useState("");

  const [puppies, setPuppies] = useState([]);

  const navigateTo = useNavigate();

  const getAllPuppies = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/puppyAdopt/getAllDetails",
        { withCredentials: true }
      );
      setPuppies(data.puppies);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleImagePreview = (e, setPreview, setFile) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setPreview(reader.result);
  //     setFile(file);
  //   };
  // };

  // const addPuppy = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("breed", breed);
  //   formData.append("name", name);
  //   formData.append("mainImage", mainImage);
  //   formData.append("color", color);
  //   formData.append("weight", weight);
  //   formData.append("age", age);
  //   formData.append("gender", gender);
  //   formData.append("purpose", purpose);

  //   if (description.length > 0) {
  //     formData.append("description", description);
  //   }
  //   if (threeImage) {
  //     formData.append("threeImage", threeImage);
  //   }
  //   if (twoImage) {
  //     formData.append("twoImage", twoImage);
  //   }
  //   if (oneImage) {
  //     formData.append("oneImage", oneImage);
  //   }

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3000/api/v1/puppyAdopt/postDetails",
  //       formData,
  //       {
  //         withCredentials: true,
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     setBreed("");
  //     setName("");
  //     setColor("");
  //     setWeight("");

  //     setMainImage("");
  //     setMainImagePreview("");

  //     setDescription("");
  //     setOneImage("");
  //     setOneImagePreview("");

  //     setAge("");
  //     setTwoImage("");
  //     setTwoImagePreview("");

  //     setGender("");
  //     setThreeImage("");
  //     setThreeImagePreview("");
  //     toast.success(data.message);
  //     getAllPuppies();
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };

  useEffect(() => {
    getAllPuppies();
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-300 min-h-screen py-10 px-4">

        {/* By admin */}
        {/*
        <div>
         <h3>Post puppy details</h3>
        <form onSubmit={addPuppy}>
          <input
            type="text"
            placeholder="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label> Trained Dog MAIN IMAGE</label>
            <img
              src={mainImagePreview ? `${mainImagePreview}` : "/imgPL.webp"}
              alt="mainImg"
              className="mainImg"
            />
            <input
              type="file"
              onChange={(e) =>
                handleImagePreview(e, setMainImagePreview, setMainImage)
              }
              style={{ border: "none" }}
            />
          </div>

          <div className="sub-para">
            <img
              src={oneImagePreview ? `${oneImagePreview}` : "/imgPL.webp"}
              alt="subParaOneImg"
            />
            <input
              type="file"
              onChange={(e) =>
                handleImagePreview(e, setOneImagePreview, setOneImage)
              }
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Blog First Sub Paragraph Comes Here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <img
              src={twoImagePreview ? `${twoImagePreview}` : "/imgPL.webp"}
              alt="subParaTwoImg"
            />
            <input
              type="file"
              onChange={(e) =>
                handleImagePreview(e, setTwoImagePreview, setTwoImage)
              }
              style={{ border: "none" }}
            />
            <textarea
              rows="10"
              placeholder="Blog Second Sub Paragraph Comes Here..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="sub-para">
            <img
              src={threeImagePreview ? `${threeImagePreview}` : "/imgPL.webp"}
              alt="subParaThreeImg"
            />
            <input
              type="file"
              onChange={(e) =>
                handleImagePreview(e, setThreeImagePreview, setThreeImage)
              }
              style={{ border: "none" }}
            />
           <select
                id="gender"
                name="gender"
                className="w-full p-2 text-white-700 leading-tight focus:outline-none"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
          </div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author Name"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button type="submit">Add Puppy details</button>
        </form> 
        </div> */}
      <section className="max-w-6xl mx-auto">
        {puppies && puppies.length > 0 ? (
          puppies.map((puppy) => (
            <motion.div
              key={puppy._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden mb-10 p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {puppy.mainImage && (
                  <img
                    src={puppy.mainImage.url}
                    alt={`${puppy.name}`}
                    className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-md"
                  />
                )}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-extrabold text-purple-800 flex items-center">
                    <FaPaw className="mr-3 text-purple-600" />
                    {puppy.name}
                  </h3>
                
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {puppy.oneImage && (
                      <img
                        src={puppy.oneImage.url}
                        alt="Image One"
                        className="w-full h-32 object-cover rounded-lg shadow"
                      />
                    )}
                    {puppy.twoImage && (
                      <img
                        src={puppy.twoImage.url}
                        alt="Image Two"
                        className="w-full h-32 object-cover rounded-lg shadow"
                      />
                    )}
                    {puppy.threeImage && (
                      <img
                        src={puppy.threeImage.url}
                        alt="Image Three"
                        className="w-full h-32 object-cover rounded-lg shadow"
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800 text-sm">
                    <p>
                      <span className="font-semibold">Age:</span> {puppy.age}
                    </p>
                    <p>
                      <span className="font-semibold">Breed:</span> {puppy.breed}
                    </p>
                    <p>
                      <span className="font-semibold">Gender:</span> {puppy.gender}
                    </p>
                    <p>
                      <span className="font-semibold">Color:</span> {puppy.color}
                    </p>
                    <p>
                      <span className="font-semibold">Weight:</span> {puppy.weight}
                    </p>
                  </div>
                </div>
              </div>
             <Link to="/contact">
    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 flex items-center justify-center space-x-2">
      <FaPaw className="text-lg" />
      <span>Contact for Adoption</span>
    </button>
  </Link>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center text-purple-700 text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No Puppies Available
          </motion.p>
        )}
      </section>

    </div>
  );
};

export default Puppy;