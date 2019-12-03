import { wire1, wire2 } from "../data/wires";
import { storePathInfoPart1, findCrossPart1 } from './helper'

const test1 = ['R8', 'U5', 'L5', 'D3']
const test2 = ['U7', 'R6', 'D4', 'L4']
const test3 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72']
const test4 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
const test5 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51']
const test6 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']

const path1 = storePathInfoPart1(wire1)
const path2 = storePathInfoPart1(wire2)
const result = findCrossPart1(path1, path2)

console.log(`result: ${result}`)