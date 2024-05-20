// то ради чего затевалась возня ПРИВИВКИ!!!

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyParser = require('body-parser');
const { Procedure } = require('../models/UserModel');
const jsonParser = express.json();

//найти процедуру по id
const info = async (id, res) => {

try {
const NeObjectId = id;
const objectId = new mongoose.Types.ObjectId(NeObjectId);
const Proced = await Procedure.findOne({ "_id": objectId});
res.send(Proced)
    
} catch (error) {
    res.send(error)
}

}

const updateById = async (id,body, res) =>{
    //console.log(id);
    const updatedFields = body;
    //console.log(updatedFields)
    const NeObjectId = id;
    const objectId = new mongoose.Types.ObjectId(NeObjectId);
    let ObjectUserId;
    try{ 
    //console.log(account_id)
    const Object = await Procedure.find({ "_id": objectId}); 
    //console.log(Object)
    ObjectUserId = Object[0]._id;
  }
    catch (error) {console.log(error)} 
    console.log(ObjectUserId)
    try {
      // Найти продукт по ID и обновить его поля
      const updatedUser = await Procedure.findByIdAndUpdate(
        ObjectUserId,
        { $set: updatedFields },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'Procude not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating procedur' });
    }
};

module.exports = {
    infoById: info,
    UpdateById : updateById,
  };