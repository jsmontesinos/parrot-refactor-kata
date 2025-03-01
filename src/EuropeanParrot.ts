import { Parrot } from "./Parrot";
import { BASE_SPEED } from "./parrot";

export class EuropeanParrot implements Parrot {
  constructor() {}

  getSpeed(): number {
    return BASE_SPEED;
  }

  getCry(): string {
    return "Sqoork!";
  }
}
