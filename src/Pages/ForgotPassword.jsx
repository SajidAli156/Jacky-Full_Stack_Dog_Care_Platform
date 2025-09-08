// import React, { useContext, useState } from "react";

// import { Context } from "../main";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const { isAuthenticated } = useContext(Context);
//   const [email, setEmail] = useState("");

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(
//         "http://localhost:4000/api/v1/user/password/forgot",
//         { email },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   return (
//     <>
//       <div className="forgot-password-page">
//         <div className="forgot-password-container">
//           <h2>Forgot Password</h2>
//           <p>Enter your email address to receive a password reset token.</p>
//           <form
//             onSubmit={handleForgotPassword}
//             className="forgot-password-form"
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="forgot-input"
//             />
//             <button type="submit" className="forgot-btn">
//               Send Reset Link
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForgotPassword;

import React, { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/password/forgot",
        { email },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Enter your email address to receive a password reset token.
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
