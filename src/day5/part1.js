import { data } from '../data/data5'
import { getCode } from './helper'

function diagnositicProgram(data, input) {
  let index = 0;
  let end = data.length - 1;
  while (index <= end && data[index] !== 99) {
    const { code, opcode } = getCode(data, index)
    const val1 = code[2] === '1' ? data[index + 1] : data[data[index + 1]];
    const val2 = code[1] === '1' ? data[index + 2] : data[data[index + 2]];
    switch (opcode) {
      case 1:
        const sum = val1 + val2
        if (code[0] === '1') {
          data[index + 3] = sum
        } else {
          data[data[index + 3]] = sum
        }
        index += 4
        break;
      case 2:
        const mutiply = val1 * val2
        if (code[0] === '1') {
          data[index + 3] = mutiply
        } else {
          data[data[index + 3]] = mutiply
        }
        index += 4
        break;
      case 3:
        if (code[0] === '1') {
          data[index + 1] = input
        } else {
          data[data[index + 1]] = input
        }
        index += 2
        break;
      case 4:
        console.log(`output: ${val1}`)
        index += 2
        break;
      default:
        break
    }
  }
}

diagnositicProgram(data, 1)