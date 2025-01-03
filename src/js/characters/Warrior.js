import { Player, firstWeapons } from "./Player";
import { Sword } from "../weapons/Sword";

export class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.initLife = 120;
    this.speed = 2;
    this.attack = 10;
    this.description = "Воин";
    this.weapon = new Sword();
    this.weapons = [this.weapon, ...firstWeapons];
  }

  takeDamage(damage) {
    if (this.life / this.initLife < 0.5 && this.getLuck() > 0.8) {
      let magicDamage = Math.min(damage, this.magic);

      this.magic -= magicDamage;
      super.takeDamage(damage - magicDamage);
    } else {
      super.takeDamage(damage);
    }
  }
}
