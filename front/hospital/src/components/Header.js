import React from "react";
import { useNavigate } from "react-router-dom";
import Session from "./Session";
import { ReactComponent as LogoSVG } from "../styles/logo.svg";

function Header() {
  const user = Session.getUserData();
  const navigate = useNavigate();

  const logout = () => {
    Session.logout();
    navigate("/");
  };

  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <LogoSVG class="bi me-2" width="50px" height="50px" />
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {!!user && user.role === "patient" && (
              <>
                <li>
                  <a href="/" class="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/appointments" class="nav-link px-2 text-white">
                    Appointments
                  </a>
                </li>
              </>
            )}
            {!!user && user.role === "doctor" && (
              <li>
                <a href="/patients" class="nav-link px-2 text-white">
                  Patients
                </a>
              </li>
            )}

            <li>
              <a href="/about" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <div class="text-end">
            {!!user ? (
              <div class="d-flex align-items-center">
                <span class="me-2 text-white">{user.profile.firstName}</span>
                <span class="me-2 text-white">{user.profile.lastName}</span>
                <a href="/profile" class="btn btn-outline-light me-2">
                  Profile
                </a>
                <a href="#" class="btn btn-warning" onClick={logout}>
                  Logout
                </a>
              </div>
            ) : (
              <div class="d-flex align-items-center">
                <a href="/login" class="btn btn-outline-light me-2">
                  Login
                </a>
                <a href="/register" class="btn btn-warning">
                  Sign-up
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
