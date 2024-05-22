import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../containers/AppWrapper';

function UserProfileEditor({ user }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    dateOfBirth: '',
    gender: '',
    contactInfo: '',
    medicalHistory: {
      pastIllnesses: '',
      surgeries: '',
      medications: '',
      allergies: '',
    },
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.profile.firstName || '',
        lastName: user.profile.lastName || '',
        nickname: user.profile.nickname,
        dateOfBirth: user.profile.dateOfBirth.split('T')[0],
        gender: user.profile.gender,
        contactInfo: user.profile.contactInfo,
        medicalHistory: {
          pastIllnesses: user.profile.medicalHistory.pastIllnesses.join(', '),
          surgeries: user.profile.medicalHistory.surgeries.join(', '),
          medications: user.profile.medicalHistory.medications.join(', '),
          allergies: user.profile.medicalHistory.allergies.join(', '),
        },
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.medicalHistory) {
      setFormData({
        ...formData,
        medicalHistory: {
          ...formData.medicalHistory,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер
    console.log('Обновленные данные пользователя:', formData);
    // Перенаправление на другую страницу после сохранения
  };

  return (
    <AppWrapper>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Редактирование данных пользователя</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="firstName">Имя</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastName">Фамилия</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="nickname">Никнейм</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nickname"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="dateOfBirth">Дата рождения</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="gender">Пол</label>
                  <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="contactInfo">Контактная информация</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactInfo"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                  />
                </div>
                <h6 className="mt-4">Медицинская история</h6>
                <div className="form-group mb-3">
                  <label htmlFor="pastIllnesses">Прошлые заболевания (разделяйте запятой)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pastIllnesses"
                    name="pastIllnesses"
                    value={formData.medicalHistory.pastIllnesses}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="surgeries">Операции (разделяйте запятой)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="surgeries"
                    name="surgeries"
                    value={formData.medicalHistory.surgeries}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="medications">Принимаемые препараты (разделяйте запятой)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="medications"
                    name="medications"
                    value={formData.medicalHistory.medications}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="allergies">Аллергии (разделяйте запятой)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="allergies"
                    name="allergies"
                    value={formData.medicalHistory.allergies}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppWrapper>
  );
}

export default UserProfileEditor;
