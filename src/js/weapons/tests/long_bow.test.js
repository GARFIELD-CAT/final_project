import { LongBow } from "../LongBow";

describe("LongBow class", () => {
  let longBow;

  beforeEach(() => {
    longBow = new LongBow();
  });

  test("should create a longBow with correct properties", () => {
    expect(longBow.name).toBe("Длинный лук");
    expect(longBow.attack).toBe(15);
    expect(longBow.durability).toBe(200);
    expect(longBow.initDurability).toBe(200);
    expect(longBow.range).toBe(4);
  });
});
