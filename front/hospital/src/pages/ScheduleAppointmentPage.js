import AppWrapper from "../containers/AppWrapper";
import AppointmentForm from "../components/AppointmentForm";
import { useLocation } from "react-router-dom";

const ScheduleAppointmentPage = () => {
    let location = useLocation();
    let patient = location.state.patient;
    let doctor = location.state.doctor;
    

    return (
        <AppWrapper>
            <AppointmentForm patient={patient} doctor={doctor} />
        </AppWrapper>
    );
};

export default ScheduleAppointmentPage;
