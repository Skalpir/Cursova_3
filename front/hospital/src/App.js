import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PatientList from "./pages/PatientList";
import PatientEditorPage from "./pages/EditPatientPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/patients" element={<PatientList/>} />
          <Route path="/patients/:id" element={<PatientEditorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
