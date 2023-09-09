const mongoose = require('mongoose');

const {Schema} = mongoose;

const workoutSchema = new Schema({
    'title': { 
        type:String,
        requried: true
    },
    'reps': {
        type: Number,
        requried: true
    },
    'load': {
        type: Number,
        requried: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Workout',workoutSchema);