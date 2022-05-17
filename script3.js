let calculateSalary = function (dirtyMoney) {
  if (dirtyMoney >= 100000) {return dirtyMoney - dirtyMoney * 0.45;}
  else {return dirtyMoney - dirtyMoney * 0.35;}
};
let Money = Number(prompt("Введите зарплату:"))
console.log(calculateSalary(Money));
