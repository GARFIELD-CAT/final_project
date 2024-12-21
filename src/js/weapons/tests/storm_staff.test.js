import { StormStaff } from "../StormStaff";

describe("Staff class", () => {
  let stormStaff;

  beforeEach(() => {
    stormStaff = new StormStaff();
  });

  test("should create a stormStaff with correct properties", () => {
    expect(stormStaff.name).toBe("Посох Бури");
    expect(stormStaff.attack).toBe(10);
    expect(stormStaff.durability).toBe(300);
    expect(stormStaff.initDurability).toBe(300);
    expect(stormStaff.range).toBe(3);
  });
});
