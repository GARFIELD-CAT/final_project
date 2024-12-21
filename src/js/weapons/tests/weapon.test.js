import { Weapon } from "../Weapon";

describe("Weapon class", () => {
  let weapon;

  beforeEach(() => {
    weapon = new Weapon("Меч", 10, 100, 5);
  });

  test("should create a weapon with correct properties", () => {
    expect(weapon.name).toBe("Меч");
    expect(weapon.attack).toBe(10);
    expect(weapon.durability).toBe(100);
    expect(weapon.initDurability).toBe(100);
    expect(weapon.range).toBe(5);
  });

  test("should take damage and reduce durability", () => {
    weapon.takeDamage(25);
    expect(weapon.durability).toBe(75);
  });

  test("should not reduce durability below 0", () => {
    weapon.takeDamage(110);
    expect(weapon.durability).toBe(0);
  });

  test("should return full damage when durability is above 30%", () => {
    expect(weapon.getDamage()).toBe(10);
  });

  test("should return half damage when durability is below 30%", () => {
    weapon.takeDamage(50); // durability = 50
    expect(weapon.getDamage()).toBe(10); // still above 30%
    weapon.takeDamage(20); // durability = 30
    expect(weapon.getDamage()).toBe(5); // now below 30%
    weapon.takeDamage(10); // durability = 20
    expect(weapon.getDamage()).toBe(5); // now below 30%
  });

  test("should be broken when durability is 0", () => {
    weapon.takeDamage(100);
    expect(weapon.isBroken()).toBe(true);
  });

  test("should not be broken when durability is above 0", () => {
    expect(weapon.isBroken()).toBe(false);
  });
});
