import { Staff } from "../Staff";

describe("Staff class", () => {
  let staff;

  beforeEach(() => {
    staff = new Staff();
  });

  test("should create a staff with correct properties", () => {
    expect(staff.name).toBe("Посох");
    expect(staff.attack).toBe(8);
    expect(staff.durability).toBe(300);
    expect(staff.initDurability).toBe(300);
    expect(staff.range).toBe(2);
  });
});
