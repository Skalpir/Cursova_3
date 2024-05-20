
class PatientDTO {
    constructor() {
        this.nickname = "";
        this.firstName = "";
        this.lastName = "";
        this.dateOfBirth = new Date
        this.gender = "";
        this.contactInfo = "";
        this.medicalHistory = {
            pastIllnesses: [],
            surgeries: [],
            medications: [],
            allergies: []
        };
        this.account_id = "";
    }

    static fromModel(model) {
        const dto = new PatientDTO();
        dto.nickname = model.nickname;
        dto.firstName = model.firstName;
        dto.lastName = model.lastName;
        dto.dateOfBirth = model.dateOfBirth
        dto.gender = model.gender;
        dto.contactInfo = model.contactInfo;
        dto.medicalHistory = model.medicalHistory;
        dto.account_id = model.account_id;
        return dto;
    }
}

export default PatientDTO;