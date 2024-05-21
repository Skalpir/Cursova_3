import React, { useState } from "react";
import AppWrapper from "../containers/AppWrapper";
import Session from "../components/Session";

const ProfilePage = () => {
  const user = Session.getUserData();
  const [editable, setEditable] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    // Здесь можно добавить логику сохранения изменений, например, отправку на сервер
    console.log("Сохранено", editedUser);
    setEditable(false);
  };

  const handleCancelClick = () => {
    setEditedUser(user);
    setEditable(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <AppWrapper>
      <div className="container">
        <h1 className="mb-4 text-center">Профиль пользователя</h1>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Информация о пользователе</h5>
            <p className="mb-2">
              <strong>Имя:</strong>{" "}
              {editable ? (
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                />
              ) : (
                user.name
              )}
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              {editable ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                />
              ) : (
                user.email
              )}
            </p>
            <p className="mb-2">
              <strong>Роль:</strong> {user.role}
            </p>
            {user.role === "doctor" ? (
              <>
                <p className="mb-2">
                  <strong>Специализация:</strong>{" "}
                  {editable ? (
                    <input
                      type="text"
                      name="specialization"
                      value={editedUser.specialization}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.specialization
                  )}
                </p>
                <p className="mb-2">
                  <strong>Опыт работы:</strong>{" "}
                  {editable ? (
                    <input
                      type="number"
                      name="experience"
                      value={editedUser.experience}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.experience
                  )}
                </p>
              </>
            ) : null
            }
            {editable ? (
              <>
                <button
                  className="btn btn-primary mr-2 mb-2 me-2"
                  onClick={handleSaveClick}
                >
                  Сохранить
                </button>
                <button
                  className="btn btn-secondary mr-2 mb-2 me-2"
                  onClick={handleCancelClick}
                >
                  Отмена
                </button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={handleEditClick}>
                Редактировать
              </button>
            )}
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default ProfilePage;
