export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

const BASE_SPEED = 12;
const LOAD_FACTOR = 9;

export abstract class ParrotFactory {
  constructor(
    protected numberOfCoconuts: number,
    protected voltage: number,
    protected isNailed: boolean
  ) {}

  public static create(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    isNailed: boolean
  ): ParrotFactory | Parrot {
    switch (parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot();
      case ParrotTypes.NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(numberOfCoconuts, voltage, isNailed);
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(numberOfCoconuts, voltage, isNailed);
    }
  }

  abstract getSpeed(): number;
  abstract getCry(): string;
}

interface Parrot {
  getSpeed(): number;
  getCry(): string;
}

class EuropeanParrot implements Parrot {
  constructor() {}
  getSpeed(): number {
    return BASE_SPEED;
  }

  getCry(): string {
    return "Sqoork!";
  }
}

class AfricanParrot extends ParrotFactory {
  override getSpeed(): number {
    return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
  }

  override getCry(): string {
    return "Sqaark!";
  }
}

class NorwegianBlueParrot extends ParrotFactory {
  override getSpeed(): number {
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  override getCry(): string {
    return this.voltage > 0 ? "Bzzzzzz" : "...";
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * BASE_SPEED);
  }
}
