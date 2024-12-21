import { Player } from "./Player";
import { LongBow } from "../weapons/LongBow";

export class Crossbowman extends Player {
  main_weapon = LongBow();
}
