function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (
        typeof obj1[key] === "object" && obj1[key] !== null &&
        typeof obj2[key] === "object" && obj2[key] !== null
      ) {
        if (!areObjectsEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  let obj1 = { name: "person 1", age: 5 };
  let obj2 = { age: 5, name: "person 1" };
  
  const isEqual = areObjectsEqual(obj1, obj2);
  
  console.log(isEqual); // true
  