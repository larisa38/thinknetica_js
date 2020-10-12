// ЗАДАЧА 2.7 [task2_7] change object properties
// Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства

// Вариант 1
const cat = {
  name: 'Alex',
  lastName: 'Smith'
};
cat.name = 'Bob';
delete cat.name;
delete cat.lastName;
// Вариант 2
const cat = Object.create({}, {
  name: {
    value: 'Alex',
    writable: true,
    configurable: true
  },
  lastName: {
    value: 'Smith',
    writable: true,
    configurable: true
  }
})
cat.name = 'Bob';
delete cat.name;
delete cat.lastName;
console.log(cat);
