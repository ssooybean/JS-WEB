let getPrice = function (uhr, achtung){
  let money = 1500;
  if (achtung)
    {
      uhr /= 2;
      money *= 2.5;
    }
  if (uhr > 150) { money -= 250;}
  return money * uhr;
}
uhr = Number(prompt("Количество часов: "))
achtung = Number(prompt("Сроочность: 0 или 1 "))
window.alert("Стоимость проекта: " +getPrice(uhr, achtung));
