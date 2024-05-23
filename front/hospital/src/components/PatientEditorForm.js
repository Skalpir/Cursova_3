import React, { useState } from 'react';
import PatientDTO from '../models/PatientDTO';
import Api from 'easy-fetch-api'; 

function PatientEditorForm({ patient }) {
  // creating state for patient data
  const [editedPatient, setEditedPatient] = useState(PatientDTO.fromModel(patient));

  // update state if patient data changed
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPatient({
      ...editedPatient,
      [name]: value
    });
  };

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

  const saveChanges = () => {
    const updatedFields = 
    {
      nickname: editedPatient.nickname,
      firstName: editedPatient.firstName,
      lastName: editedPatient.lastName,
      dateOfBirth: editedPatient.date,
      gender: editedPatient.gender,
      contactInfo: editedPatient.contactInfo,
      medicalHistory: {
        pastIllnesses: editedPatient.medicalHistory.pastIllnesses,
        surgeries: editedPatient.medicalHistory.surgeries,
        medications: editedPatient.medicalHistory.medications,
        allergies: editedPatient.medicalHistory.allergies
      }
    }
    Api.setBaseUrl('http://localhost:3000');
    Api.patch({
      url: '/api/patient/' + patient._id,
      data: updatedFields,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Редагування данних Пацієнта</h5>
        <form>
          <div className="row">
            <div className="col-md-6">
              {/* Перша половина форми */}
              <div className="form-group">
                <label htmlFor="nickname">Нікнейм:</label>
                <input type="text" className="form-control" id="nickname" name="nickname" value={editedPatient.nickname} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Ім'я:</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={editedPatient.firstName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Призвище:</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={editedPatient.lastName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Дата народження:</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={editedPatient.dateOfBirth} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Стать:</label>
                <select className="form-control" id="gender" name="gender" value={editedPatient.gender} onChange={handleInputChange}>
                  <option value="male">Чоловік</option>
                  <option value="female">Жінка</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactInfo">Контактна інформація:</label>
                <input type="text" className="form-control" id="contactInfo" name="contactInfo" value={editedPatient.contactInfo} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-md-6">
              {/* Друга половина форми */}
              <div className="form-group">
                <label htmlFor="pastIllnesses">Минулі захворювання (розділяйте комою):</label>
                <input type="text" className="form-control" id="pastIllnesses" name="pastIllnesses" value={editedPatient.medicalHistory.pastIllnesses.join(', ')} onChange={(e) => handleMedicalHistoryChange('pastIllnesses', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="surgeries">Операції (розділяйте комою):</label>
                <input type="text" className="form-control" id="surgeries" name="surgeries" value={editedPatient.medicalHistory.surgeries.join(', ')} onChange={(e) => handleMedicalHistoryChange('surgeries', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="medications">Приймаємі препарати (розділяйте комою):</label>
                <input type="text" className="form-control" id="medications" name="medications" value={editedPatient.medicalHistory.medications.join(', ')} onChange={(e) => handleMedicalHistoryChange('medications', e)} />
              </div>
              <div className="form-group">
                <label htmlFor="allergies">Аллергії (розділяйте комою):</label>
                <input type="text" className="form-control" id="allergies" name="allergies" value={editedPatient.medicalHistory.allergies.join(', ')} onChange={(e) => handleMedicalHistoryChange('allergies', e)} />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={saveChanges}>Зберігти</button>
        </form>
      </div>
    </div>
  );
}

export default PatientEditorForm;