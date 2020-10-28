// ЗАДАЧА 3.4
// Система продажи билетов
//
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */
//
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

let cassa = 0;
let data = {};
let soldTickets = {};
function SaleTicket() {
  this.createEvent = function(nameConcert, price) {
    data[nameConcert] = {
      price: price
    };
    return 'done!';
  }

  this.buyTicket = function(nameConcert) {
    let price = data[nameConcert].price;
    cassa += price;
    let ticketId = Math.floor(Math.random() * 1000001);
    soldTickets[ticketId] = price;
    return `Done! Your ticket number is ${ticketId}`;
  }

  this.returnTicket = function(ticketId){
    if (soldTickets.hasOwnProperty(ticketId)) {
      cassa -= soldTickets[ticketId];
      delete soldTickets[ticketId];
      return 'done!';
    } else {
      return `Ticket number ${ticketId} does not exist`;
    }
  }
}
const ticketWindow = new SaleTicket();

ticketWindow.createEvent('Concert', 500);
ticketWindow.buyTicket('Concert');
ticketWindow.returnTicket('123456');
