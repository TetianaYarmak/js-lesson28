//об'єкт, що описує автомобіль
const car = {
  manufacturer: "Toyota", //виробник
  model: "Camry", //модель
  year: 2020, //рік випуску
  averageSpeed: 100, //середня швидкість
  fuelTankVolume: 50, //обсяг паливного баку
  fuelConsumption: 8, //середня витрата палива на 100 км
  drivers: [], //водії

  //Метод, який виводить на екран інформацію про автомобіль.
  displayInfo: function() {
    console.log(`Машина: ${this.manufacturer} ${this.model}, ${this.year} рік випуску`);
  },

  //Додавання ім’я водія у список 
  addDriver: function(driverName) {
    this.drivers.push(driverName);
  },

  //Перевірка водія на наявність його ім’я у списку
  hasDriver: function(driverName) {
    return this.drivers.includes(driverName);
  },

  //Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
  calculateTrip: function(distance, driverName) {
    if (!this.hasDriver(driverName)) {
      console.log(`Водій ${driverName} не знайдений.`);
      return;
    }
    const time = distance / this.averageSpeed;
    const breaks = Math.floor(time / 4);
    const totalTime = time + breaks;
    const fuelNeeded = (distance / 100) * this.fuelConsumption;
    console.log(`Час в дорозі: ${totalTime} годин, необхідно пального: ${fuelNeeded} літрів.`);
  }
};

//Приклад використання:
/* car.displayInfo();
car.addDriver("Іван");
car.addDriver("Петро");
console.log(car.hasDriver("Іван")); // true
console.log(car.hasDriver("Олег")); // false
car.calculateTrip(500, "Іван"); // Час в дорозі: 5.0 годин, необхідно пального: 40 літрів.
car.calculateTrip(800, "Олег"); // Водій Олег не знайдений. 
 */