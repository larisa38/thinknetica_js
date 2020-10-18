// ЗАДАЧА 2.5 [task2_5] average salary, employees filters
// Есть массив сотрудников компании
// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees =[
  {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 54,
    salary: 10000,
    position: 'Architect'
  },
  {
    firstName: 'Gustav',
    lastName: 'Andersen',
    age: 31,
    salary: 5000,
    position: 'Software engineer'
  },
  {
    firstName: 'Liz',
    lastName: 'Teylor',
    age: 20,
    salary: 7000,
    position: 'Manager'
  }
];
// 1.
const calculateSalarySum = function(acc, item) {
  return acc + Number(item.salary);
};
const averageSalary = employees.reduce(calculateSalarySum, 0) / employees.length;
console.log(averageSalary);
// 2.
const sortCallback = function(a,b) {
  return a.salary - b.salary;
};
const sortedBySalary = employees.sort(sortCallback);
console.log(sortedBySalary);
// 3.
const filterCallBack = function(item) {
  return item.age > 25 && item.salary > 4500
};

const filteredList = employees.filter(filterCallBack)
console.log(filteredList);
