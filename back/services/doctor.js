const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Doctor } = require('../models/UserModel');
const jsonParser = express.json();

const updateById = async (req,body, res) =>{
    let = account_id = req;
    //console.log(req);
    let = account_id = account_id.slice(1); 
    const updatedFields = body;
    //console.log(updatedFields)
    let ObjectUserId;
    try{ 
    //console.log(account_id)
    const Object = await Doctor.find({ "doctor_id": account_id}); // работаем
    //console.log(Object)
    ObjectUserId = Object[0]._id;
  }
    catch (error) {console.log(error)} 
    console.log(ObjectUserId)
    try {
      // Найти продукт по ID и обновить его поля
      const updatedUser = await Doctor.findByIdAndUpdate(
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


const infoByField = async (params, res) =>
{

    let = account_id = req;
    //console.log(req);
    let = account_id = account_id.slice(1); 
    //console.log(updatedFields)

    const fieldName = "customFieldName"; // Значение поля, по которому вы хотите искать
    const value = "значение_поля_для_поиска"; // Значение, по которому вы хотите выполнить поиск
    const query = {};
    query[fieldName] = value;

    let ObjectUserId;
    try{ 
    //console.log(account_id)
    const result = await Doctor.find(query);
    //console.log(Object)
    //ObjectUserId = Object[0]._id;
    res.json(result);
  }
  catch (error) {
    res.status(404).json({ error: error.message });
  }
  
  };

const infoById = async (req,res) =>{
    {

        let = account_id = req;
        //console.log(req);
        let = account_id = account_id.slice(1); 
        //console.log(updatedFields)
        let ObjectUserId;
        try{ 
        //console.log(account_id)
        const Object = await Doctor.find({ "doctor_id": account_id}); // работаем
        //console.log(Object)
        //ObjectUserId = Object[0]._id;
        res.json(Object);
      }
      catch (error) {
        res.status(404).json({ error: error.message });
      }
      
      };
};

const allUsers = async (res) =>
{
  try {
    const users = await Doctor.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    updateDoctorInfo: updateById,
    takeInfoAboutAllDoctors: allUsers,
    infoAboutDoctor : infoById,

};