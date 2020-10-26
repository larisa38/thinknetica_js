// ЗАДАЧА 3.3
// Калькулятор
//
// Создайте калькулятор позволяющий добавлять в него дополнительные методы и
// сохранять результат, по умолчанию должны присутствовать методы add, substract
//
// Пример:
// const calculator = new Calc()
//
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
//
// Также, он должен хранить историю всех операций и выводить ее по запросу:
//
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

const operations = {
  '-': (x, y) => (x - y),
  '+': (x, y) => (x + y)
}

function Calc () {
  let data = [];

  this.history = function() {
    return data;
  }

  this.clearHistory = function() {
    return data = [];
  }

  this.operation = function(string) {
    let array = string.split(' ');
    let x = Number(array[0]);
    let y = Number(array[2]);
    let operation = array[1];
    let historyObj = {
      operation: operation,
      operands: [`${x}, ${y}`]
    }
    data.push(historyObj);
    return operations[operation](x, y);
  }

  this.addOperation = function(operation, f) {
    return operations[operation] = f;
  }
}

const calculator = new Calc();
calculator.operation('31 + 32');
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2')
calculator.history()
calculator.clearHistory()
calculator.history()
