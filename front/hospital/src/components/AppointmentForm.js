import React, { useState } from 'react';
import Api from 'easy-fetch-api';

function AppointmentForm({ patient, doctor }) {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [procedure, setProcedure] = useState('');
   const procedures = ["Щепленя від 'Кашлюк' ", "Щепленя від 'дифтерія і правець'", "Щепленя від 'Кір, Паротит, Краснуха' ", "Щеплення від 'поліомеліт' "];

  const descriptions = {
    "Щепленя від 'Кашлюк' ": {
      name: "Щепленя від 'Кашлюк' ",
      description: "Щепленя від 'Кашлюк'",
      duration: 30,
      cost: 1000
    },
    "Щепленя від 'дифтерія і правець'": {
      name: "Щепленя від 'дифтерія і правець'",
      description: "Щепленя від 'дифтерія і правець'",
      duration: 60,
      cost: 2000
    },
    "Щепленя від 'Кір, Паротит, Краснуха'": {
      name: "Щепленя від 'Кір, Паротит, Краснуха'",
      description: "Щепленя від 'Кір, Паротит, Краснуха'",
      duration: 45,
      cost: 1500
    },
    "Щеплення від 'поліомеліт'": {
      name: "Щеплення від 'поліомеліт'",
      description: "Щеплення від 'поліомеліт'",
      duration: 90,
      cost: 3000
    }
  }


  // Функция для обработки изменения даты приёма
  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleProcedureChange = (event) => {
    setProcedure(event.target.value);
  };

  // Функция для обработки сохранения записи
  const saveAppointment = () => {
   const newAppointment = {}
    console.log(patient);
    newAppointment.patient_id = patient._id;
    newAppointment.doctor_id = doctor.profile._id;
    newAppointment.dateTime = appointmentDate;
    newAppointment.procedures = [descriptions[procedure]];
    console.log("Детали записи на приём:", newAppointment);
    // Отправка данных на сервер
    Api.setBaseUrl('http://localhost:3000');
    Api.post({
      url: '/api/appointment/',
      data: newAppointment,
      callback: (response) => {
        console.log('Запись на приём сохранена:', response);
      }
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Запис на прийом</h5>
        <form>
          <div className="form-group mb-3">
            <p>Пацієнт:</p>
            <p>{patient.firstName} {patient.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <p>Лікар:</p>
            <p>{doctor.profile.firstName} {doctor.profile.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate">Дата прийому:</label>
            <input type="date" className="form-control" id="appointmentDate" value={appointmentDate} onChange={handleDateChange} />
            <label htmlFor="procedure">Процедура:</label>
            <select className="form-control" id="procedure" value={procedure} onChange={handleProcedureChange}>
                <option value="">Вибиріть процедуру</option>
                {procedures.map((procedure) => (
                    <option key={procedure} value={procedure}>
                    {procedure}
                    </option>
                ))}
            </select>
          </div>
          <button type="button" className="btn btn-primary  mb-3" onClick={saveAppointment}>Записатись на прийом</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
