import AppWrapper from "../containers/AppWrapper";
import PatientAppointmentCard from "../components/PatientAppointmentCard";
import PatientAddAppointment from "../components/PatientAddAppointment";
import { AppointmentDTO } from "../models/AppointmentDTO";
import Session from "../components/Session";
import Calendar from 'react-calendar';


const appointmentsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    padding: '20px'
  };
  
  const cardContainerStyle = {
    width: '100%',
    maxWidth: '300px'
  };

const PatientAppointmentsPage = () => {
  const appointments = [
    {
      dateTime: "2024-05-21T12:00:00",
      patient: "1",
      doctor: "1",
      status: "scheduled",
      procedures: [
        {
          name: "checkup",
          description: "annual checkup",
          duration: 60,
          cost: 100,
          doctor_id: "1",
          patient_id: "1",
          status: false,
        },
        {
          name: "vaccination",
          description: "flu shot",
          duration: 15,
          cost: 50,
          doctor_id: "1",
          patient_id: "1",
          status: false,
        },
      ],
    },
    {
      dateTime: "2024-05-26T12:00:00",
      patient: "1",
      doctor: "2",
      status: "scheduled",
      procedures: [
        {
          name: "checkup",
          description: "annual checkup",
          duration: 60,
          cost: 100,
          doctor_id: "2",
          patient_id: "1",
          status: false,
        },
      ],
    },
    {
      dateTime: "2024-05-29T12:00:00",
      patient: "2",
      doctor: "1",
      status: "scheduled",
      procedures: [
        {
          name: "checkup",
          description: "annual checkup",
          duration: 60,
          cost: 100,
          doctor_id: "1",
          patient_id: "2",
          status: false,
        },
        {
          name: "vaccination",
          description: "flu shot",
          duration: 15,
          cost: 50,
          doctor_id: "1",
          patient_id: "2",
          status: false,
        },
      ],
    },
    {
        dateTime: "2024-05-30T12:00:00",
        patient: "2",
        doctor: "2",
        status: "scheduled",
        procedures: [
            {
            name: "checkup",
            description: "annual checkup",
            duration: 60,
            cost: 100,
            doctor_id: "2",
            patient_id: "2",
            status: false,
            },
        ],
    }
  ];

  const user = Session.getUserData();

  const getPatient = () => {
    return {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      gender: "male",
      contactInfo: "123-456-7890",
      medicalHistory: {
        pastIllnesses: ["flu", "cold"],
        surgeries: [],
        medications: [],
        allergies: [],
      },
      account_id: "1",
    };
  };

  const getEnabledDates = () => {
    return appointments.map((appointment) => new Date(appointment.dateTime));
  };

  function tileDisabled({ date, view }) {
    // Disable tiles for days that have appointments
    if (view === 'month') {
      return getEnabledDates().some((enabledDate) =>
        date.getFullYear() === enabledDate.getFullYear() &&
        date.getMonth() === enabledDate.getMonth() &&
        date.getDate() === enabledDate.getDate()
      );
    }
  }



  const patient = getPatient();

  const allAppointments = [...appointments, { isAddAppointment: true }];

  return (
    <AppWrapper>
      <h1 className="mb-4 text-center">Appointments</h1>
      <div className="container">
        <div className="row">
        <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body">
                <Calendar
                  tileDisabled={tileDisabled}
                />
              </div>
            </div>
          </div>
          {allAppointments.map((appointment, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card w-100">
                {appointment.isAddAppointment ? (
                  <PatientAddAppointment patient={patient} />
                ) : (
                  <PatientAppointmentCard appointment={appointment} />
                )}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </AppWrapper>
  );
};



export default PatientAppointmentsPage;