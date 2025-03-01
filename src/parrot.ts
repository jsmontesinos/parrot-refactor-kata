export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

const BASE_SPEED = 12;
const LOAD_FACTOR = 9;

export abstract class Parrot {
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
  ): Parrot {
    switch (parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot(numberOfCoconuts, voltage, isNailed);
      case ParrotTypes.NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(numberOfCoconuts, voltage, isNailed);
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(numberOfCoconuts, voltage, isNailed);
    }
  }

  public getSpeed(): number {
    switch (this.getType()) {
      case ParrotTypes.AFRICAN:
        return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    throw new Error("Should be unreachable");
  }

  abstract getType();

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * BASE_SPEED);
  }

  public getCry(): String {
    switch (this.getType()) {
      case ParrotTypes.AFRICAN:
        return "Sqaark!";
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.voltage > 0 ? "Bzzzzzz" : "...";
    }
    throw new Error("Should be unreachable");
  }
}

class EuropeanParrot extends Parrot {
  override getType() {
    return ParrotTypes.EUROPEAN;
  }

  override getSpeed(): number {
    return BASE_SPEED;
  }

  override getCry(): string {
    return "Sqoork!";
  }
}

class AfricanParrot extends Parrot {
  override getType() {
    return ParrotTypes.AFRICAN;
  }
}

class NorwegianBlueParrot extends Parrot {
  override getType() {
    return ParrotTypes.NORWEGIAN_BLUE;
  }
}
