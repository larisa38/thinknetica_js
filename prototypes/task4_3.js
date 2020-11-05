// Организовать такую цепочку прототипов, в которой свойства и методы оптимально
// распределены по объектам:
// Есть следующее расширение объектов:
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
//
// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function() {},
//   sleep: function() {},
//   callFriend: function() {},
//   writeReport: function() {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {}
// };

function Human(){
  this.eat = function() {};
  this.sleep = function() {};
  this.callFriend = function() {};
  this.writeReport = function() {};
  this.organizeMeeting = function() {};
}

function Employees() {
  this.baseSalary = 'baseSalary';
  this.salaryCurrency = 'salaryCurrency';
  this.department = 'department';
  this.position = 'position';
  this.location = 'location';
  this.retire = function() {};
  this.startVacation = function() {};
}

Employees.prototype = new Human();

function CurrentEmployees(name, lastName, phoneNumber, startDate) {
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.startDate = startDate;
}

CurrentEmployees.prototype = new Employees();

function FormerEmployees(name, lastName, phoneNumber, startDate, endDate) {
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.startDate = startDate;
  this.endDate = endDate;
}

FormerEmployees.prototype = new Employees();

let formerEmployee1 = new FormerEmployees("John", "Smith",
  "+1234567890", "10.10.1990", "10.10.2000");
formerEmployee1.baseSalary = "10000";
formerEmployee1.salaryCurrency = "$";
formerEmployee1.department = "IT";
formerEmployee1.position = "Senior engineer";
formerEmployee1.location = "Russia";

console.log(formerEmployee1.name, formerEmployee1.lastName,
  formerEmployee1.department, formerEmployee1.position,
  formerEmployee1.startDate, formerEmployee1.endDate);
// "John", "Smith", "IT", "Senior engineer", "10.10.1990", "10.10.2000"
