// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей
//
// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса
//
// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов
//
// Что можно делать в верфи:
// Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
//
// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей
// должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения.
//
// Верфи и корабли должны создаваться с помощью функций-конструкторов.

function Ship() {};

function MotorShip() {
  this.enginePower = 0;
  this.bodyMaterial = '';
}

function SailShip() {
  this.numberMasts = 0;
  this.sailsTotalArea = 0;
}

MotorShip.prototype = new Ship();

SailShip.prototype = new Ship();

function Shipyard() {
  this.repaintShip = function() {};
  this.buildSailShip = function(ship) {
    checkValidShip(this, ship);
  };
  this.repairSailShip = function(ship) {
    checkValidShip(this, ship);
  };
  this.exchangeSailShip = function(ship) {
    checkValidShip(this, ship);
  };
}

function checkValidShip(shipyard, ship) {
  if (shipyard.checkShipType(ship)) { return 'Success!' };

  throw new Error('Your ship is wrong type');
}

function SailShipyard() {
  this.checkShipType = function(ship) {
    return (ship instanceof SailShip);
  }
}

function MotorShipyard() {
  this.checkShipType = function(ship) {
    return (ship instanceof MotorShip);
  }
}

SailShipyard.prototype = new Shipyard();
MotorShipyard.prototype = new Shipyard();

let ship1 = new SailShip();
let ship2 = new MotorShip();
let shipyard1 = new SailShipyard();
let shipyard2 = new MotorShipyard();

shipyard1.buildSailShip(ship1);
shipyard1.repairSailShip(ship1);
shipyard1.exchangeSailShip(ship1);
shipyard1.buildSailShip(ship2);
