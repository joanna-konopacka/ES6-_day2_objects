class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Boat extends Vehicle {
    swim() {
        console.log("I am " + this.name + " and I am swimming");
    }
}

class Car extends Vehicle {
    constructor(name, hp) {
        super(name);
        this.hp = hp;
    }

    drive() {
        console.log("I am " + this.name + " and I am driving with " + this.hp + " horse power.");
    }
}

class Plane extends Vehicle {
    fly() {
        console.log("I am " + this.name + " and I am flying");
    }
}

const boat = new Boat('Titanic');
const car = new Car('Opel Corsa', 120);
const plane = new Plane('Airbus A380');

boat.swim();
car.drive();
plane.fly();
console.log(boat, car, plane);