const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
var passport = require("passport");
const bodyParser = require("body-parser");
const auth = require("../services/auth");
const { populate } = require("../models/account");

router.post("/register", (req, res, next) => {
  //console.log(req.body);
  auth.newUser(req, res);
});


//example how login in passport js
/*router.post("/login", passport.authenticate("local"), (req, res) => {
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("LogIn");
    //res.redirect('/');
  });
});*/

const errorResponse = (res, error) => {
  res.status(400).json({ success: false, error })
}

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return errorResponse(res, "Invalid credentials");
  }

  // Authenticate the user using the credentials provided
  passport.authenticate("local", { session: true }, function (err, user) {
    if (err) {
      return errorResponse(res, "Invalid credentials");
    }
    console.log(user);
    console.log(err);
    req.login(user, async () => {
      populated = await Account.findOne({ username: user.username }).populate({path: 'profile', model: user.role === 'doctor' ? 'Doctor' : 'Patient'});
      
      res.json({ success: true, user: populated });
    });
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.send("logOut");
  });
});

//username and body in req.body
router.post("/deleteOne", async (req, res, next) => {
  try {
    if (!req.user) {
      res.send("User not found");
      return;
    }

    await Account.deleteOne({ username: req.user.username });

    req.logout();

    await req.session.save();

    passport.authenticate("local")(req, res, () => {
      res.send("User deleted");
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/profile", (req, res) => {
  Account.findById(req.user._id).populate({path: 'profile', model: req.user.role === 'doctor' ? 'Doctor' : 'Patient'}).then((user) => {
    res.json(user);
  });
});

module.exports = router;
