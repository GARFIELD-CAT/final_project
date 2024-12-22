import { Warrior } from "./Warrior";
import { firstWeapons } from "./Player";
import { Axe } from "../weapons/Axe";

export class Dwart extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = "Гном";
    this.weapon = new Axe();
    this.weapons = [this.weapon, ...firstWeapons];
    this.damageCounter = 0;
  }

  takeDamage(damage) {
    this.damageCounter += 1;

    if (this.damageCounter % 6 === 0 && this.getLuck() > 0.5) {
      super.takeDamage(damage / 2);
    } else {
      super.takeDamage(damage);
    }
  }
}
