import { Parrot } from "./Parrot";
import { BASE_SPEED, LOAD_FACTOR } from "./parrot";

export class AfricanParrot implements Parrot {
  constructor(private numberOfCoconuts: number) {}

  getSpeed(): number {
    return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
  }

  getCry(): string {
    return "Sqaark!";
  }
}
