import { Arm } from "../weapons/Arm";
import { Knife } from "../weapons/Knife";

export class Player {
  constructor(position, name) {
    this.position = position;
    this.name = name;
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = "Игрок";
    this.weapon = new Arm();
    this.weapons = [new Knife(), new Arm()];
  }

  getLuck() {
    return (this.randomNumber(0, 100) + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    return (
      ((this.attack + this.weapon.getDamage()) * this.getLuck()) / distance
    );
  }

  takeDamage(damage) {
    this.life -= damage;

    if (this.life < 0) {
      this.life = 0;
    }
  }

  isDead() {
    return this.life === 0;
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
