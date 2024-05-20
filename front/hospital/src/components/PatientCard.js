import PatientDTO from "../models/PatientDTO";
import { Link, useNavigate } from "react-router-dom";

function PatientCard({ patient }) {
  const patientDTO = PatientDTO.fromModel(patient);
  const navigate = useNavigate();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{patientDTO.nickname}</h5>
        <div className="row">
          <div className="col-sm-8">
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                First name:
              </div>
              <div className="col-sm-8">{patientDTO.firstName}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Last name:
              </div>
              <div className="col-sm-8">{patientDTO.lastName}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Date of Birth:
              </div>
              <div className="col-sm-8">{patientDTO.dateOfBirth}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">Gender:</div>
              <div className="col-sm-8">{patientDTO.gender}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Contact Info:
              </div>
              <div className="col-sm-8">{patientDTO.contactInfo}</div>
            </div>
            <div>
              <h6 className="card-subtitle mb-2 mt-3 text-muted">Medical History</h6>
              <div className="row mb-2">
                <div className="col-sm-4 text-right font-weight-bold">
                  Past Illnesses:
                </div>
                <div className="col-sm-8">
                  {patientDTO.medicalHistory.pastIllnesses.join(", ")}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 text-right font-weight-bold">
                  Surgeries:
                </div>
                <div className="col-sm-8">
                  {patientDTO.medicalHistory.surgeries.join(", ")}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 text-right font-weight-bold">
                  Medications:
                </div>
                <div className="col-sm-8">
                  {patientDTO.medicalHistory.medications.join(", ")}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4 text-right font-weight-bold">
                  Allergies:
                </div>
                <div className="col-sm-8">
                  {patientDTO.medicalHistory.allergies.join(", ")}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column justify-content-center">
            <button className="btn btn-primary mb-3 flex-grow-1">Назначить встречу</button>
            <button className="btn btn-secondary flex-grow-1" onClick={() => navigate(`/patients/${patientDTO.account_id}`, { state: { patient } })}>Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
