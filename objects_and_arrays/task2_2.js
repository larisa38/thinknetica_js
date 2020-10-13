// ЗАДАЧА 2.2
// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

function compare (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for(let i = 0; i <= arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
      }
      return true;
    }
  return false;
}
const ar1 =[1, 2, 3, 0];
const ar2 =[1, 2, 3, 0];
console.log(compare (ar1, ar2));
