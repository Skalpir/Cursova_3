// Connecting to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.30.60.96:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true });

// Patient schema
const patientSchema = new mongoose.Schema({
    nickname: String, 
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    contactInfo: String,
    medicalHistory: {
        pastIllnesses: [String],
        surgeries: [String],
        medications: [String],
        allergies: [String],
        
    },
    account_id : String
});

// Doctor schema
const doctorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    specialization: String,
    workSchedule: String,
    contactInfo: String,
    dayOnDuty: Number
});

// Appoiment schema
const appointmentSchema = new mongoose.Schema({
    dateTime: Date,
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    status: String,
    procedures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Procedure' }],
    emailStatus : { type: String, default: "no" },

    
});

// Appoiment report schema
const appointmentReportSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    examinationResults: String,
    prescriptions: [String], 
    recommendations: String,
    diagnosis: String 
});

// Procedure schema
const procedureSchema = new mongoose.Schema({
    name: String,
    description: String,
    duration: Number, 
    cost: Number,
    doctor_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    patient_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    status : Boolean,
});

// Departament Schema
const departmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
});

// Prescription Schema
const prescriptionSchema = new mongoose.Schema({
    medication: String,
    dosage: String,
    duration: String,
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }
});


module.exports = {
    Patient: mongoose.model('Patient', patientSchema),
    Doctor: mongoose.model('Doctor', doctorSchema),
    Appointment: mongoose.model('Appointment', appointmentSchema),
    AppointmentReport: mongoose.model('AppointmentReport', appointmentReportSchema),
    Procedure: mongoose.model('Procedure', procedureSchema),
    Department: mongoose.model('Department', departmentSchema),
    Prescription: mongoose.model('Prescription', prescriptionSchema)
};
