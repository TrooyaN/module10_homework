let someMap = new Map;

someMap.set("key1", "value1");
someMap.set("key2", "value2");
someMap.set("key3", "value3");
someMap.set("key4", "value4");
someMap.set("key5", "value5");

for (let [key, value] of someMap) {
  console.log("Ключ - " + key + ", Значение - " + value);
}