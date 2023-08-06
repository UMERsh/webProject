const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const DataModel = mongoose.model("apps",DataSchema);
module.exports = DataModel;