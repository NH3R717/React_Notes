// ! not often used in actual projects
let mixin = {
  madeIn() {
    console.log("This car was made in Hong Kong!");
  },
};

let carMixin = {
  __proto__: mixin,

  madeIn() {
    super.madeIn();
  },
};

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors and is a ${this.engine} engine and a fabulous ${this.color} color.`;
  }
  static totalDoors(car1, car2, car3) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    const doors3 = car3.doors;
    return doors1 + doors2 + doors3;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, brand, towCapacity, carStats) {
    super(doors, engine, color, carStats);
    this.brand = brand;
    this.towCapacity = towCapacity;
    this.fourWheelDrive = true;

    // assigning mixin
    Object.assign(this, carMixin);
  }
  newSUV() {
    return console.log(`Demo SUV is a ${this.brand}`);
  }
}

const royce_roller = new Car(4, "v12", "sapphire");
const cival = new Car(5, "i4", "champagne");
const landFinder = new SUV(3, "i6", "sand", "Range Finder", 15000);

console.log(landFinder.newSUV());
console.log(landFinder.madeIn());

console.log(royce_roller);
console.log(landFinder);
// console.log("£", royce_roller.carStats());
// console.log(cival);
// console.log("£", cival.carStats());
console.log("¢", Car.totalDoors(royce_roller, cival, landFinder));
