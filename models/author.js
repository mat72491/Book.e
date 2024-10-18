const { Schema } = require('mongoose')

const authorSchema = new Schema(
    {
        name: {type: String, required: true},
        country: {type: String, required: true}
    },

{ timestamps: true }
)

module.exports = authorSchema