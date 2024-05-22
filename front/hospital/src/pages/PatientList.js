import PatientCard from "../components/PatientCard";
import AppointmentCard from "../components/AppointmentCard";
import PatientDTO from "../models/PatientDTO";
import AppWrapper from "../containers/AppWrapper";
import Api from "easy-fetch-api";

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

    const appointments = [
        {
            dateTime: "2021-12-31T12:00:00",
            patient: "1",
            doctor: "1",
            status: "scheduled",
            procedures: [
                {
                    name: "checkup",
                    description: "annual checkup",
                    duration: 60,
                    cost: 100,
                    doctor_id: "1",
                    patient_id: "1",
                    status: false
                },
                {
                    name: "vaccination",
                    description: "flu shot",
                    duration: 15,
                    cost: 50,
                    doctor_id: "1",
                    patient_id: "1",
                    status: false
                }
            ]
        },
        {
            dateTime: "2022-01-15T09:00:00",
            patient: "2",
            doctor: "1",
            status: "scheduled",
            procedures: [
                {
                    name: "checkup",
                    description: "annual checkup",
                    duration: 60,
                    cost: 100,
                    doctor_id: "1",
                    patient_id: "2",
                    status: false
                },
                {
                    name: "vaccination",
                    description: "flu shot",
                    duration: 15,
                    cost: 50,
                    doctor_id: "1",
                    patient_id: "2",
                    status: false
                }
            ]
        }
    ];


    return (
        <AppWrapper>
            <div className="row">
                <h1 className="text-center">Patient List</h1>
                <div className="col-sm-8">
                    <div class="me-3 ms-3 mt-3">
                        {patients.map((patient) => (
                            <PatientCard patient={PatientDTO.fromModel(patient)} />
                        ))}
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="me-3 ms-3 mt-3">
                        {appointments.map((appointment) => (
                            <AppointmentCard appointment={appointment} />
                        ))}
                    </div>
                </div>
            </div>
        </AppWrapper>
    );
}

export default PatientList;