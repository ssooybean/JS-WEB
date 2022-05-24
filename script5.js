let getSortedArray = function (mass, age){
  for (let i = 0; i < mass.length - 1; i++)
    {

      for (let j = i + 1; j < mass.length; j++)
        {
          if (mass[i][age] > mass[j][age])
            {
              let swap = mass[i];
              mass[i] = mass[j];
              mass[j] = swap;
            }
        }
    }
  return mass
}

let mass = [ {name: 'Петя', age: 5}, {name: 'Леля', age: 2}, {name: 'Сима', age: 3}, {name: 'Сема', age: 10}, {name: 'Аркадий', age: 1}];
let age = prompt("Введите ключ:");
console.log(getSortedArray(mass, age));
