//об'єкт, що описує звичайний дріб
const fraction = {
  numerator: 1, //чисельник
  denominator: 1, //знаменник

  //Метод для складання двох дробів
  add: function (other) {
    const commonDenominator = this.denominator * other.denominator;
    const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    return fraction.reduce({ numerator: newNumerator, denominator: commonDenominator });
  },

  //Метод для віднімання двох дробів
  subtract: function (other) {
    const commonDenominator = this.denominator * other.denominator;
    const newNumerator = this.numerator * other.denominator - other.numerator * this.denominator;
    return fraction.reduce({ numerator: newNumerator, denominator: commonDenominator });
  },

  //Метод для множення двох дробів
  multiply: function (other) {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    return fraction.reduce({ numerator: newNumerator, denominator: newDenominator });
  },

  //Метод для ділення двох дробів
  divide: function (other) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    return fraction.reduce({ numerator: newNumerator, denominator: newDenominator });
  },

  //Метод для скорочення дробу
  reduce: function (fraction) {
    const gcd = this.greatestCommonDivisor(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / gcd,
      denominator: fraction.denominator / gcd
    };
  },

  //Метод для знаходження найбільшого спільного дільника
  greatestCommonDivisor: function (a, b) {
    if (b === 0) {
      return a;
    }
    return this.greatestCommonDivisor(b, a % b);
  }
};

// Приклад використання:
/* const frac1 = { numerator: 1, denominator: 2 };
const frac2 = { numerator: 3, denominator: 4 };
console.log('Складання:', fraction.add.call(frac1, frac2)); // { numerator: 5, denominator: 4 }
console.log('Віднімання:', fraction.subtract.call(frac1, frac2)); // { numerator: 1, denominator: -4 }
console.log('Множення:', fraction.multiply.call(frac1, frac2)); // { numerator: 3, denominator: 8 }
console.log('Ділення:', fraction.divide.call(frac1, frac2)); // { numerator: 2, denominator: 3 }
console.log('Скорочення:', fraction.reduce({ numerator: 8, denominator: 12 })); // { numerator: 2, denominator: 3 }  */    
