let numbers = [1, 3, 1, 5, 4, 1, 6];
let number = Number(prompt("Введите число:"));
let lastIndex = -1;
for(let i = 0; i < numbers.length; i++)
  {
    if(numbers[i] == number) {lastIndex = i;}
  }
window.alert('Индекс последнего числа ' + number + ': ' + lastIndex);
