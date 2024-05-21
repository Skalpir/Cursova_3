import React, { useState } from 'react';

function AppointmentForm({ patient, doctor }) {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const procedures = ["Удаление зуба", "Чистка зубов", "Пломбирование", "Протезирование"];
  const descriptions = {
      "Удаление зуба": "Процедура удаления зуба",
      "Чистка зубов": "Процедура чистки зубов",
      "Пломбирование": "Процедура пломбирования зуба",
      "Протезирование": "Процедура протезирования зуба"
  };

  // Функция для обработки изменения даты приёма
  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleProcedureChange = (event) => {
    setProcedure(event.target.value);
  };

  // Функция для обработки сохранения записи
  const saveAppointment = () => {
    const appointmentDetails = {
      patient,
      doctor,
      appointmentDate
    };
    // Здесь можно добавить логику сохранения данных, например, отправку на сервер
    console.log("Детали записи на приём:", appointmentDetails);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Запись на приём</h5>
        <form>
          <div className="form-group mb-3">
            <p>Пациент:</p>
            <p>{patient.firstName} {patient.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <p>Врач:</p>
            <p>{doctor.name}</p>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="appointmentDate">Дата приёма:</label>
            <input type="date" className="form-control" id="appointmentDate" value={appointmentDate} onChange={handleDateChange} />
            <label htmlFor="procedure">Процедура:</label>
            <select className="form-control" id="procedure" value={procedure} onChange={handleProcedureChange}>
                <option value="">Выберите процедуру</option>
                {procedures.map((procedure) => (
                    <option key={procedure} value={procedure}>
                    {procedure}
                    </option>
                ))}
            </select>
          </div>
          <button type="button" className="btn btn-primary  mb-3" onClick={saveAppointment}>Записать на приём</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
