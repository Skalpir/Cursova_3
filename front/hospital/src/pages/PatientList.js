import PatientCard from "../components/PatientCard";
import PatientDTO from "../models/PatientDTO";
import AppWrapper from "../containers/AppWrapper";

function PatientList() {
    const patients = [
        {
            nickname: "John",
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "1990-01-01",
            gender: "male",
            contactInfo: "123-456-7890",
            medicalHistory: {
                pastIllnesses: ["cold", "flu"],
                surgeries: [],
                medications: [],
                allergies: ["pollen", "cats"]
            },
            account_id: "1"
        },
        {
            nickname: "Jane",
            firstName: "Jane",
            lastName: "Smith",
            dateOfBirth: "1995-02-02",
            gender: "female",
            contactInfo: "098-765-4321",
            medicalHistory: {
                pastIllnesses: ["broken leg"],
                surgeries: ["appendectomy"],
                medications: ["ibuprofen"],
                allergies: ["peanuts"]
            },
            account_id: "2"
        }
    ];

    return (
        <AppWrapper>
            <div class="me-3 ms-3 mt-3">
                {patients.map((patient) => (
                    <PatientCard patient={PatientDTO.fromModel(patient)} />
                ))}
            </div>
        </AppWrapper>
    );
}

export default PatientList;