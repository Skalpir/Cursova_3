import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../containers/AppWrapper';
import Api from 'easy-fetch-api';
import Session from '../components/Session';

function UserProfileEditor() {
  const user = Session.getUserData();
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [done , setDone] = useState(false);

  useEffect(() => {
    if (user && !isLoaded) {
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
      setIsLoaded(true);
    }
  }, [user, isLoaded]);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.medicalHistory) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        medicalHistory: {
          ...prevFormData.medicalHistory,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setDone(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      medicalHistory: {
        pastIllnesses: formData.medicalHistory.pastIllnesses.split(',').map((item) => item.trim()),
        surgeries: formData.medicalHistory.surgeries.split(',').map((item) => item.trim()),
        medications: formData.medicalHistory.medications.split(',').map((item) => item.trim()),
        allergies: formData.medicalHistory.allergies.split(',').map((item) => item.trim()),
      },
    };

    Api.setBaseUrl('http://localhost:3000');
    Api.patch({
      url: '/api/patient/' + user.profile._id,
      data: updatedFormData,
    }).then((response) => {
      console.log(response);
      Session.updateUserData();
      setDone(true);
      navigate('/profile');
    });
  };

  return (
    <AppWrapper>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-3">
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
                  {done && <p className="text-success mt-3">Данные успешно сохранены</p>}
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
