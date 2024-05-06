const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bodyParser = require('body-parser');
const { Patient } = require('../models/UserModel');
const jsonParser = express.json();

const updateById = async (req,body, res) =>{
    let = account_id = req;
    console.log(req);
    let = account_id = account_id.slice(1); 
    const updatedFields = body.body;
    console.log(updatedFields)
    let ObjectUserId;
    try{ 
    console.log(account_id)
    const Object = await Patient.find({ "account_id": account_id}); // работаем
    console.log(Object)
    ObjectUserId = Object[0]._id;
  }
    catch (error) {console.log(error)} 
    console.log(ObjectUserId)
    try {
      // Найти продукт по ID и обновить его поля
      const updatedUser = await Patient.findByIdAndUpdate(
        ObjectUserId,
        { $set: updatedFields },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating user' });
    }
};
const allUsers = () =>{};
const infoById = () =>{};


module.exports = {
    updatePatientInfo: updateById,
    takeInfoAboutAllPatient: allUsers,
    infoAboutPatient : infoById,

};