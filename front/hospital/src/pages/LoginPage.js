import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppWrapper from "../containers/AppWrapper";
import Session from "../components/Session";
import Api from "easy-fetch-api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    console.log("Данные для входа:", formData);

    Api.setBaseUrl("http://localhost:3000");
    Api.post({
      url: "/api/auth/login",
      data: formData,
    }).then((res) => {
      console.log(res);
      if (!res.success || res.error) {
        return setError(res.error || "Ошибка входа");
      }
      Session.setUserData(res.user);

        navigate("/");
    });
  };

  return (
    <AppWrapper>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Вхід</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Ім'я користувача</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Войти
                </button>
              </form>
              <p className="mt-3">
                Ще немає аккаунта? <Link to="/register">Зарегеструватись</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppWrapper>
  );
}

export default LoginPage;
