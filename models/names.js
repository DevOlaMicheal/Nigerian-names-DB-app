const mongoose =  require('mongoose')

const Schema =  mongoose.Schema;

const nameSchema =  new Schema ({
    title: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    meaning: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Name = mongoose.model('Name', nameSchema)

module.exports = Name;