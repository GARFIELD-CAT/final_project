import { Arm } from "../Arm";

describe("Arm class", () => {
  let arm;

  beforeEach(() => {
    arm = new Arm();
  });

  test("should create a arm with correct properties", () => {
    expect(arm.name).toBe("Рука");
    expect(arm.attack).toBe(1);
    expect(arm.durability).toBe(Infinity);
    expect(arm.initDurability).toBe(Infinity);
    expect(arm.range).toBe(1);
  });

  test("should take damage and not reduce durability", () => {
    arm.takeDamage(25);
    expect(arm.durability).toBe(Infinity);
  });

  test("should return full damage always", () => {
    expect(arm.getDamage()).toBe(1);
  });

  test("should not be broken always", () => {
    expect(arm.isBroken()).toBe(false);
  });
});
