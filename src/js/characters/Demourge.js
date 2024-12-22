import { Mage } from "./Mage";
import { firstWeapons } from "./Player";
import { StormStaff } from "../weapons/StormStaff";

export class Demourge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = "Демиург";
    this.weapon = new StormStaff();
    this.weapons = [this.weapon, ...firstWeapons];
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    let luck = this.getLuck();
    let damage =
      ((this.attack + this.weapon.getDamage()) * luck) / Math.max(distance, 1);

    if (luck > 0.6 && this.magic > 0) {
      damage *= 1.5;
    }

    return damage;
  }
}
