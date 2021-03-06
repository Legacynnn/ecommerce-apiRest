const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})
Schema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    
    next()
})

module.exports = mongoose.model('Users', Schema)