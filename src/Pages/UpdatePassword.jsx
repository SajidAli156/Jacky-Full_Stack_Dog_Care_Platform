


import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdatePassword() {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigateTo("/login");
  //   }
  // }, [isAuthenticated, navigateTo]);

  const updatePassword = async (e) => {
    e.preventDefault();
    await axios.put(
      'http://localhost:3000/api/v1/user/updatePassword',
      { oldPassword, newPassword },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        toast.success(res.data.message);
        setNewPassword("");
        setOldPassword("");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <form
        onSubmit={updatePassword}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full space-y-6"
        noValidate
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Update Password
        </h2>

        <input
          type="password"
          value={oldPassword}
          placeholder="Enter Previous Password"
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          minLength={6}
          
        />

        <input
          type="password"
          value={newPassword}
          placeholder="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          minLength={6}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default UpdatePassword;

