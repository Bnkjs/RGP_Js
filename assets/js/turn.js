class Turn {
  constructor(players){
    this.players = [
      fighterPlayer,
      monkPlayer,
      paladinPlayer,
      berzerkerPlayer,
      assassinPlayer
    ];
   
  }
  start_turn(){
    const turnStart = 1;
    let choosenPlayer = [Math.floor(Math.random() * this.players.length)];
    const gameStats = new Game();
    const chooseWhoAttack = prompt("Que veux-tu faire? \n 👊 Attaquer = touches 1,2,3,4 👊; \n 📉 Voir les stats des joueurs = 5 📈") ;

    switch(chooseWhoAttack){
      case "0":
        return this.players[choosenPlayer].dealDammage(this.players[0]); 
        break;
      case "1":
        return this.players[choosenPlayer].dealDammage(this.players[1]); 
        break;
      case "2":
        return this.players[choosenPlayer].dealDammage(this.players[2]); 
        break;
      case "3":
        return this.players[choosenPlayer].dealDammage(this.players[3]); 
        break;
      case "4":
        return this.players[choosenPlayer].dealDammage(this.players[4]); 
        break;
      case "5":
        return gameStats.watchStats(gameStats);;
        break;
        case "6":
          return fighterPlayer.specialAttack(this.player);;
          break;  
    };
  }
}
