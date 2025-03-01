import { AfricanParrot } from "./AfricanParrot";
import { EuropeanParrot } from "./EuropeanParrot";
import { NorwegianBlueParrot } from "./NorwegianBlueParrot";
import { Parrot } from "./Parrot";
import { ParrotTypes } from "./ParrotTypes";

type CreateEuropeanParrotProperties = {
  parrotType: ParrotTypes.EUROPEAN;
};

type CreateAfricanParrotProperties = {
  parrotType: ParrotTypes.AFRICAN;
  numberOfCoconuts: number;
};

type CreateNorwegianBlueParrotProperties = {
  parrotType: ParrotTypes.NORWEGIAN_BLUE;
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
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot();
      case ParrotTypes.NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(properties.voltage, properties.isNailed);
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(properties.numberOfCoconuts);
    }
  }
}
