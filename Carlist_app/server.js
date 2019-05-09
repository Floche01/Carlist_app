'use strict';

const express = require('express');
const fs = require('fs');

//  set PORT to 8080 and HOST to Localhost
const PORT = 3300;
const HOST = '0.0.0.0';

//  initialize the express application
const app = express();

var carList;

//  Read in the contents of the garage.json file and save it to garageList
fs.readFile(__dirname + "/" + "car.json", "utf8", function (err, data) {
    if (err) {
        console.log("Error reading file car.json");
        return;
    }
    carList = JSON.parse(data);
    console.log(carList.car);
});

//  For the base url of the application say Hello World
app.get('/', (req, res) => {
    res.send('Welcome to Car List\n');
});

//  For localhost:8080/garage yield entire garageList
app.get('/car', (req, res) => {
    res.send(carList);
});

//  For localhost:8080/garage/{tagID} yield that specific car or an error
app.get('/car/:carId', (req, res) => {
    var carId = req.params['carId'];
    if (carId == 0 || carId > carList.car.length) {
        //If request is made for an array value that doesn't exist throw error
        res.status(404).send("Sorry, invalid tagId for index. Array out of bounds.");
        return;
    }
    res.send(carList.car[carId - 1]);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);