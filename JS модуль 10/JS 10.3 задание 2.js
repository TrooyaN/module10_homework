let x = undefined;

if (typeof x == "number") {
  console.log("x - number")
}

else if (typeof x == "undefined") {
  console.log("x - undefined")
}

else if (typeof x == "boolean") {
  console.log("x - boolean")
}

else if (typeof x == "string") {
  console.log("x - string")
}

else if (typeof x == "object") {
  console.log("x - object")
}