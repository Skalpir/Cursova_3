const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bodyParser = require('body-parser');
const { Patient } = require('../models/UserModel');
const jsonParser = express.json();

//странно что передать просто реквест ему норм и он хавает, если не передать респонс то отсюда нельзя будет его отправить и постмен будет бесконечно ждать(нету next части)
const updateById = async (req,body, res) =>{
    let = account_id = req;
    //console.log(req);
    let = account_id = account_id.slice(1); 
    const updatedFields = body;
    //console.log(updatedFields)
    let ObjectUserId;
    try{ 
    //console.log(account_id)
    const Object = await Patient.find({ "account_id": account_id}); // работаем
    //console.log(Object)
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


const allUsers = async (res) =>
{
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const infoById = async (req,res) =>
{

  let = account_id = req;
  //console.log(req);
  let = account_id = account_id.slice(1); 
  //console.log(updatedFields)
  let ObjectUserId;
  try{ 
  //console.log(account_id)
  const Object = await Patient.find({ "account_id": account_id}); // работаем
  //console.log(Object)
  //ObjectUserId = Object[0]._id;
  res.json(Object);
}
catch (error) {
  res.status(404).json({ error: error.message });
}

};

//Надо бы удалять все записи этого аккаунта и самого пациента в системе(типа каскадное удаление ручками)
//сначала реализую записи и рецепты для него
const deleteById = async (res,req) => 
{ 

  
}


module.exports = {
    updatePatientInfo: updateById,
    takeInfoAboutAllPatient: allUsers,
    infoAboutPatient : infoById,

};