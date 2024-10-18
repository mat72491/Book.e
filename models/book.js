const { Schema } = require('mongoose')

const bookSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'name'},
        genre: {type: String, required: true},
        ISBN: {type: Number, required: true},
        publisher: {type: Schema.Types.ObjectId, ref: 'name'},
        year_published: {type: Number, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        condition: {type: String, required: true},
        is_classic: {type: Boolean, required: true},
    },

{ timestamps: true }
)

module.exports = bookSchema