import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppWrapper from "../containers/AppWrapper";
import Api from "easy-fetch-api";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: {
      checked: false,
    },
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.setBaseUrl("http://localhost:3000");

    Api.post({
      url: "/api/auth/register",
      data: formData,
    }).then((res) => {
      if (!res.success || res.error) {
        return setError(res.error || "Ошибка регистрации");
      }

      navigate("/login");
    });
  };

  return (
    <AppWrapper>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Регестрація</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Ім'я користувача</label>
                    <input
                      type="text"
                      className="form-control  border-dark"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Пароль</label>
                    <input
                      type="password"
                      className="form-control  border-dark"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={(e) => {
                          handleChange({
                            target: {
                              name: "role",
                              value: e.target.checked ? "doctor" : "patient",
                            },
                          });
                        }}
                        className="form-check-input border-dark"
                      />
                      <label htmlFor="role" className="form-check-label">
                        Я лікар
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Зарегеструватись
                  </button>
                </form>
                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}
                <p className="mt-3">
                  Уже маєте аккаунт? <Link to="/login">Увійти</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}

export default RegistrationPage;
