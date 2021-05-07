const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const User = require('../models/userSchema');
const authenticate = require('../authenticate');


/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

userRouter.post('/signup', (req, res) => {
  User.register(
    new User({username: req.body.username}),
    req.body.password,
    err => {
      if (err) {
        res.status(500).json({err: err});
      } else {
        passport.authenticate('local')(req, res, () => {
          res.status(200).json({success: true, status: 'Registration Successful!'})
        });
      }
    }
  )
});

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({_id: req.user._id});
  res.status(200).json({success: true, status: 'You are successfully logged in!'})
})

module.exports = router;
