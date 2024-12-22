const winnerPosition = 0;

export function play(players) {
  console.log(
    `Игра началась! Количество оставшихся игроков: ${players.length}`
  );
  let round = 1;

  while (players.length > 1) {
    players.forEach((player) => {
      console.log(`Раунд номер: ${round}`);
      if (!player.isDead()) {
        player.turn(players);
      }

      players = players.filter((player) => !player.isDead());
      console.log(`Количество оставшихся игроков: ${players.length}`);
    });

    round += 1;
  }

  console.log(`Игра закончена!`);
  return players[winnerPosition];
}
