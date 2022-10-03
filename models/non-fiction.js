const mongoose = require('mongoose')


const Schema = mongoose.Schema
const nonfictionSchema = new Schema({
    title:{type: String, require:true},
    entry:{type: String, require:true},
    shipIsBroken:{type: Boolean, default:true}
})
const NonFiction = mongoose.model('NonFiction', nonfictionSchema)

module.exports = NonFiction;