function hasTwoAdjacent(num) {
  let [first, ...rest] = [...num.toString()]
  for (let c of rest) {
    if (first === c) {
      return true
    }
    first = c
  }
  return false
}

function isIncrease(num) {
  let [first, ...rest] = [...num.toString()]
  for (let c of rest) {
    if (first > c) {
      return false
    }
    first = c
  }
  return true
}

function hasOnlyTwoAdjacent(num) {
  let str = num.toString();
  let count = 1;
  let s = str.charAt(0)
  for (let i = 1; i < str.length; i++) {
    if (s === str.charAt(i)) {
      count++;
    } else {
      if (count === 2) {
        return true;
      } else {
        count = 1;
        s = str.charAt(i)
      }
    }
  }
  return count === 2;
}

function isValidPart1(num) {
  return hasTwoAdjacent(num) && isIncrease(num)
}

function isValidPart2(num) {
  return isIncrease(num) && hasOnlyTwoAdjacent(num)
}

export { hasTwoAdjacent, isIncrease, isValidPart1, isValidPart2 }