// 1.Определить порядок выполнения операторов с помощью таблицы приоритетов операций.

// Напишите в ответе на задание этот порядок для каждого выражения и результат всех переменных присвоений.
var x = 6, y = 15, z = 4;
y /= x + 5 % z;
5 % 4 // 1
6 + 1 // 7
15 /= 7 // 2.14
// 2.
var x = 6, y = 15, z = 4;
z = x++ + y * 5;
x++ // 6 возвращает предыдущее(постпрефикс)
15 * 5 // 75
z = 6 + 75 // 81
// 3.
var x = 6, y = 15, z = 4;
x += y - x++ * z;
6 += 15 // 21
6 * 4 // 24 (постпрефикс возвращает 6)
21 - 24 // -3
// 4.
var x = 6, y = 15, z = 4;
z = -- x - y * 5;
--x // 5
15 * 5 // 75
z = 5 - 75 // -70
// 5.
var a = 3;
var b = ++a + 1 + a++;
++a // 4
a++ // 4
b = 4 + 1 + 4 // 9
