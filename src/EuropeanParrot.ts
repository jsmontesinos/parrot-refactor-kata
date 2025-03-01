import { Parrot } from "./Parrot";

const BASE_SPEED = 12;

export class EuropeanParrot implements Parrot {
  constructor() {}

  getSpeed(): number {
    return BASE_SPEED;
  }

  getCry(): string {
    return "Sqoork!";
  }
}
