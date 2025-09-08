// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const InstructorsList = () => {
//   const [instructors, setInstructors] = useState([]);
//   const [loading, setLoading] = useState(true);
  

//   const fetchInstructors = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/api/v1/instructor/getInstructors", {
//         withCredentials: true,
//       });
//       setInstructors(data.users || []);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to load instructors");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInstructors();
//   }, []);

//   if (loading) return <p>Loading instructors...</p>;
//   if (instructors.length === 0) return <p>No instructors found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Instructors</h1>

//       {instructors.map((inst) => (
//         <div
//           key={inst._id}
//           className="bg-white shadow-md rounded p-4 mb-6 hover:shadow-lg transition"
//         >
//           <img
//             src={inst.avatar.url}
//             alt={inst.name}
//             className="w-full h-40 object-cover rounded"
//           />
//           <h2 className="text-xl font-semibold mt-3">{inst.name}</h2>
//           <h4>More about him?</h4>
//           <Link to={`/instructorProfile/${inst._id}`}>View Profile</Link>

//           <div className="mt-4 flex gap-3 flex-wrap">
//             <Link
//               to={`/postInstructorFeedback/${inst._id}`}
//               className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             >
//               Post Feedback
//             </Link>

//             <Link
//               to={`/getInstructorFeedback/${inst._id}`}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               View Feedback
//             </Link>

//             <Link
//               to={`/bookInstructorAppointment/${inst._id}`}
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

// export default InstructorsList;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInstructors = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/v1/instructor/getInstructors", {
        withCredentials: true,
      });
      setInstructors(data.users || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load instructors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  if (loading) return <p className="text-center mt-20 text-lg">Loading instructors...</p>;
  if (instructors.length === 0) return <p className="text-center mt-20 text-lg">No instructors found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Our Instructors</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {instructors.map((inst) => (
          <div
            key={inst._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
          >
            <img
              src={inst.avatar?.url}
              alt={inst.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{inst.name}</h2>
              <p className="text-sm text-gray-600 mt-1"><strong>Email:</strong> {inst.email}</p>
              <p className="text-sm text-gray-600"><strong>Gender:</strong> {inst.gender}</p>

              <div className="mt-4 space-y-2">
                <Link
                  to={`/instructorProfile/${inst._id}`}
                  className="block text-purple-600 underline hover:text-purple-800 text-sm"
                >
                  View Full Profile
                </Link>

                <div className="flex flex-col gap-2 mt-2">
                  <Link
                    to={`/postInstructorFeedback/${inst._id}`}
                    className="bg-green-600 text-white text-center py-2 rounded hover:bg-green-700"
                  >
                    Post Feedback
                  </Link>
                  <Link
                    to={`/getInstructorFeedback/${inst._id}`}
                    className="bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                  >
                    View Feedback
                  </Link>
                  <Link
                    to={`/bookInstructorAppointment/${inst._id}`}
                    className="bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsList;
