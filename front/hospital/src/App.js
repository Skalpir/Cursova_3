import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PatientList from "./pages/PatientList";
import PatientEditorPage from "./pages/EditPatientPage";
import ScheduleAppointmentPage from "./pages/ScheduleAppointmentPage";
import PatientAppointmentsPage from "./pages/PatientAppointmentsPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
import Session from "./components/Session";

function App() {
  const user = Session.getUserData();
  console.log(user);
  return (
    <div>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/patients" element={<PatientList/>} />
          <Route path="/patients/:id" element={<PatientEditorPage/>} />
          <Route path="/schedule-appointment" element={<ScheduleAppointmentPage/>} />
          <Route path="/appointments" element={<PatientAppointmentsPage/>} />
          <Route path="/profile" element={user ? user.role === 'doctor' ? <DoctorProfilePage/> : <ProfilePage/> : <LoginPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
