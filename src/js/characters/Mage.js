import { Player, firstWeapons } from "./Player";
import { Staff } from "../weapons/Staff";

export class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.initMagic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = "Маг";
    this.weapon = new Staff();
    this.weapons = [this.weapon, ...firstWeapons];
  }

  takeDamage(damage) {
    if (this.magic / this.initMagic > 0.5) {
      super.takeDamage(damage / 2);
      this.magic -= 12;
    } else {
      super.takeDamage(damage);
    }
  }
}
