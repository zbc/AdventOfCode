import { calculateFuel } from "../day1/calculateFuel";

export const calculateTotalFuel = mass => {
  const fuel = calculateFuel(mass);
  if (fuel <= 0) {
    return 0;
  }
  mass = fuel;
  return fuel + calculateTotalFuel(mass);
};
