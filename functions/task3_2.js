// ЗАДАЧА 3.2
// Кэширование
//
// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
//
// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно
//
// Пример:
// const calculate = cache();
//
// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}


const cache = new Map();
const calculate = function(a, b) {
  if (cache.has(`${a}, ${b}`)) {
    return {
      value: cache.get(`${a}, ${b}`),
      fromCache: true
    };
  }

  let value = a ** b;
  cache.set(`${a}, ${b}`, value);
    return {
      value: a ** b,
      fromCache: false
    };
}

calculate(3, 3);
calculate(2, 10);
calculate(2, 10);
