export class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    this.durability -= damage;

    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === Infinity) {
      return this.attack;
    } else if (this.durability <= this.initDurability * 0.3) {
      return this.attack / 2;
    }

    return this.attack;
  }

  isBroken() {
    return this.durability === 0;
  }
}
