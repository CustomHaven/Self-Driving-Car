// https://www.codecademy.com/courses/learn-typescript/projects/self-driving-car
import { getObstacleEvents } from './computer-vision';

// Q1 3 sections: Types, Classes and Execution
// Types
// Q3 & Q12 - Q14 & Q24
interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

// Q7
interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

// Q13
interface Events {
  [obstacles: string]: boolean;
}

// Q18
interface Control {
  execute: (command: string) => void;
}

// Q19
interface Steering extends Control {
  turn: (direction: string) => void;
}


// Classes
// Q2 & Q25
class Car implements AutonomousCar {
  isRunning: boolean;
  steeringControl: Steering;

  // Q6 - Q9 & Q26
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  // Q15 - Q16 & Q28 - Q31
  respond(events: Events) {
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
class SteeringControl implements Steering {

  // Q21
  execute(command: string) {
    console.log("Executing: " + command);
  }

  // Q22
  turn(direction: string) {
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
autonomousCar.respond(getObstacleEvents());


// Q33 extend the project further
/*
33.
We’re cruising! Now you can ride around in style while your car does your driving for you.

Take this project to the next level and practice your skills with these extra credit tasks:

Write code that will call .respond() many times with new events to see a sequence of turns.
Write code that allows the car to accelerate or decelerate based on the event. You could make this another type that extends the Control type.
Add more types of events so your car can do things like ‘emergencyBrake’ or ‘parallelPark’.
*/