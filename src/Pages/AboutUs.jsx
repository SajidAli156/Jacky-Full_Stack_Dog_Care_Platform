import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaStethoscope,
  FaTooth,
  FaPaw,
  FaSyringe,
  FaDog,
} from 'react-icons/fa';


const AboutPage = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white-800 text-center">
            About Us
          </h1>
          <p className="text-white-600 mt-4 text-center">
            We are passionate about pets and committed to providing the best care possible.
          </p>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white-800">
              Our Mission
            </h2>
            <p className="text-white-600">
              Our mission is to enhance the lives of pets and their owners by providing expert veterinary care, exceptional customer service, and a compassionate environment.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img
              src="/dWO1.avif"
              alt="Mission"
              className="w-80 lg:w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src="/dWO3.avif"
              alt="Values"
              className="w-80 mr-4 lg:w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white-800">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-white-600 space-y-2">
              <li>Compassion: We treat all pets and their owners with kindness and empathy.</li>
              <li>Integrity: We adhere to the highest ethical standards in our practice.</li>
              <li>Excellence: We strive for excellence in all aspects of our care.</li>
              <li>Innovation: We embrace new technologies and methods to provide the best care possible.</li>
              <li>Community: We are dedicated to improving the well-being of the communities we serve.</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center mb-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white-800">
              Our Story
            </h2>
            <p className="text-white-600">
              Founded in 2000, we have grown from a small clinic to a full-service veterinary hospital. Our team of experienced veterinarians and staff are dedicated to providing the highest level of care for your pets.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img
              src="/dWO2.avif"
              alt="Mission"
              className="w-80 lg:w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>






        <section className="bg-white-100 py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white-800">Our Services</h2>
            <p className="text-white-600 mt-4">
              We offer a wide range of services to meet the needs of your pets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">General Check-ups</h3>
                <p className="text-white-600 mt-2">
                  Regular health checks are essential for keeping your pet in the best possible health.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaStethoscope className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">Vaccinations</h3>
                <p className="text-white-600 mt-2">
                  Protect your pet from various diseases with our comprehensive vaccination services.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaTooth className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">Dental Care</h3>
                <p className="text-white-600 mt-2">
                  Maintain your pet's oral health with our professional dental cleaning and care.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaPaw className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">Surgery</h3>
                <p className="text-white-600 mt-2">
                  Our experienced veterinarians provide a variety of surgical services to ensure your pet's well-being.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaSyringe className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">Emergency Care</h3>
                <p className="text-white-600 mt-2">
                  We offer 24/7 emergency services to handle any urgent health issues your pet may face.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <FaDog className="text-purple-600 text-6xl" />
                </div>
                <h3 className="text-xl font-bold text-white-800">Grooming</h3>
                <p className="text-white-600 mt-2">
                  Keep your pet looking and feeling their best with our grooming services.
                </p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default AboutPage;
