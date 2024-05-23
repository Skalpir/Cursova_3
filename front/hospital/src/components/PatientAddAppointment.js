import React, { useState, useEffect } from 'react';
import Api from 'easy-fetch-api';
import { AppointmentDTO } from "../models/AppointmentDTO";
import { useNavigate } from 'react-router-dom';

function PatientAddAppointment({ patient }) {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const [doctor, setDoctor] = useState(null);

  const navigate = useNavigate();

  const procedures = ["Щепленя від 'Кашлюк' ", "Щепленя від 'дифтерія і правець'", "Щепленя від 'Кір, Паротит, Краснуха' ", "Щеплення від 'поліомеліт' "];

  const descriptions = {
    "Щепленя від 'Кашлюк'": {
      name: "Щепленя від 'Кашлюк'",
      description: "Профілактичне щеплення від Кашлюка",
      duration: 30,
      cost: 1000
    },
    "Щепленя від 'дифтерія і правець'": {
      name: "Щепленя від 'дифтерія і правець'",
      description: "Профілактичне щеплення від Дифтерії та Правцю",
      duration: 60,
      cost: 2000
    },
    "Щепленя від 'Кір, Паротит, Краснуха' ": {
      name: "Щепленя від 'Кір, Паротит, Краснуха' ",
      description: "Профілактичне щеплення від Кіру, Паротиту та Краснухи",
      duration: 45,
      cost: 1500
    },
    "Щеплення від 'поліомеліт' ": {
      name: "Щеплення від 'поліомеліт' ",
      description: "Профілактичне щеплення від Поліомеліту",
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


    console.log("Деталі запису на прийом:", newAppointment);

    Api.post({
      url: '/api/appointment/',
      data: newAppointment,
      callback: (response) => {
        console.log('Запис на прийом збережений:', response);
        navigate('/appointments');
      }
    });
  };

  if (!doctor) {
    return <p>Завантаження данних лікаря...</p>;
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Запис на прийом</h5>
        <form>
          <div className="form-group mb-3">
            <p>Лікар:</p>
            <p>{doctor.firstName} {doctor.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate">Дата прийому:</label>
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
              <option value="">Вибиріть процедуру</option>
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
            Записать на прийом
          </button>
        </form>
      </div>
    </div>
  );
}

export default PatientAddAppointment;
