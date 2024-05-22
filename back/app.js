const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require("./routes/appointmentRoutes");
const patientRoutes = require("./routes/patientRoutes")
const doctorRoutes = require("./routes/doctorRoutes")
const medicalProcedureRoutes = require("./routes/medicalProcedureRoutes")
const prescriptionRoutes = require("./routes/prescriptionRoutes")
const MailjetRoutes = require("./mailjet/mailjet")
const dirname = require("path");
const fileURLToPath = require("url");
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
const cookieParser = require('cookie-parser')


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
const medicalProcedure = require('./services/medicalProcedure');
const {Patient, Doctor} = require("./models/UserModel")

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
app.use(cookieParser('thisisyourappsecret'))
app.use(
    session({
      
      name: 'session',
      keys: ['thisisyourappsecret'],
      secure: false,
      cookie: {
        httpOnly: false,
        //secure: true, // enable in production
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      },
    })
  )
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Используйте отдельный роутер для /api/auth
app.use("/api/patient", patientRoutes);
app.use("/api/doctor",doctorRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/medicalProcedure",medicalProcedureRoutes)
app.use("/api/prescription",prescriptionRoutes);
//app.use("/mailjet",MailjetRoutes);

const { Appointment } = require('./models/UserModel');
const { add } = require('./services/doctor');

// Функция для проверки условия и выполнения кода
async function checkConditionAndExecute() {
    try {
        const now = new Date();
        const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        console.log(twentyFourHoursLater)

        const records = await Appointment.find({
            dataTime: {
                $gte: now, // Событие ещё не наступило
                $lte: twentyFourHoursLater // До события менее 24 часов
            }
        });
        console.log(records);

        if (records.length > 0) {
            records.forEach(async record =>
                {
                    if (record.emailStatus == "no")
                        {
                    const Pat = await Patient.findOne({ "_id": record.patient});
                    const Doc = await Doctor.findOne({ "_id": record.doctor});
                    //MailjetRoutes.sendEmail(Pat.firstName,Pat.contactInfo)
                    //MailjetRoutes.sendEmail(Doc.firstName,Doc.contactInfo)
                    
                    try {
                        // Найти продукт по ID и обновить его поля
                        const updatedUser = await Appointment.findByIdAndUpdate
                        (
                          record._id,
                          { $set: {"emailStatus" : "yes"} },
                          { new: true }
                        );
                    
                        if (!updatedUser) {
                          return res.status(404).json({ error: 'User not found' });
                        }
                    }
                    catch(error){}
                    }

                }


            )
            console.log("Есть записи с датой менее чем 24 часа до события, выполняем код...11111");
            // Ваш код здесь
        } 
        else {
            console.log("Нет записей с датой менее чем 24 часа до события, ничего не делаем.");
        }
    } catch (error) {
        console.error("Ошибка при выполнении условия:", error);
    }
}

// Запускаем выполнение функции каждые 15 минут (900000 миллисекунд)
setInterval(checkConditionAndExecute, 900000);

// Начальная проверка при запуске приложения
checkConditionAndExecute();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    //add()
    console.log(`Server is running on port ${PORT}`);
});
