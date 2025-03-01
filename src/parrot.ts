import { AfricanParrot } from "./AfricanParrot";
import { EuropeanParrot } from "./EuropeanParrot";
import { NorwegianBlueParrot } from "./NorwegianBlueParrot";
import { Parrot } from "./Parrot";

export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export const BASE_SPEED = 12;
export const LOAD_FACTOR = 9;

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
  ): Parrot {
    switch (parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot();
      case ParrotTypes.NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(voltage, isNailed);
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(numberOfCoconuts);
    }
  }
}
