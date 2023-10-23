const {model, Schema, ObjectId} = require("mongoose")

const Card = new Schema({
    frontSide: {type: String, require:true},
    backSide:{type: String, require:true},
    setId: {type: Schema.Types.ObjectId, ref: "Set"},
})

module.exports = model('Card', Card) 