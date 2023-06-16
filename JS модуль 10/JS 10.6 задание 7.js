const arr = [1, 1, 1, 1];
let check = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    console.log(false);
    break;
  }
}