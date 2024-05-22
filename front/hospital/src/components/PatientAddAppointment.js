import React, { useState, useEffect } from 'react';
import Api from 'easy-fetch-api';
import { AppointmentDTO } from "../models/AppointmentDTO";
import { useNavigate } from 'react-router-dom';

function PatientAddAppointment({ patient }) {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const [doctor, setDoctor] = useState(null);

  const navigate = useNavigate();

  const procedures = ["Удаление зуба", "Чистка зубов", "Пломбирование", "Протезирование"];

  const descriptions = {
    "Удаление зуба": {
      name: "Удаление зуба",
      description: "Процедура удаления зуба",
      duration: 30,
      cost: 1000
    },
    "Чистка зубов": {
      name: "Чистка зубов",
      description: "Процедура чистки зубов",
      duration: 60,
      cost: 2000
    },
    "Пломбирование": {
      name: "Пломбирование",
      description: "Процедура пломбирования зуба",
      duration: 45,
      cost: 1500
    },
    "Протезирование": {
      name: "Протезирование",
      description: "Процедура протезирования зуба",
      duration: 90,
      cost: 3000
    }
    }

  useEffect(() => {
    const fetchDoctor = () => {
      Api.setBaseUrl('http://localhost:3000');
      Api.get({
        url: '/api/doctor/getCurrentDoctor',
        callback: (response) => {
          setDoctor(response);
        }
      });
    };

    fetchDoctor();
  }, []);

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleProcedureChange = (event) => {
    setProcedure(event.target.value);
  };

  const saveAppointment = () => {
    const newAppointment = {}
    newAppointment.patient_id = patient._id;
    newAppointment.doctor_id = doctor._id;
    newAppointment.dateTime = appointmentDate;
    newAppointment.procedures = [descriptions[procedure]];


    console.log("Детали записи на приём:", newAppointment);

    Api.post({
      url: '/api/appointment/',
      data: newAppointment,
      callback: (response) => {
        console.log('Запись на приём сохранена:', response);
        // Можно добавить логику для уведомления пользователя об успешном сохранении
        navigate('/appointments');
      }
    });
  };

  if (!doctor) {
    return <p>Загрузка данных врача...</p>;
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Запись на приём</h5>
        <form>
          <div className="form-group mb-3">
            <p>Врач:</p>
            <p>{doctor.firstName} {doctor.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate">Дата приёма:</label>
            <input
              type="date"
              className="form-control"
              id="appointmentDate"
              value={appointmentDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="procedure">Процедура:</label>
            <select
              className="form-control"
              id="procedure"
              value={procedure}
              onChange={handleProcedureChange}
            >
              <option value="">Выберите процедуру</option>
              {procedures.map((procedure) => (
                <option key={procedure} value={procedure}>
                  {procedure}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={saveAppointment}
          >
            Записаться на приём
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientAddAppointment;
