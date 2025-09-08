// import React, { useState } from 'react';
// import { FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const AdoptDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative inline-block text-left">
//       <div
//         className="text-white text-lg hover:text-slate-300 font-semibold flex items-center cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FaUserAlt className="inline-block mr-2" />
//         Adopt Dog
//       </div>

//       {isOpen && (
//         <div
//           className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
//         >
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//             <Link
//               to="/adoptPuppy"
//               className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100 hover:text-white-900"
//               role="menuitem"
//               onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
//             >
//               Puppy
//             </Link>
//             <Link
//               to="/adoptTrainedDog"
//               className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100 hover:text-white-900"
//               role="menuitem"
//               onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
//             >
//               Trained Dog
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdoptDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdoptDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="text-white text-lg hover:text-gray-300 font-semibold flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
     
        Adopt Dog
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              to="/adoptPuppy"
              className="block px-4 py-2 text-sm text-white hover:bg-purple-600 hover:text-white"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
            >
              Puppy
            </Link>
            <Link
              to="/adoptTrainedDog"
              className="block px-4 py-2 text-sm text-white hover:bg-purple-600 hover:text-white"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the dropdown when a link is clicked
            >
            
              Trained Dog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptDropdown;
