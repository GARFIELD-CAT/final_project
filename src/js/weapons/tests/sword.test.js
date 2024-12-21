import { Sword } from "../Sword";

describe("Sword class", () => {
  let sword;

  beforeEach(() => {
    sword = new Sword();
  });

  test("should create a sword with correct properties", () => {
    expect(sword.name).toBe("Меч");
    expect(sword.attack).toBe(25);
    expect(sword.durability).toBe(500);
    expect(sword.initDurability).toBe(500);
    expect(sword.range).toBe(1);
  });
});
