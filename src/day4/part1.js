import { isValidPart1 } from './helper';

const min = 245318
const max = 765747
let result = 0;

for (let i = min; i <= max; i++) {
  if (isValidPart1(i)) {
    result++;
  }
}

console.log(`Part1: ${result}`)