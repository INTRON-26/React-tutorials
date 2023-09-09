const express = require('express');
const Workout = require('../models/workoutModel')
const router = express.Router();

const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} = require( '../controllers/workoutController'); 

router.use(express.json());

router.get('/', getWorkouts);

router.get('/:id',getWorkout);

router.post('/',createWorkout);

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router;
