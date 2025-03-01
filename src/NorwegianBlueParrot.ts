import { Parrot } from "./Parrot";
import { BASE_SPEED } from "./parrot";

export class NorwegianBlueParrot implements Parrot {
  constructor(private voltage: number, private isNailed: boolean) {}

  getSpeed(): number {
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  getCry(): string {
    return this.voltage > 0 ? "Bzzzzzz" : "...";
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * BASE_SPEED);
  }
}
