let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(isEqual); // true
