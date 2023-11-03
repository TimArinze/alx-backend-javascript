class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  // static get [Symbol.species]() {
  //   return this;
  // }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // it returns a new object with the same properties with the constructor not filled in
    return new this.constructor[Symbol.species]();
  }
}

export default Car;
