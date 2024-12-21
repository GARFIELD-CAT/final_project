import { Player } from "../Player";
import { Arm } from "../../weapons/Arm";
import { Knife } from "../../weapons/Knife";

describe("Player class", () => {
  let player;

  beforeEach(() => {
    player = new Player(0, "Бэтмен");
  });

  test("should create a player with correct properties", () => {
    expect(player.life).toBe(100);
    expect(player.magic).toBe(20);
    expect(player.speed).toBe(1);
    expect(player.attack).toBe(10);
    expect(player.agility).toBe(5);
    expect(player.luck).toBe(10);
    expect(player.description).toBe("Игрок");
    expect(player.weapon).toBeInstanceOf(Arm);
    expect(player.weapons).toEqual([expect.any(Knife), expect.any(Arm)]);
    expect(player.position).toBe(0);
    expect(player.name).toBe("Бэтмен");
  });

  test("should calculate damage based on distance", () => {
    const damage = player.getDamage(1);
    expect(damage > 0).toBe(true);
  });

  test("should return 0 damage if distance is greater than weapon distance", () => {
    player.weapon.distance = 5;
    const damage = player.getDamage(6);
    expect(damage).toBe(0);
  });

  test("should take damage correctly", () => {
    player.takeDamage(30);
    expect(player.life).toBe(70);

    player.takeDamage(100);
    expect(player.life).toBe(0);
  });

  test("should check if player is dead", () => {
    expect(player.isDead()).toBe(false);

    player.takeDamage(100);
    expect(player.isDead()).toBe(true);
  });
});
