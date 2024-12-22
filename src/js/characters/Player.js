import { Arm } from "../weapons/Arm";
import { Knife } from "../weapons/Knife";

export const firstWeapons = [new Knife(), new Arm()];

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
    this.weapons = firstWeapons;
  }

  getLuck() {
    return (Math.random() * 100 + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }

    let damage =
      ((this.attack + this.weapon.getDamage()) * this.getLuck()) /
      Math.max(distance, 1);

    return damage;
  }

  takeDamage(damage) {
    console.log(
      `${this.getPlayerInfo()} получил урон в размере ${damage} единиц.`
    );
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    distance = Math.min(distance, this.speed);
    this.position -= distance;
    console.log(`${this.getPlayerInfo()} передвинулся влево на ${distance}`);
  }

  moveRight(distance) {
    distance = Math.min(distance, this.speed);
    this.position += distance;
    console.log(`${this.getPlayerInfo()} передвинулся вправо на ${distance}`);
  }

  move(distance) {
    if (distance > 0) {
      this.moveRight(distance);
    } else {
      this.moveLeft(distance * -1);
    }
  }

  isAttackBlocked() {
    let isAttackBlocked = this.getLuck() > (100 - this.luck) / 100;

    if (isAttackBlocked) {
      console.log(`${this.getPlayerInfo()} заблокировал атаку!!!`);
    } else {
      console.log(`${this.getPlayerInfo()} не смог заблокировать атаку!!!`);
    }

    return isAttackBlocked;
  }

  dodged() {
    let isAttackDodged =
      this.getLuck() > (100 - this.agility - this.speed * 3) / 100;

    if (isAttackDodged) {
      console.log(`${this.getPlayerInfo()} увернулся от атаки!!!`);
    } else {
      console.log(`${this.getPlayerInfo()} не смог увернуться от атаки!!!`);
    }

    return isAttackDodged;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    } else if (this.dodged()) {
      return;
    } else {
      this.takeDamage(damage);
    }
  }

  checkWeapon() {
    if (this.weapon.isBroken()) {
      console.log(
        `${this.getPlayerInfo()} текущее оружие ${
          this.weapon.name
        } было сломано.`
      );
      this.weapon = this.weapons.shift();
      console.log(
        `${this.getPlayerInfo()} взял выбрал новое оружие ${this.weapon.name}.`
      );
    }
  }

  tryAttack(enemy) {
    console.log(
      `${this.getPlayerInfo()} пытается атаковать противника ${enemy.getPlayerInfo()}.`
    );

    let distance = Math.abs(this.position - enemy.position);

    if (distance > this.weapon.range) {
      console.log(`${this.getPlayerInfo()} не смог дотянуться до противника.`);
      return;
    }

    let damage = this.getDamage(distance);
    this.weapon.takeDamage(10 * this.getLuck());
    this.checkWeapon();

    if (enemy.position === this.position) {
      enemy.moveRight(1);
      damage *= 2;
    }
    console.log(
      `${this.getPlayerInfo()} пытается нанести удар с уроном ${damage}.`
    );

    enemy.takeAttack(damage);

    if (enemy.isDead()) {
      console.log(`${enemy.getPlayerInfo()} умер от смертельных ранений!!!`);
    }
  }

  chooseEnemy(players) {
    if (players.length === 0) {
      return;
    }

    let filterPlayers = players.filter((player) => player !== this);
    let enemy = filterPlayers.reduce((min, current) => {
      return current.life < min.life ? current : min;
    });

    return enemy;
  }

  moveToEnemy(enemy) {
    let distance = enemy.position - this.position;
    this.move(distance);
  }

  turn(players) {
    let enemy = this.chooseEnemy(players);

    if (!enemy) {
      return;
    }

    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }

  getPlayerInfo() {
    return `Игрок: ${this.name}, positon: ${this.position}, life: ${this.life}, magic: ${this.magic}`;
  }
}
