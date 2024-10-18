const { Schema } = require('mongoose')

const publisherSchema = new Schema(
    {
        name: {type: String, required: true},
        year_founded: {type: Number, required: true},
        address: {type: String, required: true},
        image: {type: String, required: true},
    },

{ timestamps: true }
)

module.exports = publisherSchema