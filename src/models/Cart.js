const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    }],
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    payment: {
        card: {
            number: {
                type: String,
            },
            cvc: {
                type: String,
            },
            cardHolderName: {
                type: String,
            },
            dueDate: {
                type: Number,
            },
        }
    }
})

module.exports = mongoose.model('Cart', Schema)