import mongoose from 'mongoose';
const Schema = mongoose;

const workoutSchema = new Schema({
    description: { type: String, required: false },
    duration: { type: Number, required: true },
    exercises: { type: [mongoose.Types.ObjectId], required: true },
    }, {
        timestamps: true,
    });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;