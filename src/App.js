import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Pages
import Main from "./Pages/Main"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Services from "./Pages/Services"
import Doctors from "./Pages/Doctors"
import ForgetPassword from "./Pages/ForgetPassword"
import Patient from "./Pages/Patient"
import AppointmentForm from "./Pages/AppointmentForm"
import MyRecords from "./Pages/MyRecords"
import Appointments from './Pages/Appointments';
import MedicalRecords from './Pages/MedicalRecords';

// Protected Route Component
const ProtectedRoute = ({ children, userType }) => {
  const token = localStorage.getItem('token');
  const storedUserType = localStorage.getItem('userType');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (userType && storedUserType !== userType) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');

    if (token) {
      setIsAuthenticated(true);
      setUserType(storedUserType);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forget Password" element={<ForgetPassword />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Doctors" element={<Doctors />} />

        {/* Protected Routes */}
        <Route
          path="/Patient Dashboard"
          element={
            // <ProtectedRoute userType="patient">
              <Patient />
            // {/* </ProtectedRoute> */}
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule-appointment"
          element={
            <ProtectedRoute>
              <AppointmentForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-records"
          element={
            <ProtectedRoute userType="patient">
              <MyRecords />
            </ProtectedRoute>
          }
        />
        <Route
          path="/medical-records"
          element={
            <ProtectedRoute userType="patient">
              <MedicalRecords />
            </ProtectedRoute>
          }
        />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
