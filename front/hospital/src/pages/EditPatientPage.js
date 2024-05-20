import AppWrapper from "../containers/AppWrapper";
import EditPatientForm from "../components/PatientEditorForm";
import { useLocation } from "react-router-dom";

const PatientEditorPage = () => {
    let location = useLocation();
    let patient = location.state.patient;
    
    return (
        <AppWrapper>
            <EditPatientForm patient={patient} />
        </AppWrapper>
    );
};

export default PatientEditorPage;
