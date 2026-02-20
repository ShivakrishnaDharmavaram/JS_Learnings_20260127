//Challenge:
//Create a Vehicle class with a method move() that logs "Vehicle is moving".
//Create a Airplane class that extends Vehicle and overrides the move() method to log "Airplane is flying".

class Vehicle {
    move(){
        console.log("Vehicle is moving");
    }
}

class Airplane extends Vehicle {
    move(){
        console.log("Airplane is flying");
    }
} // The move method of the Airplane class overrides the move method of the Vehicle class. When we create an instance of the Airplane class and call the move method, it will log "Airplane is flying" instead of "Vehicle is moving".

const vehicle = new Vehicle();
vehicle.move(); // Output: Vehicle is moving

const airplane = new Airplane();
airplane.move(); // Output: Airplane is flying

//Not overriding the move method in the Airplane class will result in the move method of the Vehicle class being called when we create an instance of the Airplane class and call the move method.

class Airplane2 extends Vehicle {
    // No move method defined here, so it will use the move method from the Vehicle class
}
const airplane2 = new Airplane2();
airplane2.move(); // Output: Vehicle is moving
