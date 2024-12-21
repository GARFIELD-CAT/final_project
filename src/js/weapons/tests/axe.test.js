import { Axe } from "../Axe";

describe("Axe class", () => {
  let axe;

  beforeEach(() => {
    axe = new Axe();
  });

  test("should create a axe with correct properties", () => {
    expect(axe.name).toBe("Секира");
    expect(axe.attack).toBe(27);
    expect(axe.durability).toBe(800);
    expect(axe.initDurability).toBe(800);
    expect(axe.range).toBe(1);
  });
});
