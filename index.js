"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codecademy.com/courses/learn-typescript/projects/self-driving-car
const computer_vision_1 = require("./computer-vision");
// Classes
// Q2 & Q25
class Car {
    // Q6 - Q9 & Q26
    constructor(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    // Q15 - Q16 & Q28 - Q31
    respond(events) {
        if (!this.isRunning) {
            return console.log("The car is off");
        }
        Object.keys(events).forEach((eventKey) => {
            if (!events[eventKey]) {
                return;
            }
            if (eventKey === "ObstacleLeft") {
                this.steeringControl.turn("right");
            }
            if (eventKey === "ObstacleRight") {
                this.steeringControl.turn("left");
            }
        });
    }
}
// Q20
class SteeringControl {
    // Q21
    execute(command) {
        console.log("Executing: " + command);
    }
    // Q22
    turn(direction) {
        this.execute("turn " + direction);
    }
}
// Executions
// Q23
const steering = new SteeringControl();
// steering.turn("right");
// Q10 - Q11 & Q27
const autonomousCar = new Car({
    isRunning: true,
    steeringControl: steering
});
// console.log(autonomousCar.isRunning);
// Q17 & Q32
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
// Q33 extend the project further
/*
33.
We’re cruising! Now you can ride around in style while your car does your driving for you.

Take this project to the next level and practice your skills with these extra credit tasks:

Write code that will call .respond() many times with new events to see a sequence of turns.
Write code that allows the car to accelerate or decelerate based on the event. You could make this another type that extends the Control type.
Add more types of events so your car can do things like ‘emergencyBrake’ or ‘parallelPark’.
*/ 
