import { describe, it } from "node:test";
import { Parrot, ParrotTypes } from "../src/parrot";
import assert from "node:assert";

describe("Parrot", () => {
  it("gets speed of European Parrot", () => {
    const parrot = new Parrot(ParrotTypes.EUROPEAN, 0, 0, false);
    assert.strictEqual(parrot.getSpeed(), 12);
  });

  it("gets speed of African Parrot with one coconut", () => {
    const parrot = new Parrot(ParrotTypes.AFRICAN, 1, 0, false);
    assert.strictEqual(parrot.getSpeed(), 3);
  });

  it("gets speed of African Parrot with two coconuts", () => {
    const parrot = new Parrot(ParrotTypes.AFRICAN, 2, 0, false);
    assert.strictEqual(parrot.getSpeed(), 0);
  });

  it("gets speed of African Parrot with no coconuts", () => {
    const parrot = new Parrot(ParrotTypes.AFRICAN, 0, 0, false);
    assert.strictEqual(parrot.getSpeed(), 12);
  });

  it("gets speed of Norwegian Blue Parrot nailed", () => {
    const parrot = new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, 1.5, true);
    assert.strictEqual(parrot.getSpeed(), 0);
  });

  it("gets speed of Norwegian Blue Parrot not nailed", () => {
    const parrot = new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, 1.5, false);
    assert.strictEqual(parrot.getSpeed(), 18);
  });

  it("gets speed of Norwegian Blue Parrot not nailed high voltage", () => {
    const parrot = new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, 4, false);
    assert.strictEqual(parrot.getSpeed(), 24);
  });

  it("gets cry of European Parrot", () => {
    const parrot = new Parrot(ParrotTypes.EUROPEAN, 0, 0, false);
    assert.strictEqual(parrot.getCry(), "Sqoork!");
  });

  it("gets cry of African Parrot", () => {
    const parrot = new Parrot(ParrotTypes.AFRICAN, 1, 0, false);
    assert.strictEqual(parrot.getCry(), "Sqaark!");
  });
  it("gets cry of Norwegian Blue with high voltage", () => {
    const parrot = new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, 4, false);
    assert.strictEqual(parrot.getCry(), "Bzzzzzz");
  });

  it("gets cry of NorwegianBlue without voltage", () => {
    const parrot = new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, 0, false);
    assert.strictEqual(parrot.getCry(), "...");
  });
});
