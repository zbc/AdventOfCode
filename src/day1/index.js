import { calculateFuel } from "./calculateFuel";
import { masses } from "../data/mass";

let sum = 0;

masses.forEach(mass => (sum += calculateFuel(mass)));

console.log(sum);
