//об'єкт, що описує час (години, хвилини, секунди)
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  //Функція для виведення часу на екран
  displayTime: function () {
    console.log(`${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`);
  },

  //Фукція зміни часу на передану кількість секунд
  addSeconds: function (sec) {
    this.seconds += sec;
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
  },

  //Функція зміни часу на передану кількість хвилин
  addMinutes: function (min) {
    this.minutes += min;
    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;
  },

  //Функція зміни часу на передану кількість годин
  addHours: function (hr) {
    this.hours += hr;
  }
};

// Приклад використання:
/* time.displayTime(); // 00:00:00
time.addSeconds(150);
time.displayTime(); // 00:02:30
time.addMinutes(75);
time.displayTime(); // 01:17:30
time.addHours(5);
time.displayTime(); // 06:17:30 */