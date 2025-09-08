// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { Context } from "../main";


// const GetInstructorFeedback = () => {

//   const [feedback, setFeedback] = useState([]);

//   const{isAuthenticated} = useContext(Context);

//   const navigateTo = useNavigate();

//   const{instructorId} = useParams()

//   const getAllFeedback = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:3000/api/v1/feedbackForInstructor/getFeedback/${instructorId}`,
//         { withCredentials: true }
//       );
//       setFeedback(data.feedback);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // if(!isAuthenticated){
//     //   navigateTo('/login')
//     // }
//     getAllFeedback();
//   }, [])
  

//   return (
//     <div className="bg-white">
      
//       <section>
//         {feedback && feedback.length > 0
//           ? feedback.map((appointment) => (
//               <div key={appointment._id}>
//                 <h4>{appointment.review}</h4>
//                 <h4>{appointment.rating}</h4>
//                 <h4>{appointment.instructorName}</h4>
//               </div>
//             ))
//           : "No feedback.."}
//       </section>
//     </div>
//   );
// };

// export default GetInstructorFeedback;



import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";

const GetInstructorFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const { instructorId } = useParams();

  const getAllFeedback = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/feedbackForInstructor/getFeedback/${instructorId}`,
        { withCredentials: true }
      );
      setFeedback(data.feedback);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (!isAuthenticated) {
    //   navigateTo("/login");
    // }
    getAllFeedback();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Instructor Feedback</h1>

      {feedback && feedback.length > 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedback.map((fb) => (
            <div
              key={fb._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-purple-700">Review:</span> {fb.review}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-purple-700">Rating:</span>{" "}
                <span className="text-yellow-500">
                  {"⭐".repeat(fb.rating)}{" "}
                  <span className="text-gray-600 ml-1">({fb.rating}/5)</span>
                </span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-purple-700">Instructor:</span> {fb.instructorName}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">No feedback available.</p>
      )}
    </div>
  );
};

export default GetInstructorFeedback;
