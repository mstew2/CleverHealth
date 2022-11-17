const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 6
    },
    workouts: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: false
    }
},  {
    timestamps: true    
});

const User = mongoose.model('User', userSchema)

module.exports = User