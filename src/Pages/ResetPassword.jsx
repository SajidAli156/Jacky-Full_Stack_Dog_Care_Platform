// import React, { useContext, useEffect, useState } from "react";
// import "../styles/ResetPassword.css";
// import axios from "axios";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Context } from "../main";

// const ResetPassword = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
//   const { token } = useParams();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigateTo = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     await axios
//       .put(
//         `http://localhost:4000/api/v1/user/password/reset/${token}`,
//         { password, confirmPassword },
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//         setIsAuthenticated(true);
//         setUser(res.data.user);
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   useEffect(() => {

//     if (isAuthenticated) {
//       navigateTo("/profile");
//     }
//   }, [isAuthenticated, navigateTo]);

//   return (
//     <>
//       <div className="reset-password-page">
//         <div className="reset-password-container">
//           <h2>Reset Password</h2>
//           <p>Enter your new password below.</p>
//           <form className="reset-password-form" onSubmit={handleResetPassword}>
//             <input
//               type="password"
//               placeholder="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="reset-input"
//             />
//             <input
//               type="password"
//               placeholder="Confirm New Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="reset-input"
//             />
//             <button type="submit" className="reset-btn">
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResetPassword;


import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const ResetPassword = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/user/password/reset/${token}`,
        { password, confirmPassword },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setUser(data.user);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/profile");
    }
  }, [isAuthenticated, navigateTo]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-2">Reset Password</h2>
        <p className="text-center text-gray-600 mb-6">Enter your new password below</p>

        <form onSubmit={handleResetPassword} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
