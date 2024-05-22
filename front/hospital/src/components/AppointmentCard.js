import { AppointmentDTO } from "../models/AppointmentDTO";
import { ProcedureDTO } from "../models/AppointmentDTO";

function AppointmentCard({ appointment }) {
  const appointmentDTO = AppointmentDTO.fromModel(appointment);
  const getPatient = () => {
    return appointmentDTO.patient;
  };
  const getDoctor = () => {
    return appointmentDTO.doctor;
  };
  const closeAppointment = () => {
    
  };
  const patient = getPatient();
  const doctor = getDoctor();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Appointment</h5>
        <div className="row">
          <div className="col-sm-8">
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Date and Time:
              </div>
              <div className="col-sm-8">{appointmentDTO.dateTime}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Patient:
              </div>
              <div className="col-sm-8">{patient.firstName} {patient.lastName}</div>
            </div>
            <div>
              <h6 className="card-subtitle mb-2 mt-3 text-muted">Procedures</h6>
              {appointmentDTO.procedures.map((procedure, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-sm-4 text-right font-weight-bold">
                    Name:
                  </div>
                  <div className="col-sm-8">{procedure.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <button type="button" className="btn btn-primary" onClick={closeAppointment}>Close Appointment</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;
