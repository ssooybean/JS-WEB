let GetData = function (massKey, massData){
  let mass = [];
  
  for (let i = 0; i < massData.length; i++)
    {
      let obj = {};
      for (let j = 0; j < massKey.length && massData[i][j]; j++)
        {
          obj[massKey[j]] = massData[i][j];
        }
      mass.push(obj);
    }
  return mass;
}

let key = ['имя', 'любимый цвет', 'любимое блюдо'];
let data = [
 ['Василий', 'красный', 'борщ'],
 ['Мария'],
 ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
];
console.log(GetData(key, data));
