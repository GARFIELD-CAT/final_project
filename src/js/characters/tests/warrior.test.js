import { Warrior } from "../Warrior";
import { Sword } from "../../weapons/Sword";
import { Arm } from "../../weapons/Arm";
import { Knife } from "../../weapons/Knife";

describe("Warrior class", () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior(0, "Warrior");
  });

  test("should create a warrior with correct properties", () => {
    expect(warrior.life).toBe(120);
    expect(warrior.initLife).toBe(120);
    expect(warrior.magic).toBe(20);
    expect(warrior.speed).toBe(2);
    expect(warrior.attack).toBe(10);
    expect(warrior.agility).toBe(5);
    expect(warrior.luck).toBe(10);
    expect(warrior.description).toBe("Воин");
    expect(warrior.weapon).toBeInstanceOf(Sword);
    expect(warrior.weapons).toEqual([
      expect.any(Sword),
      expect.any(Knife),
      expect.any(Arm),
    ]);
    expect(warrior.position).toBe(0);
    expect(warrior.name).toBe("Warrior");
  });
});
