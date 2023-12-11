import Login from './components/Login';
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocDash from './components/DocDash';
import { Toaster } from 'react-hot-toast';
import ExternalDataAccessLog from './components/ExternalDataAccessLog';
import DetailDetails from './components/DetailDetails'
import Appointment from './components/Appointment';
import BookAppointment from './components/BookAppointment';
import Book from './components/Book';
import AvailableDoctors from './components/AvailableDoctors';
import Doctor from './components/Doctor';
import DoctorInfo from './components/DoctorInfo';
import FetchData from './components/FetchData';
import UpdateData from './components/UpdateData';
import CreateId from './components/CreateId';

export default function MyApp() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctor-Dashboard" element={<DocDash/>} />
        <Route path="/fetch" element={<FetchData />} />
        <Route path="/update" element={<UpdateData />} />
        <Route path="/receptionist-Dashboard" element={<Appointment/>} />
        <Route path="/logs" element={<ExternalDataAccessLog/>} />
        <Route path="/log-details" element={<DetailDetails/>} />
        <Route path="/appointment" element={<Appointment/>} /> 
        <Route path="/create-id" element={<CreateId />} />
        <Route path="/book-appointment" element={<BookAppointment/>} />
        <Route path="/b" element={<Book/>} />
        <Route path="/availability" element={<AvailableDoctors/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/doc-info" element={<DoctorInfo/>} />
    </Routes>
    <Toaster/>
  </BrowserRouter>
  );
}
