import { Player, firstWeapons } from "./Player";
import { Bow } from "../weapons/Bow";

export class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 35;
    this.attack = 5;
    this.agility = 10;
    this.description = "Лучник";
    this.weapon = new Bow();
    this.weapons = [this.weapon, ...firstWeapons];
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    return (
      ((this.attack + this.weapon.getDamage()) * this.getLuck() * distance) /
      this.weapon.range
    );
  }
}
