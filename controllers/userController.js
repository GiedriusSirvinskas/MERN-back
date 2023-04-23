const mongoose = require("mongoose");
const User = require("./../models/userModel");
const bcrypt = require("bcryptjs");

exports.getUsers = (req, res) => {
  try {
    User.find()
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((error) => res.status(404).json({ error: "Bad request query." }));
  } catch {
    res.status(500).json({ error: "Get request failed." });
  }
};

//SIGN UP

exports.signup = (req, res) => {
  const { name, email, password, role } = req.body;

  let passwordHash;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            passwordHash = hash;
        })
    })

  try {
    User.findOne({ email: email }).then((existingUser) => {
      if (existingUser) {
        res.status(422).json({ error: "User already exists. Please log in." });
      } else {
        const createdUser = new User({
          name,
          email,
          password: passwordHash,
          role,
        });
        createdUser
          .save()
          .then((doc) => res.status(201).json(doc))
          .catch((error) => res.status(404).json({error: error.message}));
      }
    });
  } catch {
    res.status(500).json({ error: "Sign up failed." });
  }
};
