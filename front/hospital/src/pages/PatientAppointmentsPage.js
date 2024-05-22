import React, { useState, useEffect } from 'react';
import AppWrapper from "../containers/AppWrapper";
import PatientAppointmentCard from "../components/PatientAppointmentCard";
import PatientAddAppointment from "../components/PatientAddAppointment";
import Session from "../components/Session";
import Calendar from 'react-calendar';
import Api from 'easy-fetch-api';

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
  const user = Session.getUserData();
  const [appointments, setAppointments] = useState([]);
  
  const patient = user.profile;

  useEffect(() => {
    const getAppointments = () => {
      Api.setBaseUrl('http://localhost:3000');
      Api.post({
        url: '/api/appointment/patient',
        data: { some_id : patient._id },
        callback: (response) => {
          setAppointments(response);
        }
      });
    };
    getAppointments();
  }, [patient._id]);

  const getEnabledDates = () => {
    return appointments.map((appointment) => new Date(appointment.dateTime));
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return getEnabledDates().some((enabledDate) =>
        date.getFullYear() === enabledDate.getFullYear() &&
        date.getMonth() === enabledDate.getMonth() &&
        date.getDate() === enabledDate.getDate()
      );
    }
    return false;
  };

  const allAppointments = [...appointments, { isAddAppointment: true }];

  return (
    <AppWrapper>
      <h1 className="mb-4 text-center">Appointments</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body">
                <Calendar tileDisabled={tileDisabled} />
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
