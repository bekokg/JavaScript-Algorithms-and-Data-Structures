function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  for(let val of arr1) {
    let currIdx = arr2.indexOf(val ** 2);
    if(currIdx === -1) {
      return false
    } else {
      console.log(arr2)
      arr2.splice(currIdx, 1);
    }
  }
  return true
}
let arr1 = [2, 1, 3, 4];
let arr2 = [9, 4, 1, 16];
// console.log(same(arr1, arr2))

function same2(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  let countFrequency1 = {};
  let countFrequency2 = {};

  for(let val of arr1) {
    countFrequency1[val] = (countFrequency1[val] || 0) + 1
  }
  for(let val of arr2) {
    countFrequency2[val] = (countFrequency2[val] || 0) + 1;
  }
  for(let key in countFrequency1) {
    if(!(key ** 2 in countFrequency2)) {
      return false;
    }
    if(countFrequency2[key ** 2] !== countFrequency1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2(arr1, arr2))