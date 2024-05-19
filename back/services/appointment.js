const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Appointment } = require('../models/UserModel');
const jsonParser = express.json();

const create = async (patient_id,doctor_id,time, res) => {
    try {
        const Pat = await Patient.find({ "account_id": patient_id});
        const Doc = await Doctor.find({ "doctor_id": doctor_id});

        // Создаем новый объект приема с данными из запроса
        const newAppointment = new Appointment()
            newAppointment.dataTime = time;
            newAppointment.patient = Pat._id
            newAppointment.doctor = Doc._id
            newAppointment.status = "Awaited";


            // Другие поля при необходимости

            // Сохраняем новый прием в базе данных
            await newAppointment.save();

            res.status(201).json(newAppointment); // Отправляем созданный прием в ответе
}
     catch (error) {
        res.status(404).json({ error: error.message });
    }};


// на уровне ендпоинта будет идти разбор параметров а сюда уже будут залетать только поля и _ид обьекта
const update = async (id,body, res) => 
{
    //console.log(req); 
    const updatedFields = body;
    //console.log(updatedFields)
    let ObjectUserId;
    try{ 
    //console.log(account_id)
    const Object = await Appointment.find({ "_id": id}); // работаем
    //console.log(Object)
    ObjectUserId = Object[0]._id;
  }
    catch (error) {console.log(error)} 
    //console.log(ObjectUserId)
    try {
      // Найти продукт по ID и обновить его поля
      const updatedUser = await Appointment.findByIdAndUpdate(
        ObjectUserId,
        { $set: updatedFields },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating Appointment' });
    }
};
const remove = async (req, res) => {}
const report = async (req,res) => {}