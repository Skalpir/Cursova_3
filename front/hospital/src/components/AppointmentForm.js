import React, { useState } from 'react';

function AppointmentForm({ patient, doctor }) {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [procedure, setProcedure] = useState('');
  const procedures = ["Щепленя від 'Кашлюк' ", "Щепленя від 'дифтерія і правець'", "Щепленя від 'Кір, Паротит, Краснуха' ", "Щеплення від 'поліомеліт' "];
  const descriptions = {
      "Щепленя від 'Кашлюк'": "Щепленя від 'Кашлюк'",
      "Щепленя від 'дифтерія і правець'": "Щепленя від 'дифтерія і правець'",
      "Щепленя від 'Кір, Паротит, Краснуха'": "Щепленя від 'Кір, Паротит, Краснуха'",
      "Щеплення від 'поліомеліт'": "Щеплення від 'поліомеліт'"
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
        <h5 className="card-title">Запис на прийом</h5>
        <form>
          <div className="form-group mb-3">
            <p>Пацієнт:</p>
            <p>{patient.firstName} {patient.lastName}</p>
          </div>
          <div className="form-group mb-3">
            <p>Лікар:</p>
            <p>{doctor.name}</p>
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
