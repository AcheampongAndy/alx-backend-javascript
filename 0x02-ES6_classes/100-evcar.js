// EVCar.js
import Car from './10-car.js';

export default class EVCar extends Car {
	constructor(brand, motor, color, range) {
		// Call the parent constructor (Car)
		super(brand, motor, color);
		this._range = range; // Specific attribute for EVCar
	}

	// Override cloneCar to return an instance of Car instead of EVCar
	cloneCar() {
		// Return a new Car instance instead of EVCar
		return new Car(this._brand, this._motor, this._color);
	}
}

