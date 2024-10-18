const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://michaeltibbetts1:56BRK05HiuK6j8MO@student-cluster.t8y9r.mongodb.net/booksDatabaseProject?retryWrites=true&w=majority&appName=student-cluster')
    .then(() => {
        console.log(`connected to mongodb`)
    })
    .catch((e) => {
        console.error('error!', e.message)
    })

    const db = mongoose.connection

    module.exports = db