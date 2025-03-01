export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

const BASE_SPEED = 12;
const LOAD_FACTOR = 9;
export class Parrot {
  constructor(
    private parrotType: ParrotTypes,
    private numberOfCoconuts: number,
    private voltage: number,
    private isNailed: boolean
  ) {}

  public static create(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    isNailed: boolean
  ): Parrot {
    return new Parrot(parrotType, numberOfCoconuts, voltage, isNailed);
  }

  public getSpeed(): number {
    switch (this.parrotType) {
      case ParrotTypes.EUROPEAN:
        return this.getBaseSpeed();
      case ParrotTypes.AFRICAN:
        return Math.max(
          0,
          this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts
        );
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    throw new Error("Should be unreachable");
  }

  private getBaseSpeed(): number {
    return BASE_SPEED;
  }

  private getLoadFactor(): number {
    return LOAD_FACTOR;
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.getBaseSpeed());
  }

  public getCry(): String {
    switch (this.parrotType) {
      case ParrotTypes.EUROPEAN:
        return "Sqoork!";
      case ParrotTypes.AFRICAN:
        return "Sqaark!";
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.voltage > 0 ? "Bzzzzzz" : "...";
    }
    throw new Error("Should be unreachable");
  }
}
