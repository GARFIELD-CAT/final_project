import { Warrior } from "./Warrior";
import { Axe } from "../weapons/Axe";

export class Dwart extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = "Гном";
    this.weapon = new Axe();
    this.weapons = this.weapons.splice(0, 0, new Axe());
    this.damageCounter = 0;
  }

  takeDamage(damage) {
    this.damageCounter += 1;

    if (this.damageCounter === 6) {
      if (this.getLuck() > 0.5) {
        this.life -= damage / 2;
      } else {
        this.life -= damage;
      }
    } else {
      this.life -= damage;
    }

    if (this.life < 0) {
      this.life = 0;
    }
  }
}
