iiii// Pricing.js
import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount; // Store the amount
		this._currency = currency; // Store the currency (instance of Currency class)
	}

	// Getter and setter for amount
	get amount() {
		return this._amount;
	}

	set amount(newAmount) {
		this._amount = newAmount;
	}

	// Getter and setter for currency (expects a Currency object)
	get currency() {
		return this._currency;
	}

	set currency(newCurrency) {
		this._currency = newCurrency;
	}

	// Method to display the full price as 'amount currency_name (currency_code)'
	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	}

	// Static method to convert price based on a conversion rate
	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
