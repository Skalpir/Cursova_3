const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require("./routes/appointmentRoutes");
const patientRoutes = require("./routes/patientRoutes")
const dirname = require("path");
const fileURLToPath = require("url");
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//const ___dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const PORT = process.env.PORT || 3000;

Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

var dbconnection;
const { MongoClient } = require('mongodb');
const appointment = require('./services/appointment');

function connectionToDb(cb) {
    MongoClient.connect(uri)
        .then((client) => {
            console.log('connect to db');
            dbconnection = client.db();
            return cb();
        })
        .catch((err) => {
            return err;
        });
}

//mongoose.connect('mongodb://127.0.0.1:27017/hospital')

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Используйте отдельный роутер для /api/auth
app.use("/api/patient", patientRoutes);
app.use("/api/appointment", appointmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
