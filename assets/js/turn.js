class Turn {
  constructor(players){
    this.players = 
    [
      fighterPlayer,
      monkPlayer,
      paladinPlayer,
      berzerkerPlayer,
      assassinPlayer
    ];
  }
   
  start_turn()
  {
    let choosenPlayer = [Math.floor(Math.random() * this.players.length)];
    let gameStats = new Game();

    const chooseWhoAttack = prompt("Qui choisis-tu d'attaquer? \n 👊 Attaquer 👊 = \n touche 0: Grace, 1: Moana ,2: Ulder ,3: Draven ,4: Carl ; \n 📉 Pour Voir les stats des joueurs = Touche 5 📈") ;
    
    switch(chooseWhoAttack)
    {
      case "0":
        return choice(choosedPlayer).dealDammage(this.players[0])
        break;
      case "1":
        return choice(choosedPlayer).dealDammage(this.players[1]); 
        break;
      case "2":
        return choice(choosedPlayer).dealDammage(this.players[2]); 
        break;
      case "3":
        return choice(choosedPlayer).dealDammage(this.players[3]); 
        break;
      case "4":
        return choice(choosedPlayer).dealDammage(this.players[4]); 
        break;
      case "5": gameStats.watchStats();
        return ;
        case "6":
        return choice(choosedPlayer).dealDammage(this.players[choosenPlayer]);
        break;  
    };
  }
}
