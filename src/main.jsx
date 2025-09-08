import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Context = createContext({ isUserAuthenticated: false });
// export const ContextI = createContext({ isInstructorAuthenticated: false });
// export const ContextD = createContext({ isDoctorAuthenticated: false });

const AppWrapper = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  // const [isInstructorAuthenticated, setIsInstructorAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  // const [instructor, setInstructor] = useState({});
  // const [isDoctorAuthenticated, setIsDoctorAuthenticated] = useState(false);
  // const [doctor, setDoctor] = useState({});

  return (
    <Context.Provider
      value={{ isUserAuthenticated, setIsUserAuthenticated, user, setUser }}
    > <App />
    </Context.Provider>

  );
};
 
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AppWrapper />
  
)
      