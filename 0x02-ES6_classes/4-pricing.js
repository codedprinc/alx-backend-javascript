import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    if (!currency instanceof Currency) {
      throw TypeError('Currency must be a Currency');
    }

    this._currency = currency;
    this._amount = amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (!currency instanceof Currency) {
      throw TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw TypeError('ConversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
