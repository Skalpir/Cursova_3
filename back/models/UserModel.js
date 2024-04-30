// Подключение к MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hospital', { useNewUrlParser: true, useUnifiedTopology: true });

// Схема для пациентов
const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    contactInfo: String,
    medicalHistory: String
});

// Схема для врачей
const doctorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    specialization: String,
    workSchedule: String,
    contactInfo: String
});

// Схема для приемов
const appointmentSchema = new mongoose.Schema({
    dateTime: Date,
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    status: String
});

// Схема для отчетов о приемах
const appointmentReportSchema = new mongoose.Schema({
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    examinationResults: String,
    prescriptions: [String],
    recommendations: String,
    diagnosis: String
});

// Схема для медицинских процедур
const procedureSchema = new mongoose.Schema({
    name: String,
    description: String,
    duration: Number,
    cost: Number
});

// Схема для отделений
const departmentSchema = new mongoose.Schema({
    name: String,
    description: String,
    doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }]
});

// Схема для рецептов
const prescriptionSchema = new mongoose.Schema({
    medication: String,
    dosage: String,
    duration: String,
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }
});

// Экспорт схем для использования в других файлах
module.exports = {
    Patient: mongoose.model('Patient', patientSchema),
    Doctor: mongoose.model('Doctor', doctorSchema),
    Appointment: mongoose.model('Appointment', appointmentSchema),
    AppointmentReport: mongoose.model('AppointmentReport', appointmentReportSchema),
    Procedure: mongoose.model('Procedure', procedureSchema),
    Department: mongoose.model('Department', departmentSchema),
    Prescription: mongoose.model('Prescription', prescriptionSchema)
};
