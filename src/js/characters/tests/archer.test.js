import { Archer } from "../Archer";
import { Bow } from "../../weapons/Bow";
import { Arm } from "../../weapons/Arm";
import { Knife } from "../../weapons/Knife";

describe("Archer class", () => {
  let archer;

  beforeEach(() => {
    archer = new Archer(0, "Archer");
  });

  test("should create a archer with correct properties", () => {
    expect(archer.life).toBe(80);
    expect(archer.magic).toBe(35);
    expect(archer.speed).toBe(1);
    expect(archer.attack).toBe(5);
    expect(archer.agility).toBe(10);
    expect(archer.luck).toBe(10);
    expect(archer.description).toBe("Лучник");
    expect(archer.weapon).toBeInstanceOf(Bow);
    expect(archer.weapons).toEqual([
      expect.any(Bow),
      expect.any(Knife),
      expect.any(Arm),
    ]);
    expect(archer.position).toBe(0);
    expect(archer.name).toBe("Archer");
  });
});
