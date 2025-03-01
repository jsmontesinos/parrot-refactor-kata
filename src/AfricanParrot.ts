import { Parrot } from "./Parrot";

const BASE_SPEED = 12;
const LOAD_FACTOR = 9;

export class AfricanParrot implements Parrot {
  constructor(private numberOfCoconuts: number) {}

  getSpeed(): number {
    return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
  }

  getCry(): string {
    return "Sqaark!";
  }
}
