// Написать функцию для реверсии слова не используя встроенные методы

function reverse(str) {
  let i = str.length - 1;
  let result = '';

  for(; i >= 0; i--) {
    result += str[i];
  }

  return result;
}
console.log(reverse('Hello'));
