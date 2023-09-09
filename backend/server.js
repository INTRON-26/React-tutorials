const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());

app.use(function(req,res,next) {
    console.log(req.path,req.method);
    next();
});

app.use('/api/workouts',workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(function(){
        console.log("connected to DB");
        app.listen(process.env.PORT,function() {
            console.log("server running on port 5000");
        });
    })
    .catch(function(err) {
        console.log(err);
    })

