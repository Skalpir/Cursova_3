import React, { useState } from 'react';
import PatientDTO from '../models/PatientDTO'; // Подключаем класс PatientDTO

function PatientEditorForm({ patient }) {
  // Создаем состояние для хранения данных о пациенте
  const [editedPatient, setEditedPatient] = useState(PatientDTO.fromModel(patient));

  // Функция для обновления состояния при изменении данных пациента
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPatient({
      ...editedPatient,
      [name]: value
    });
  };

  // Функция для обновления состояния медицинской истории
  const handleMedicalHistoryChange = (key, event) => {
    const { value } = event.target;
    setEditedPatient({
      ...editedPatient,
      medicalHistory: {
        ...editedPatient.medicalHistory,
        [key]: value.split(',').map(item => item.trim())
      }
    });
  };

  // Функция для сохранения изменений
  const saveChanges = () => {
    // Здесь можно добавить логику сохранения данных, например, отправку на сервер
    console.log("Измененные данные пациента:", editedPatient);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Редактирование данных пациента</h5>
        <form>
          <div className="row">
            <div className="col-md-6">
              {/* Первая половина формы */}
              <div className="form-group">
                <label htmlFor="nickname">Никнейм:</label>
                <input type="text" className="form-control" id="nickname" name="nickname" value={editedPatient.nickname} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Имя:</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={editedPatient.firstName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Фамилия:</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={editedPatient.lastName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={editedPatient.dateOfBirth} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Пол:</label>
                <select className="form-control" id="gender" name="gender" value={editedPatient.gender} onChange={handleInputChange}>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactInfo">Контактная информация:</label>
                <input type="text" className="form-control" id="contactInfo" name="contactInfo" value={editedPatient.contactInfo} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Вторая половина формы */}
              <div className="form-group">
                <label htmlFor="pastIllnesses">Прошлые заболевания (разделяйте запятой):</label>
                <input type="text" className="form-control" id="pastIllnesses" name="pastIllnesses" value={editedPatient.medicalHistory.pastIllnesses.join(', ')} onChange={(e) => handleMedicalHistoryChange('pastIllnesses', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="surgeries">Операции (разделяйте запятой):</label>
                <input type="text" className="form-control" id="surgeries" name="surgeries" value={editedPatient.medicalHistory.surgeries.join(', ')} onChange={(e) => handleMedicalHistoryChange('surgeries', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="medications">Принимаемые препараты (разделяйте запятой):</label>
                <input type="text" className="form-control" id="medications" name="medications" value={editedPatient.medicalHistory.medications.join(', ')} onChange={(e) => handleMedicalHistoryChange('medications', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="allergies">Аллергии (разделяйте запятой):</label>
                <input type="text" className="form-control" id="allergies" name="allergies" value={editedPatient.medicalHistory.allergies.join(', ')} onChange={(e) => handleMedicalHistoryChange('allergies', e)} />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={saveChanges}>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PatientEditorForm;