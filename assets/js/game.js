class Game{
  constructor(turnleft = 10, players_turn = 5){
    this.turnleft = turnleft;
    this.players_turn = players_turn;
  }

  newTurn(game)
  {
    let n = 0;
    while (n < this.turnleft){
      let turn = new Turn();
      choice();
      turn.start_turn();
      this.turnleft -= 1;
      console.log(`|| Il reste ${this.turnleft} round à jouer ||`) 
  }
    console.log("<- - - - - - - - - - - - - - - - - - - - -> ");
    console.log("La partie est terminée !");
    console.log(`Voici le noms des gagnants de cette partie:`);
    const arrayCardStatus = [ 
        {nom: fighterPlayer.name, status : fighterPlayer.status},
        {nom : paladinPlayer.name, status: paladinPlayer.status},
        { nom : assassinPlayer.name, status : assassinPlayer.status},
        { nom : monkPlayer.name, status : monkPlayer.status},
        { nom : berzerkerPlayer.name, status : berzerkerPlayer.status}
      ];
      const alive = arrayCardStatus.filter(function(x){
        if (x.status === 'playing 🤺 '){
        return console.log(`${x.nom}`);
        }  
    })
    console.log("<- - - - - - - - - - - - - - - - - - - - -> ");
    
  }
  watchStats(){
    return console.log(`Voici les stats de tous les players : \n 
    1/ ${paladinPlayer.name} = 💛 hp :  ${paladinPlayer.hp} , 💫 mana: ${paladinPlayer.mana},🌀  damage: ${paladinPlayer.damage}, status: ${paladinPlayer.status}  \n
    2/ ${fighterPlayer.name} = 💛 hp: ${fighterPlayer.hp}, 💫 mana: ${fighterPlayer.mana}, 🌀 damage: ${fighterPlayer.damage}, status: ${fighterPlayer.status} \n
    3/ ${assassinPlayer.name} = 💛 hp: ${assassinPlayer.hp}, 💫 mana: ${assassinPlayer.mana}, 🌀 damage: ${assassinPlayer.damage}, status: ${assassinPlayer.status} \n
    4/ ${berzerkerPlayer.name} = 💛 hp: ${berzerkerPlayer.hp}, 💫 mana: ${berzerkerPlayer.mana}, 🌀 damage: ${berzerkerPlayer.damage}, status: ${berzerkerPlayer.status}\n
    5/ ${monkPlayer.name} = 💛 hp: ${monkPlayer.hp}, 💫 mana: ${monkPlayer.mana}, 🌀 damage: ${monkPlayer.damage}, status: ${monkPlayer.status}`)
}
}


console.log()