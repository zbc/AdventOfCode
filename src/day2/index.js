import { masses } from "../data/mass";
import { calculateTotalFuel } from "./calculateTotalFuel";

let sum = 0;
masses.forEach(mass => (sum += calculateTotalFuel(mass)));

console.log(sum);
