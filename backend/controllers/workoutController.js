const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getWorkouts = async function (req, res) {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts)
}

const getWorkout = async function (req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
}

const createWorkout = async function (req, res) {
    const { title, load, reps } = req.body;
    try {

        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
    res.json({
        message: "Post a new workout"
    })
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout
}