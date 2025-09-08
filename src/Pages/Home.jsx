import React from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaCat, FaStethoscope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white-800">
            Your Pet's Care, <span className="text-purple-600">Our Priority</span>
          </h1>
          <p className="text-white-600">
            We're dedicated to enhancing the lives of pets through expert care and heartfelt commitment.
          </p>
          <Link to="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-white-800 transition-colors">
            Contact Us
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <img
            src="/dog4k22.avif"
            alt="Main"
            className="w-80 lg:w-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-16 left-0 w-40 lg:w-52">
            <img
              src="/dog4k44.avif"
              alt="Small1"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute bottom-16 right-0 w-40 lg:w-52">
            <img
              src="/dog4k11.avif"
              alt="Small2"
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-white-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white-800">Our Services</h2>
        <p className="text-white-600 mt-4">We offer a wide range of services to keep your pets happy and healthy.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaDog className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-white-800 mt-4">Dog Care</h3>
            <p className="text-white-600 mt-2">Comprehensive care for your beloved dogs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCat className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-white-800 mt-4">Cat Care</h3>
            <p className="text-white-600 mt-2">Expert care tailored for your cats.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaStethoscope className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-white-800 mt-4">Veterinary Services</h3>
            <p className="text-white-600 mt-2">High-quality medical services for all pets.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <p className="text-white-600">"The best care for our dog, always attentive and professional."</p>
            <p className="mt-4 text-purple-600 font-bold">- Sarah W.</p>
          </div>
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <p className="text-white-600">"Our cat's health has never been better thanks to their services."</p>
            <p className="mt-4 text-purple-600 font-bold">- John D.</p>
          </div>
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <p className="text-white-600">"Fantastic veterinary team, highly recommended!"</p>
            <p className="mt-4 text-purple-600 font-bold">- Emily R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white-800">Meet Our Team</h2>
        <p className="text-white-600 mt-4">Our dedicated team of professionals is here to provide the best care for your pets.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <img src="/userJonnathan.jpeg" alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full object-cover mb-4"/>
            <h3 className="text-xl font-bold text-white-800">Dr. John Doe</h3>
            <p className="text-white-600 mt-2">Veterinarian</p>
          </div>
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <img src="/userJame.jpeg" alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full object-cover mb-4"/>
            <h3 className="text-xl font-bold text-white-800">Jane Smith</h3>
            <p className="text-white-600 mt-2">Veterinary Technician</p>
          </div>
          <div className="bg-white-50 p-8 rounded-lg shadow-lg">
            <img src="/userShylie.jpeg" alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full object-cover mb-4"/>
            <h3 className="text-xl font-bold text-white-800">Emily Johnson</h3>
            <p className="text-white-600 mt-2">Pet Groomer</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
  
    </div>
  );
};

export default HomePage;
