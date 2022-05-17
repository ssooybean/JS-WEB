let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';
for (let i = 0; i < groceries.length; i++)
  {
    if (i >= 1) {shoppingList += ', ';}
    shoppingList += groceries[i];
  }
console.log("Список покупок: " + shoppingList);
