const mongoose = require('mongoose')


const Schema = mongoose.Schema
const fictionSchema = new Schema({
    title:{type: String, require:true},
    entry:{type: String, require:true},
    shipIsBroken:{type: Boolean, default:true}
})
const Fiction = mongoose.model('Fiction', fictionSchema)

module.exports = Fiction;