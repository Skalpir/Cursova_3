import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PatientList from "./pages/PatientList";
import PatientEditorPage from "./pages/EditPatientPage";
import ScheduleAppointmentPage from "./pages/ScheduleAppointmentPage";
import PatientAppointmentsPage from "./pages/PatientAppointmentsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/patients" element={<PatientList/>} />
          <Route path="/patients/:id" element={<PatientEditorPage/>} />
          <Route path="/schedule-appointment" element={<ScheduleAppointmentPage/>} />
          <Route path="/appointments" element={<PatientAppointmentsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
