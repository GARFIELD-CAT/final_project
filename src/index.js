import { play } from "./js/game";
import { Archer } from "./js/characters/Archer";
import { Warrior } from "./js/characters/Warrior";
import { Mage } from "./js/characters/Mage";
import { Dwart } from "./js/characters/Dwart";
import { Crossbowman } from "./js/characters/Crossbowman";
import { Demourge } from "./js/characters/Demourge";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayers() {
  let players = [
    new Warrior(randomNumber(1, 10), "Громослав Железный Кулак"),
    new Archer(randomNumber(1, 10), "Эльвира Летящая Стрела"),
    new Mage(randomNumber(1, 10), "Серафима Огненное Сердце"),
    new Dwart(randomNumber(1, 10), "Борис Златобородый"),
    new Crossbowman(randomNumber(1, 10), "Родион Быстрый Выстрел"),
    new Demourge(randomNumber(1, 10), "Моргат Душеплет"),
  ];
  return players.sort(() => Math.random() - 0.5);
}

let players = getPlayers();
console.log(`Игроки успешно созданы!`);
let winner = play(players);
console.log(
  `В королевской битве победил игрок: ${winner.name} с классом ${winner.description}`
);
