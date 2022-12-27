const express = require('express');
const schedule = require('node-schedule');

let router = express.Router();

const getRandom = () => {
    return Math.floor(Math.random() * 10)
} 

let randomNum = getRandom();

const JOB = schedule.scheduleJob('0 * * * * *', () => {randomNum = getRandom()});



router.get('/', function(req, res, next){
    res.send(`This is an public API-Endpoint. The current number of the minute is: ${randomNum}`)
});





module.exports = router;