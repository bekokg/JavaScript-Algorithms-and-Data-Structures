function validAnagram(firstStr, secondStr) {
  if(firstStr.length !== secondStr.length) return false;

  const lookup = {};
  for(let i = 0; i < firstStr.length; i++) {
    lookup[i] ? lookup[i] += 1 : lookup[i] = 1;
  }

  for(let i = 0; i < secondStr.length; i++) {
    let char = lookup[i];
    if(!char) {
      return false;
    } else {
      char -= 1
    }
  }
  return true;
}
