import React, { useContext, useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBarcode, FaBoxOpen, FaUtensils, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";

const InstructorFeedback = () => {
  const { isUserAuthenticated } = useContext(Context);
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const {instructorId} = useParams();

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/feedbackForInstructor/postFeedback/${instructorId}`,
        {
          instructorId,
          instructorName,rating,
          review
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
    
    setInstructorName("");
    setRating("");
    setReview("");

      toast.success("feedback register successfully");
    
    } catch (err) {
      toast.error("Problem registering feedback");
      console.log(err);
    }
  };

    if(!isUserAuthenticated){
      navigateTo("/login");
    }

  return (
   

    <motion.div 
      className="p-8 max-w-xl mx-auto my-32 bg-slate-100 shadow-md rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Instructor Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaBoxOpen className="text-white-500" />
          <input
            type="text"
            placeholder="Instructor Name"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaUtensils className="text-white-500" />
          <input
            type="text"
            placeholder="Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Rating:</span>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Submit Complaint
        </motion.button>
      </form>
    </motion.div>

  );
};

export default InstructorFeedback;
