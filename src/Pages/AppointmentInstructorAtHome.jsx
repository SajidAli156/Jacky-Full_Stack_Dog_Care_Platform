// import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const AppointmentInstructorAtHome = () => {
//   const [docAvatar, setdocAvatar] = useState("");
//   const [dogName, setDogName] = useState("");
//   const [dogBreed, setDogBreed] = useState("");
//   const [dogGender, setDogGender] = useState("");
//   const [dogAge, setDogAge] = useState("");
//   const [dogWeight, setDogWeight] = useState("");
//   const [animalAggression, setAnimalAggression] = useState("");
//   const [dogNature, setDogNature] = useState("");
//   const [duration, setDuration] = useState("");
//   const [date, setDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [purpose, setPurpose] = useState("");
//   const [docAvatarPreview, setdocAvatarPreview] = useState("");

//   const [appointments, setAppointments] = useState([]);

//   const navigateTo = useNavigate();

//   const {instructorId} = useParams();

//   const getAllAppointments = async () => {
//     try {
//       const { data } = await axios.get(
//         'http://localhost:3000/api/v1/instructorAppointmentAtHome/getAllAppointments',
//         { withCredentials: true }
//       );
//       setAppointments(data.appointments);
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

//   const addAppointment = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     formData.append("docAvatar", docAvatar);
//     formData.append("dogName", dogName);
//     formData.append("dogBreed", dogBreed);
//     formData.append("dogAge", dogAge);
//     formData.append("date", date);
//     formData.append("duration", duration);
//     formData.append("dogNature", dogNature);
//     formData.append("address", address);
//     formData.append("purpose", purpose);
//     formData.append("dogWeight", dogWeight);
//     formData.append("animalAggression", animalAggression);
//     formData.append("dogGender", dogGender);

//     try {
//       const { data } = await axios.post(
//         `http://localhost:3000/api/v1/instructorAppointmentAtHome/postAppointment/${instructorId}`,
//         formData,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setdocAvatar("");
//       setAnimalAggression("");
//       setDogAge("");
//       setDogNature("");
//       setDogBreed("");
//       setDate("");
//       setDuration("");
//       setDogWeight("");
//       setDogName("");
//       setDogGender("");
//       setAddress("");
//       setPurpose("");

//       toast.success(data.message);
//       getAllAppointments(); // Refresh the blog list after adding a new one
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   return (
//     <div className="bg-slate-200">
//       <div>
//         <h3>Post Appointments At Center</h3>
//         <form onSubmit={addAppointment}>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <label>Dog Main image</label>
//             <img
//               src={docAvatarPreview ? `${docAvatarPreview}` : "/imgPL.webp"}
//               alt="mainImg"
//               className="mainImg"
//             />
//             <input
//               type="file"
//               onChange={(e) =>
//                 handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
//               }
//               style={{ border: "none" }}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Dog Name"
//               value={dogName}
//               onChange={(e) => setDogName(e.target.value)}
//             />
//             <input
//               type="date"
//               placeholder="Date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Dog Stay Duration"
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Dog Breed"
//               value={dogBreed}
//               onChange={(e) => setDogBreed(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Dog Age"
//               value={dogAge}
//               onChange={(e) => setDogAge(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="dog Weight"
//               value={dogWeight}
//               onChange={(e) => setDogWeight(e.target.value)}
//             />

//             <div>
//               <select
//                 id="dogGender"
//                 name="dogGender"
//                 className="w-full p-2 text-white-700 leading-tight focus:outline-none"
//                 value={dogGender}
//                 onChange={(e) => setDogGender(e.target.value)}
//               >
//                 <option value="">Select dogGender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </div>

//             <div>
//               <select
//                 id="animalAggression"
//                 name="animalAggression"
//                 className="w-full p-2 text-white-700 leading-tight focus:outline-none"
//                 value={animalAggression}
//                 onChange={(e) => setAnimalAggression(e.target.value)}
//               >
//                 <option value="">Select AnimalAggression</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//             </div>

//             <div>
//               <select
//                 id="dogNature"
//                 name="dogNature"
//                 className="w-full p-2 text-white-700 leading-tight focus:outline-none"
//                 value={dogNature}
//                 onChange={(e) => setDogNature(e.target.value)}
//               >
//                 <option value="">Select DogNature</option>
//                 <option value="Friendly">Friendly</option>
//                 <option value="NotFriendly">NotFriendly</option>
//               </select>
//             </div>

//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />

//             <div>
//               <select
//                 id="dogNature"
//                 name="dogNature"
//                 className="w-full p-2 text-white-700 leading-tight focus:outline-none"
//                 value={purpose}
//                 onChange={(e) => setPurpose(e.target.value)}
//               >
//                 <option value="">Select Purpose</option>
//                 <option value="Grooming">Grooming</option>
//                 <option value="Nails">Nails</option>
//                 <option value="TakeCareForAWhile">TakeCareForAWhile</option>
//                 <option value="Training">Training</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             {/* <input
//               type="text"
//               placeholder="dog Size"
//               value={dogSize}
//               onChange={(e) => setDogSize(e.target.value)}
//             /> */}
//           </div>

//           <button type="submit">submit appointment</button>
//         </form>
//       </div>

//       {/* to admin */}

//       {/* <section>
//         {appointments && appointments.length > 0
//           ? appointments.map((appointment) => (
//               <div key={appointment._id}>
//                 {appointment.docAvatar && <img src={appointment.docAvatar.url} alt="blogImg" />}
             
//                 <h4>{appointment.dogAge}</h4>
//                 <h4>{appointment.dogGender}</h4>
//                 <h4>{appointment.dogStayDuration}</h4>
//                 <h4>{appointment.date}</h4>
//                 <h4>{appointment.dogBreed}</h4>
//                 <h4>{appointment.dogName}</h4>
//                 <h4>{appointment.dogWeight}</h4>
                
//                 <h4>{appointment.dogNature}</h4>
//                 <h4>{appointment.animalAggression}</h4>
//               </div>
//             ))
//           : "No appointments.."}
//       </section> */}
//     </div>
//   );
// };

// export default AppointmentInstructorAtHome;



import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AppointmentInstructorAtHome = () => {
  const [docAvatar, setdocAvatar] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogGender, setDogGender] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [animalAggression, setAnimalAggression] = useState("");
  const [dogNature, setDogNature] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");
  const [docAvatarPreview, setdocAvatarPreview] = useState("");

  const navigateTo = useNavigate();
  const { instructorId } = useParams();

  const handleImagePreview = (e, setPreview, setFile) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      setFile(file);
    };
  };

  const addAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("docAvatar", docAvatar);
    formData.append("dogName", dogName);
    formData.append("dogBreed", dogBreed);
    formData.append("dogAge", dogAge);
    formData.append("date", date);
    formData.append("duration", duration);
    formData.append("dogNature", dogNature);
    formData.append("address", address);
    formData.append("purpose", purpose);
    formData.append("dogWeight", dogWeight);
    formData.append("animalAggression", animalAggression);
    formData.append("dogGender", dogGender);

    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/instructorAppointmentAtHome/postAppointment/${instructorId}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Reset form
      setdocAvatar("");
      setAnimalAggression("");
      setDogAge("");
      setDogNature("");
      setDogBreed("");
      setDate("");
      setDuration("");
      setDogWeight("");
      setDogName("");
      setDogGender("");
      setAddress("");
      setPurpose("");
      setdocAvatarPreview("");

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
          Book Home Appointment
        </h2>
        <form onSubmit={addAppointment} className="space-y-4">
          <div className="flex flex-col items-center gap-3">
            <label className="font-medium">Dog Image</label>
            <img
              src={docAvatarPreview ? docAvatarPreview : "/imgPL.webp"}
              alt="preview"
              className="w-32 h-32 object-cover rounded-full border"
            />
            <input
              type="file"
              onChange={(e) =>
                handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
              }
              className="file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
            />
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
              placeholder="Dog Breed"
              value={dogBreed}
              onChange={(e) => setDogBreed(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Dog Age"
              value={dogAge}
              onChange={(e) => setDogAge(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Dog Weight (kg)"
              value={dogWeight}
              onChange={(e) => setDogWeight(e.target.value)}
              className="input"
            />
            <input
              type="date"
              placeholder="Appointment Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Duration (e.g. 2 hours)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="input"
            />
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
              value={animalAggression}
              onChange={(e) => setAnimalAggression(e.target.value)}
              className="input"
            >
              <option value="">Animal Aggression?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select
              value={dogNature}
              onChange={(e) => setDogNature(e.target.value)}
              className="input"
            >
              <option value="">Dog Nature</option>
              <option value="Friendly">Friendly</option>
              <option value="NotFriendly">Not Friendly</option>
            </select>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="input"
            >
              <option value="">Purpose</option>
              <option value="Grooming">Grooming</option>
              <option value="Nails">Nail Trim</option>
              <option value="TakeCareForAWhile">Take Care for a While</option>
              <option value="Training">Training</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input col-span-1 md:col-span-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentInstructorAtHome;
