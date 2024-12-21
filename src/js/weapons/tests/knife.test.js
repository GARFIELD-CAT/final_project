import { Knife } from "../Knife";

describe("Knife class", () => {
  let knife;

  beforeEach(() => {
    knife = new Knife();
  });

  test("should create a knife with correct properties", () => {
    expect(knife.name).toBe("Нож");
    expect(knife.attack).toBe(5);
    expect(knife.durability).toBe(300);
    expect(knife.initDurability).toBe(300);
    expect(knife.range).toBe(1);
  });
});
