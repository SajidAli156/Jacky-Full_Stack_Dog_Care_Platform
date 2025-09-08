


import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../main';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UpdateDetails() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const { isAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const updateDetails = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:3000/api/v1/user/updateDetails', { name, phone, email, gender }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setGender("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      });
  };

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigateTo("/login");
  //   }
  // }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <form 
        onSubmit={updateDetails}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full space-y-6"
        noValidate
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Update Your Details
        </h2>

        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          type="tel"
          value={phone}
          placeholder="Enter phone no"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
          pattern="[0-9]{10,15}"
          title="Please enter a valid phone number"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Update Details
        </button>
      </form>
    </div>
  );
}

export default UpdateDetails;
