import { calculateFuel } from "./calculateFuel";
import { data } from "./data";

let sum = 0;

data.forEach(mass => (sum += calculateFuel(mass)));

console.log(sum);
