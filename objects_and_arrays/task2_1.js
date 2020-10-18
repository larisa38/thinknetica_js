//ЗАДАЧА 2.1 [task2_1] convert text to objects
// Реализовать функцию, которая принимает текст, и возвращает массив объектов
// со структурой { word: 'smth', length: 1, isCapitalized: false}

function transText(text){
  return text.split(' ').map(function (word) {
    return {
      word: word,
      length: word.length,
      isCapitalized: word[0] === word[0].toUpperCase()
    }
  })
};
const str = 'Методы массивов и объектов в JavaScript'
console.log(transText(str));
