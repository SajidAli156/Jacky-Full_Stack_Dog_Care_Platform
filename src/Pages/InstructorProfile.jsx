import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function InstructorProfile() {
  const { instructorId } = useParams();
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/instructor/getInstructorProfile/${instructorId}`)
      .then((res) => setInstructor(res.data.user))
      .catch((err) => console.error(err));
  }, [instructorId]);

  if (!instructor) return <div className="p-6">Loading...</div>;

  return (
    // <div className="p-6 max-w-3xl mx-auto">
    //   <img
    //     src={instructor.avatar.url}
    //     alt={instructor.name}
    //     className="w-full h-60 object-cover rounded"
    //   />
    //   <h1 className="text-3xl font-bold mt-4">{instructor.name}</h1>
    //    <h1 className="text-3xl font-bold mt-4">{instructor.gender}</h1>
    //     <h1 className="text-3xl font-bold mt-4">{instructor.email}</h1>
    //     <h1 className="text-3xl font-bold mt-4">{instructor.phone}</h1>

     
      
    // </div>


    <div className='min-h-screen'>

    <div className="p-6 max-w-3xl  mx-auto bg-white rounded-lg shadow-md">
      <div className="overflow-hidden rounded-lg">
        <img
          src={instructor.avatar.url}
          alt={instructor.name}
          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-800">{instructor.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-lg font-medium text-gray-700">{instructor.gender}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium text-gray-700">{instructor.email}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-lg font-medium text-gray-700">{instructor.phone}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
