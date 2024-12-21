import { Bow } from "../Bow";

describe("Bow class", () => {
  let bow;

  beforeEach(() => {
    bow = new Bow();
  });

  test("should create a bow with correct properties", () => {
    expect(bow.name).toBe("Лук");
    expect(bow.attack).toBe(10);
    expect(bow.durability).toBe(200);
    expect(bow.initDurability).toBe(200);
    expect(bow.range).toBe(3);
  });
});
