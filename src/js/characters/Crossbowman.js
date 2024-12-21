import { Player } from "./Archer";
import { LongBow } from "../weapons/LongBow";

export class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85;
    this.attack = 8;
    this.agility = 20;
    this.luck = 15;
    this.description = "Арбалетчик";
    this.weapon = new LongBow();
    this.weapons = this.weapons.splice(0, 0, new LongBow());
  }
}
