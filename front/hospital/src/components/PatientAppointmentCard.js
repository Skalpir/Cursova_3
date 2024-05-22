import { AppointmentDTO } from "../models/AppointmentDTO";

function PatientAppointmentCard({ appointment }) {
  const appointmentDTO = AppointmentDTO.fromModel(appointment);
  const getDoctor = () => {
    return appointmentDTO.doctor.firstName + ' ' + appointmentDTO.doctor.lastName;
  }
  const dateOnly = appointmentDTO.dateTime.split('T')[0];
  
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8">
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Date:
              </div>
              <div className="col-sm-8">{dateOnly}</div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 text-right font-weight-bold">
                Doctor:
              </div>
              <div className="col-sm-8">{getDoctor()}</div>
            </div>
            <div>
              <h6 className="card-subtitle mb-2 mt-3 text-muted">Procedures</h6>
              {appointmentDTO.procedures.map((procedure, index) => (
                <div key={index} className="row mb-2">
                  <div className="col-sm-8">{procedure.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientAppointmentCard;