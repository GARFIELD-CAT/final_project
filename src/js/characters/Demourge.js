import { Player } from "./Mage";
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
    this.weapons = this.weapons.splice(0, 0, new StormStaff());
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    let luck = this.getLuck();
    damage = ((this.attack + this.weapon.getDamage()) * luck) / distance;

    if (luck > 0.6 && this.magic > 0) {
      damage *= 1.5;
    }

    return damage;
  }
}
