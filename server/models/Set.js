const {Schema, model} = require("mongoose")

const Set = new Schema({
    name:{type: String, require:true, unique:true},
    description:{type: String, require:true},
    alias:{type: String, require:true, unique:true}
})

module.exports = model("Set", Set)
