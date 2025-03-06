const { type } = require("express/lib/response");
const { Schema, model } = require("mongoose");

// Definimos el esquema de la colección "users"
const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: String,
  birthdate: Date,
  nickname: { type: String, required: true },
  biography : { type: String  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "role_user" },
  image: { type: String, default: "default.png" },
  create_at: { type: String, default: Date.now() },
});

module.exports = model("User", userSchema, "users");
