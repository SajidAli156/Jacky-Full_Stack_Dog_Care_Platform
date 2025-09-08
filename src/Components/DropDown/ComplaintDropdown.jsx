// import React, { useState } from 'react';
// import { FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const ComplaintDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative inline-block text-left">
//       <div
//         className=" text-lg font-semibold flex items-center cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FaUserAlt className="inline-block mr-2" />
//         Get In Touch
//       </div>

//       {isOpen && (
//         <div
//           className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
//         >
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             <Link
//               to="/productComplaint"
//               className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100 hover:text-white-900"
//               role="menuitem"
//               onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
//             >
//               Product Complaint
//             </Link>

//             <Link
//               to="/strayDog"
//               className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100 hover:text-white-900"
//               role="menuitem"
//               onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
//             >
//               Stray Dog
//             </Link>


//             <Link
//               to="/instructorFeedback"
//               className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100 hover:text-white-900"
//               role="menuitem"
//               onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
//             >
//               Instructor Feedback
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComplaintDropdown;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ComplaintDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="text-lg font-semibold flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
       
        Contact Us
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/productComplaint"
              className="block px-4 py-2 text-sm text-white hover:bg-purple-600 hover:text-white"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
            >
              Product Complaint
            </Link>
            <Link
              to="/strayDog"
              className="block px-4 py-2 text-sm text-white hover:bg-purple-600 hover:text-white"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
            >
              Stray Dog
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-white hover:bg-purple-600 hover:text-white"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
            >
              Send Message
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintDropdown;
