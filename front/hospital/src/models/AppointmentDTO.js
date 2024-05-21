class ProcedureDTO {
    constructor() {
        this.name = "";
        this.description = "";
        this.duration = 0;
        this.cost = 0;
        this.doctor_id = "";
        this.patient_id = "";
        this.status = false;
    }

    static fromModel(model) {
        const dto = new ProcedureDTO();
        dto.name = model.name;
        dto.description = model.description;
        dto.duration = model.duration;
        dto.cost = model.cost;
        dto.doctor_id = model.doctor_id;
        dto.patient_id = model.patient_id;
        dto.status = model.status;
        return dto;
    }
}

class AppointmentDTO {
    constructor() {
        this.dateTime = new Date();
        this.patient = "";
        this.doctor = "";
        this.status = "";
        this.procedures = [];
    }

    static fromModel(model) {
        const dto = new AppointmentDTO();
        dto.dateTime = model.dateTime;
        dto.patient = model.patient;
        dto.doctor = model.doctor;
        dto.status = model.status;
        dto.procedures = model.procedures.map((procedure) => ProcedureDTO.fromModel(procedure));
        return dto;
    }
}

module.exports = {
    ProcedureDTO,
    AppointmentDTO
};
