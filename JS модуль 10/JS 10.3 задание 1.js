let a;
a = + prompt("Введите значение a");

if (typeof a == "number") {
  if (a % 2 == 0) {
  console.log("Число четное");
  }
  else if (a % 2 !== 0) {
  console.log("Число нечетное");
  }
}

else if (typeof a !== "number") {
  console.log("Упс, кажется, вы ошиблись");
}

else if (typeof a !== "NaN") {
  console.log("Упс, кажется, вы ошиблись");
}