import { Parrot } from "./Parrot";

const BASE_SPEED = 12;

export class NorwegianBlueParrot implements Parrot {
  constructor(private voltage: number, private isNailed: boolean) {}

  getSpeed(): number {
    return this.isNailed ? 0 : this.calculateMaxSpeedFromVoltage(this.voltage);
  }

  getCry(): string {
    return this.voltage > 0 ? "Bzzzzzz" : "...";
  }

  private calculateMaxSpeedFromVoltage(voltage: number): number {
    return Math.min(24, voltage * BASE_SPEED);
  }
}
