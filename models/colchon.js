//Modelo de mongo para Colchones
var mongoose = require('mongoose');
var { Schema } = mongoose;

var ColchonSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    img: { type: String, required: false }
})

module.exports = mongoose.model('Colchon', ColchonSchema);