
choice = (answer) =>{
  if (answer === 'Ulder') 
  {
    console.log(`Vous avez choisi ${paladinPlayer.name}`)
    return paladinPlayer;
  }
  
  else if (choosedPlayer === 'Grace') 
  {
    console.log(`Vous avez choisi ${fighterPlayer.name}`)
    return fighterPlayer;
  }
  else if (choosedPlayer === 'Moana') 
  {
    console.log(`Vous avez choisi ${monkPlayer.name}`)
    return monkPlayer;
  }
  else if (choosedPlayer === 'Draven') 
  {
    console.log(`Vous avez choisi ${berzerkerPlayer.name}`)
    return berzerkerPlayer;
  }
  else if (choosedPlayer === 'Carl') 
  {
    console.log(`Vous avez choisi ${assassinPlayer.name}`)
    return assassinPlayer;
  }  
        
}

