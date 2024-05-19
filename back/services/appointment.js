const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Appointment } = require('../models/UserModel');
const jsonParser = express.json();
const {Procedure, Patient, Doctor} = require("../models/UserModel");

//name: String,
//description: String,
//duration: Number, // продолжительность
//cost: Number,
//doctor_id : String,
//patient_id : String,
//status : Boolean,

const create = async (patient_id,doctor_id,time,procedures, res) => {
    try {
        //console.log(patient_id)
        const Pat = await Patient.findOne({ "account_id": patient_id});
        //console.log(Pat)
        //console.log(doctor_id)
        const Doc = await Doctor.findOne({ "doctor_id": doctor_id});
        //console.log(Doc) 

        // Создаем новый объект приема с данными из запроса
        const newAppointment = new Appointment()
            newAppointment.dataTime = time;
            //console.log(Pat._id)
            //console.log(Doc._id)
            newAppointment.patient = Pat._id
            newAppointment.doctor = Doc._id
            newAppointment.status = "Awaited";

            if (procedures != [])
              {
                procedures.forEach(async procedure => 
                  {
                  //console.log(procedure)
                  
                  const newProcedure = new Procedure();
                  newProcedure.name = procedure.name;
                  newProcedure.duration = procedure.duration
                  newProcedure.cost = procedure.cost
                  newProcedure.description = procedure.description
                  newProcedure.patient_id = Pat._id
                  newProcedure.doctor_id = Doc._id

                  newAppointment.procedures.push(newProcedure._id)
                  await newProcedure.save()
                  
              })
            }


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

module.exports = {
  createNewAppoiment: create

};