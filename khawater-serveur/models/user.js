const mongoose = require("mongoose");
const validator = require("validator");

let User = mongoose.model("users", {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: [true, "password is required"],
    minlength: [6, "Password must be at least contient 6 caracters"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    },
  },

  tokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = User;
