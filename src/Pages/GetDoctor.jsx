// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const DoctorsList = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchDoctors = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/api/v1/doctor/getDoctors", {
//         withCredentials: true,
//       });
//       setDoctors(data.users || []);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to load doctors");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   if (loading) return <p>Loading doctors...</p>;
//   if (doctors.length === 0) return <p>No doctors found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Doctors</h1>

//       {doctors.map((doc) => (
//         <div
//           key={doc._id}
//           className="bg-white shadow-md rounded p-4 mb-6 hover:shadow-lg transition"
//         >
//           <img
//             src={doc.avatar.url}
//             alt={doc.name}
//             className="w-full h-40 object-cover rounded"
//           />
//           <h2 className="text-xl font-semibold mt-3">{doc.name}</h2>

//           <div className="mt-4 flex gap-3 flex-wrap">
         

//             <Link
//               to={`/bookDoctorAppointment/${doc._id}`}
//               className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             >
//               Book Appointment
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorsList;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/doctor/getDoctors", {
        withCredentials: true,
      });
      setDoctors(data.users || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  if (loading) return <p className="text-center mt-20 text-lg">Loading doctors...</p>;
  if (doctors.length === 0) return <p className="text-center mt-20 text-lg">No doctors found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Our Doctors</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={doc.avatar?.url}
              alt={doc.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{doc.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Email:</strong> {doc.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Gender:</strong> {doc.gender}
              </p>

              <Link
                to={`/bookDoctorAppointment/${doc._id}`}
                className="mt-4 block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
