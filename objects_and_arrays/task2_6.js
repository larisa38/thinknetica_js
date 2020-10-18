// ЗАДАЧА 2.6
// Реализовать функцию для случайной сортировки элементов массива

function sortArr(arr) {
  return arr.sort(function(a, b) {
    return 0.5 - Math.random()
  })
};
const array = [1, 3, 2, 7, 5];
console.log(sortArr(array));

const arr1 = [1, 3, 2, 7, 5];
arr1.sort(function(a, b) {
  return 0.5 - Math.random()
});
console.log(arr1);
