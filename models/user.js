//Modelo de mongo para Usuarios
var mongoose = require('mongoose');
var { Schema } = mongoose;

var UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: Number, required: true }
})

module.exports = mongoose.model('User', UserSchema);