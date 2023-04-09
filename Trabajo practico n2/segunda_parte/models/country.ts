import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CountrySchema = new Schema({

    codigoPais: Number,
    nombrePais: String,
    capitalPais: String,
    región: String,
    población: Number,
    latitud: Number,
    longitud: Number

});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;