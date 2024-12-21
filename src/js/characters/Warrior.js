import { Player } from "./Player";
import { Sword } from "../weapons/Sword";

export class Warrior extends Player {
  main_weapon = Sword();
}
