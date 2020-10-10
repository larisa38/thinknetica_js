// Реализовать if для проверки доступа
// Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
// Информация о пользователе хранится в объекте такого вида:
// {
//  age: 18,
//  paid: true,
//  blocked: false,
//  badUsername: false,
//  isAdmin: false
// }
// Переписать if с помощью тернарного оператора ( Да, это будет выглядеть страшно )

function checkAccess (user) {
  let age_check = (user['age'] >= 18) && (user['age'] <= 35)

  if (user['isAdmin']) {
    return age_check ? 'Разрешен' : 'Запрещен';
  } else {
    return age_check && user['paid'] && !user['blocked'] && !user['badUsername'] ? 'Разрешен' : 'Запрещен';
  }
}

let user = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

console.log(checkAccess (user));
