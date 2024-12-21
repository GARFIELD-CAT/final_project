import { Archer } from "./characters/Archer";
import { Warrior } from "./characters/Warrior";
import { Mage } from "./characters/Mage";
import { Dwart } from "./characters/Dwart";
import { Crossbowman } from "./characters/Crossbowman";
import { Demourge } from "./characters/Demourge";

export function play() {
  const characters = [
    new Archer(),
    new Warrior(),
    new Mage(),
    new Dwart(),
    new Crossbowman(),
    new Demourge(),
  ];

  return characters;
}
