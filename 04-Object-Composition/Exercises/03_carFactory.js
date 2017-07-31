//Write a JS program that assembles a car by given requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s order. You have the following parts in storage:
//An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
//    Small engine: { power: 90, volume: 1800 }
//Normal engine: { power: 120, volume: 2400 }
//Monster engine: { power: 200, volume: 3500 }
//A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint it any color.
//    Hatchback: { type: 'hatchback', color: <as required> }
//Coupe: { type: 'coupe', color: <as required> }
//The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number.
//    Input
//You will receive an object as an argument to your function. The format will be as follows:
//{ model: <model name>,
//    power: <minimum power>,
//    color: <color>,
//    carriage: <carriage type>,
//    wheelsize: <size> }
//Output
//Return the resulting car object as a result of your function. See the examples for details.

function carFactory(carInput){
    let car = {};
    let volume = carInput.power == 90 ? 1800 : carInput.power == 120 ? 2400 : 3500;

    car.model = carInput.model;
    car.engine = {power: carInput.power, volume: volume};
    car.carriage = {type: carInput.carriage, color: carInput.color};

    let wheelsize = Number(carInput.wheelsize);

    if(wheelsize % 2 == 0){
        wheelsize = wheelsize - 1
    }
    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return car;
}
console.log(carFactory({ model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 }
));

console.log(carFactory({ model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 }
));