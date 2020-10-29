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


function SaleTicket() {
  this.cassa = 0;
  this.data = {};
  this.soldTickets = {};
  this.createEvent = function(nameConcert, price) {
    this.data[nameConcert] = {
      price: price
    };
    return 'done!';
  }

  this.buyTicket = function(nameConcert) {
    let price = this.data[nameConcert].price;
    this.cassa += price;
    let ticketId = Math.floor(100000 + Math.random() * 900000);
    this.soldTickets[ticketId] = price;
    return `Done! Your ticket number is ${ticketId}`;
  }

  this.returnTicket = function(ticketId){
    if (this.soldTickets.hasOwnProperty(ticketId)) {
      this.cassa -= this.soldTickets[ticketId];
      delete this.soldTickets[ticketId];
      return `Ticket ${ticketId} removed from the list of sold tickets`;
    };
      return `Ticket number ${ticketId} does not exist`;
  };
}
const ticketWindow = new SaleTicket();

ticketWindow.createEvent('Concert', 500);
ticketWindow.buyTicket('Concert');
ticketWindow.returnTicket('123456');
