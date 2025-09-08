import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaCalendarAlt, FaImage, FaPen } from "react-icons/fa";


const AppointmentDoctor = () => {
  const [docAvatar, setdocAvatar] = useState("");
  const [dateApp, setDateApp] = useState("");
  const [timeApp, setTimeApp] = useState("");
  const [desc, setDesc] = useState("");
  const [docAvatarPreview, setdocAvatarPreview] = useState("");

  const{doctorId} = useParams();
  // const [appointments, setAppointments] = useState([]);

  const navigateTo = useNavigate();

  const handleImagePreview = (e, setPreview, setFile) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      setFile(file);
    };
  };

   const addAppointment = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("docAvatar", docAvatar);
      formData.append("dateApp", dateApp);
      formData.append("timeApp", timeApp);
      formData.append("desc", desc);
  
      try {
        const { data } = await axios.post(
          `http://localhost:3000/api/v1/appointmentWithDoctor/create/${doctorId}`,
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
  
        setdocAvatar("");
        setDateApp("");
        setTimeApp("");
        setDesc("");
        toast.success(data.message);
        
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

  // const getAllAppointments = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "http://localhost:3000/api/v1/appointmentWithDoctor/getAllAppointments",
  //       { withCredentials: true }
  //     );
  //     setAppointments(data.appointments);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



  // useEffect(() => {
  //   getAllAppointments();
  // }, []);

  return (
    <div className="bg-white">
      <div className="bg-white p-8 min-h-screen flex flex-col items-center">
        <h3 className="text-3xl font-bold  mb-6">Post Doctor Appointments</h3>
        <form onSubmit={addAppointment} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="mb-4">
            <label className="block  font-semibold mb-2">Dog Main Image</label>
            <div className="flex flex-col items-center mb-4">
              <img
                src={docAvatarPreview ? `${docAvatarPreview}` : "/imgPL.webp"}
                alt="mainImg"
                className="mainImg w-32 h-32 object-cover rounded-full mb-2"
              />
              <label className="cursor-pointer text-slate-900 flex items-center">
                <FaImage className="mr-2" />
                <input
                  type="file"
                  onChange={(e) =>
                    handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
                  }
                  className="hidden"
                />
                <span>Choose Image</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold mb-2">Description</label>
            <div className="relative">
              <FaPen className="absolute left-3 top-3 text-purple-400" />
              <textarea
                type="text"
                rows={4}
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold mb-2">Appointment Date</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-purple-400" />
              <input
                type="date"
                placeholder="Appointment Date"
                value={dateApp}
                onChange={(e) => setDateApp(e.target.value)}
                className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-900 font-semibold mb-2">Appointment Time</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-purple-400" />
              <select
                id="timeApp"
                name="timeApp"
                placeholder="Appointment Time"
                className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={timeApp}
                onChange={(e) => setTimeApp(e.target.value)}
              >
                <option value="">Select Time</option>
                <option value="10-11">10-11</option>
                <option value="11-12">11-12</option>
                <option value="12-1">12-1</option>
                <option value="3-4">3-4</option>
                <option value="4-5">4-5</option>
                <option value="5-6">5-6</option>
                <option value="6-7">6-7</option>
                <option value="7-8">7-8</option>


              </select>

            </div>


          </div>

          <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-green-600">
            Submit Appointment
          </button>
        </form>
      </div>












      {/* to admin */}

      {/* <section>
        {appointments && appointments.length > 0
          ? appointments.map((appointment) => (
              <div key={appointment._id}>
                {appointment.docAvatar && <img src={appointment.docAvatar.url} alt="blogImg" />}
                <h4>{appointment.timeApp}</h4>
                <h4>{appointment.dateApp}</h4>
                <h4>{appointment.desc}</h4>
             
                <h4>{appointment.timeApp}</h4>
              </div>
            ))
          : "No appointments.."}
      </section> */}
    </div>
  );
};

export default AppointmentDoctor;
