import { describe, it } from "node:test";
import { ParrotFactory, ParrotTypes } from "../src/ParrotFactory";
import assert from "node:assert";

describe("Parrot", () => {
  it("gets speed of European Parrot", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.EUROPEAN,
      numberOfCoconuts: 0,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 12);
  });

  it("gets speed of African Parrot with one coconut", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.AFRICAN,
      numberOfCoconuts: 1,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 3);
  });

  it("gets speed of African Parrot with two coconuts", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.AFRICAN,
      numberOfCoconuts: 2,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 0);
  });

  it("gets speed of African Parrot with no coconuts", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.AFRICAN,
      numberOfCoconuts: 0,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 12);
  });

  it("gets speed of Norwegian Blue Parrot nailed", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.NORWEGIAN_BLUE,
      numberOfCoconuts: 0,
      voltage: 1.5,
      isNailed: true,
    });
    assert.strictEqual(parrot.getSpeed(), 0);
  });

  it("gets speed of Norwegian Blue Parrot not nailed", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.NORWEGIAN_BLUE,
      numberOfCoconuts: 0,
      voltage: 1.5,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 18);
  });

  it("gets speed of Norwegian Blue Parrot not nailed high voltage", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.NORWEGIAN_BLUE,
      numberOfCoconuts: 0,
      voltage: 4,
      isNailed: false,
    });
    assert.strictEqual(parrot.getSpeed(), 24);
  });

  it("gets cry of European Parrot", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.EUROPEAN,
      numberOfCoconuts: 0,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getCry(), "Sqoork!");
  });

  it("gets cry of African Parrot", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.AFRICAN,
      numberOfCoconuts: 1,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getCry(), "Sqaark!");
  });
  it("gets cry of Norwegian Blue with high voltage", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.NORWEGIAN_BLUE,
      numberOfCoconuts: 0,
      voltage: 4,
      isNailed: false,
    });
    assert.strictEqual(parrot.getCry(), "Bzzzzzz");
  });

  it("gets cry of NorwegianBlue without voltage", () => {
    const parrot = ParrotFactory.create({
      parrotType: ParrotTypes.NORWEGIAN_BLUE,
      numberOfCoconuts: 0,
      voltage: 0,
      isNailed: false,
    });
    assert.strictEqual(parrot.getCry(), "...");
  });
});
