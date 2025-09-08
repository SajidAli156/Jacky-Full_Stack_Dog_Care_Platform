import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaClipboardList, FaExclamationCircle } from "react-icons/fa";

const InstructionAboutDog = () => {
  const [instructions, setInstructions] = useState([]);
  const navigateTo = useNavigate();

  const getAllDogInstructions = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/instructionAboutDog/getAllInstructions",
        { withCredentials: true }
      );
      setInstructions(data.instructions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDogInstructions();
  }, []);

  return (
    // <div className="bg-purple-50 px-44">
    //   <div className="container px-20 min-h-screen py-8">
    //     <h1 className="text-6xl font-bold text-black mb-12 mt-8 flex justify-center items-center">
    //       Instructions
    //     </h1>

    //     {instructions.length > 0 ? (
    //       instructions.map((instruction) => (
    //         <div
    //           key={instruction._id}
    //           className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
    //         >
    //           <h3 className="text-4xl font-bold mb-8 flex justify-center items-center text-black">
    //             {instruction.title}
    //           </h3>

    //           <h5 className="text-4xl font-bold mb-8 flex justify-center items-center text-black">
    //             {instruction.description}
    //           </h5>
    //         </div>
    //       ))
    //     ) : (
    //       <h2 className="text-center text-white-500">No Instructions Found</h2>
    //     )}
    //   </div>
    // </div>






    <div className=" px-4 md:px-20 lg:px-44 py-8">
      <div className="container mx-auto min-h-screen py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 mt-8 flex justify-center items-center">
          <FaClipboardList className="mr-4" />
          Instructions
        </h1>

        {instructions.length > 0 ? (
          instructions.map((instruction) => (
            <div
              key={instruction._id}
              className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 flex justify-center items-center text-black">
                {instruction.title}
              </h3>

              <p className="text-lg md:text-xl lg:text-2xl mb-8 flex justify-center items-center text-black">
                {instruction.description}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-white-500 flex justify-center items-center">
            <FaExclamationCircle className="mr-2 text-2xl md:text-3xl lg:text-4xl" />
            <h2 className="text-lg md:text-xl lg:text-2xl">No Instructions Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructionAboutDog;
