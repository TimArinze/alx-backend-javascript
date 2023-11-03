import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw (new TypeError('amount must be number'));
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw (new TypeError('amount must be number'));
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw (new TypeError('currency must be a Currency'));
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw (new TypeError('amount must be number'));
    }
    if (typeof conversionRate !== 'number') {
      throw (new TypeError('amount must be number'));
    }
    return amount * conversionRate;
  }
}
