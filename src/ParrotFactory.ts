import { AfricanParrot } from "./AfricanParrot";
import { EuropeanParrot } from "./EuropeanParrot";
import { NorwegianBlueParrot } from "./NorwegianBlueParrot";
import { Parrot } from "./Parrot";
import { ParrotType } from "./ParrotTypes";

type CreateEuropeanParrotProperties = {
  parrotType: ParrotType.EUROPEAN;
};

type CreateAfricanParrotProperties = {
  parrotType: ParrotType.AFRICAN;
  numberOfCoconuts: number;
};

type CreateNorwegianBlueParrotProperties = {
  parrotType: ParrotType.NORWEGIAN_BLUE;
  voltage: number;
  isNailed: boolean;
};

type CreateParrotProperties =
  | CreateEuropeanParrotProperties
  | CreateAfricanParrotProperties
  | CreateNorwegianBlueParrotProperties;

export abstract class ParrotFactory {
  public static create(properties: CreateParrotProperties): Parrot {
    switch (properties.parrotType) {
      case ParrotType.EUROPEAN:
        return new EuropeanParrot();
      case ParrotType.NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(properties.voltage, properties.isNailed);
      case ParrotType.AFRICAN:
        return new AfricanParrot(properties.numberOfCoconuts);
    }
  }
}
