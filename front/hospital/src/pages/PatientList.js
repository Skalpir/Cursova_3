import React, { useState, useEffect } from 'react';
import AppWrapper from "../containers/AppWrapper";
import Api from "easy-fetch-api";
import PatientCard from "../components/PatientCard";
import AppointmentCard from "../components/AppointmentCard";
import PatientDTO from "../models/PatientDTO";
import Session from '../components/Session';

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const user = Session.getUserData();

    useEffect(() => {
        // Отримання списку пацієнтів з сервера
        Api.setBaseUrl('http://localhost:3000');
        Api.get({
            url: '/api/patient',
            callback: (response) => {
                setPatients(response);
            }
        });

        // Отримання списку призначень з сервера
        Api.post({
            url: '/api/appointment/doctor',
            data: { some_id: user.profile._id },
            callback: (response) => {
                setAppointments(response);
            }
        });
    }, []); // Пустий масив для того, щоб відправити запит лише раз при завантаженні компонента

    return (
        <AppWrapper>
            <div className="row">
                <h1 className="text-center">Список пацієнтів</h1>
                <div className="col-sm-8">
                    <div className="me-3 ms-3 mt-3">
                        {patients.map((patient) => (
                            <PatientCard key={patient.account_id} patient={patient} />
                        ))}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="me-3 ms-3 mt-3">
                        {appointments.map((appointment, index) => (
                            <AppointmentCard key={index} appointment={appointment} />
                        ))}
                    </div>
                </div>
            </div>
        </AppWrapper>
    );
}

export default PatientList;