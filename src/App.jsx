import { useContext, useEffect, useState } from "react";
import { Context} from "./main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductComplaint from "./Pages/ProductComplaint";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DogCharacteristics from "./Pages/DogCharacteristics";
import InstructionsAboutDog from "./Pages/InstructionAboutDog";
import Blog from "./Pages/Blog";
import PartnerWithUs from "./Pages/PartnerWithUs";
import MateServices from "./Pages/MateServices";
import Products from "./Pages/Products";
import AdoptPuppy from "./Pages/AdoptPuppy";
import StrayDog from "./Pages/StrayDog";
import AdoptTrainedDog from "./Pages/AdoptTrainedDog";
import About from "./Pages/AboutUs";
// import PostDoctorFeedback from "./Pages/PostDoctorFeedback"
// import DogAtCenter from './Pages/AppointmentDogAtCenter';
import WhoIAm from "./Pages/WhoIAm";
import axios from "axios";
import DogsByBreed from "./Pages/DogsByBreed";
import PostInstructorFeedback from './Pages/PostInstructorFeedback';
import GetInstructorFeedback from "./Pages/GetInstructorFeedback";
import GetInstructors from "./Pages/GetInstructors";
import UserBlogs from "./Pages/UserBlogs";
import GetDoctor from "./Pages/GetDoctor"
// import GetDoctorFeedback from "./Pages/GetDoctorFeedback";
import AppointmentInstructorAtHome from "./Pages/AppointmentInstructorAtHome";
import BookDoctorAppointment from "./Pages/AppointmentDoctor"
import NearbyMatingDogs from "./Pages/NearByMatingDogs";
import InstructorProfile from './Pages/InstructorProfile'
import PurchaseForm from "./Pages/PurchaseForm";
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import ResetPassword from './Pages/ResetPassword';
import UpdateDetails from './Pages/UpdateDetails';


const App = () => {

  const { isUserAuthenticated, setIsUserAuthenticated, setUser } =
    useContext(Context);
  // const {
  //   isInstructorAuthenticated,
  //   setIsInstructorAuthenticated,
  //   setInstructor,
  // } = useContext(ContextI);
  // const {
  //   isDoctorAuthenticated,
  //   setIsDoctorAuthenticated,
  //   setDoctor,
  // } = useContext(ContextD);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );

        setIsUserAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };
    // const fetchDoctors = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       "http://localhost:3000/api/v1/user/getDoctorProfile",
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     setIsDoctorAuthenticated(true);
    //     setDoctor(data.user);
    //   } catch (error) {
    //     setIsDoctorAuthenticated(false);
    //     setDoctor({});
    //   }
    // };
    // const fetchInstructors = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       "http://localhost:3000/api/v1/user/getInstructorProfile",
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //     setIsInstructorAuthenticated(true);
    //     setInstructor(data.user);
    //   } catch (error) {
    //     setIsInstructorAuthenticated(false);
    //     setInstructor({});
    //   }
    // };
    fetchUsers();
    // fetchInstructors();
    // fetchDoctors();
  }, [isUserAuthenticated, setUser]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productComplaint" element={<ProductComplaint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/dogCharacteristics" element={<DogCharacteristics />} />
        <Route path="/instructionsAboutDog" element={<InstructionsAboutDog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partnerWithUs" element={<PartnerWithUs />} />
        <Route path="/mateService" element={<MateServices />} />
        <Route path="/product" element={<Products />} />
        <Route path="/adoptPuppy" element={<AdoptPuppy />} />
        <Route path="/strayDog" element={<StrayDog />} />
        <Route path="/adoptTrainedDog" element={<AdoptTrainedDog />} /> 
         <Route path="/purchase/:id" element={<PurchaseForm />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/dogAtCenter' element={<DogAtCenter />} /> */}
        <Route path='/who' element={<WhoIAm />} />
        <Route path="/dogs/breed/:breed" element={<DogsByBreed />} />
        {/* <Route path='/nearByDogMate' element={<NearbyMatingDogs/>}/> */}
        <Route path='/postInstructorFeedback/:instructorId' element={<PostInstructorFeedback />} />
        <Route path='/instructorProfile/:instructorId' element={<InstructorProfile/>}/>
        <Route path="/getInstructorFeedback/:instructorId" element={<GetInstructorFeedback />} />
        <Route path="/myblogs" element={<UserBlogs />} />
        <Route path="/instructors" element={<GetInstructors />} />
        <Route path="/doctors" element={<GetDoctor />} />
        {/* <Route path="/postDoctorFeedback/:id" element={<PostDoctorFeedback />} />
        <Route path="/getDoctorFeedback/:id" element={<GetDoctorFeedback />} /> */}
        <Route path="/bookDoctorAppointment/:doctorId" element={<BookDoctorAppointment />} />
        <Route path="/bookInstructorAppointment/:instructorId" element={<AppointmentInstructorAtHome />} />
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path='/updateDetails' element={<UpdateDetails/>}/>
         <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
