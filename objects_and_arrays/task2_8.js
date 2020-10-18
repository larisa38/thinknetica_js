// ЗАДАЧА 2.8 
// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в
// отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName
//  и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться
// свойство age в зависимости от разницы года рождения и текущего года

const currentYear = new Date().getFullYear()

const human = Object.create({}, {
  fullName: {
    get: function() {
      return `${this.firstName} ${this.lastName}`
    },
    set: function (value) {
           [this.firstName, this.lastName] = value.split(' ');
         }
  },
  dateOfBirth: {
    set: function(date) {
      this.age = currentYear - new Date(date).getFullYear()
    }
  }
})
human.fullName = 'Ivan Ivanov'
console.log(human.firstName)
console.log(human.lastName)
console.log(human.fullName);
human.dateOfBirth = '2014-04-03'
console.log(human.age)
