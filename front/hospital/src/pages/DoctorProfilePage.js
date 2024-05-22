import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppWrapper from '../containers/AppWrapper';
import Api from 'easy-fetch-api';
import Session from '../components/Session';

function DoctorProfileEditor() {
  const doctor = Session.getUserData();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    workSchedule: '',
    contactInfo: '',
    dayOnDuty: 0,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [done , setDone] = useState(false);

  useEffect(() => {
    if (doctor && !isLoaded) {
      setFormData({
        firstName: doctor.profile.firstName || '',
        lastName: doctor.profile.lastName || '',
        specialization: doctor.profile.specialization || '',
        workSchedule: doctor.profile.workSchedule || '',
        contactInfo: doctor.profile.contactInfo || '',
        dayOnDuty: doctor.profile.dayOnDuty || 0,
      });
      setIsLoaded(true);
    }
  }, [doctor, isLoaded]);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setDone(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Api.setBaseUrl('http://localhost:3000');
    Api.patch({
      url: '/api/doctor/' + doctor.profile._id,
      data: formData,
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
                <h5 className="card-title">Редагування інформації про лікаря</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="firstName">Ім'я</label>
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
                    <label htmlFor="lastName">Прізвище</label>
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
                    <label htmlFor="specialization">Спеціалізація</label>
                    <input
                      type="text"
                      className="form-control"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="workSchedule">Графік роботи</label>
                    <input
                      type="text"
                      className="form-control"
                      id="workSchedule"
                      name="workSchedule"
                      value={formData.workSchedule}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="contactInfo">Контактна інформація</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactInfo"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="dayOnDuty">День на черзі</label>
                    <input
                      type="number"
                      className="form-control"
                      id="dayOnDuty"
                      name="dayOnDuty"
                      value={formData.dayOnDuty}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Зберегти
                  </button>
                  {done && <p className="text-success mt-3">Дані успішно збережені</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}

export default DoctorProfileEditor;
