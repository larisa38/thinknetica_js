// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое
// четное значение на экран, реализация должна использовать
// все 3 вида циклов (отдельная реализация на каждый цикл)

// method 1
let i = 1;
for(; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

// method 2, variant 1
i = 2;
do {
  console.log(i);
  i += 2
}
while(i <= 20);

// method 2, variant 2
i = 1;
do {
  if(i % 2 === 0){
    console.log(i);
  }

  i++;
}
while(i <= 20);

// method 3, variant 1
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// method 3, variant 2
i = 1;
while(i <= 20) {
  if(i % 2 === 0){
    console.log(i);
  }

  i++;
}
