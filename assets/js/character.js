
class Character {
  constructor(hp, damage, mana, status = 'playing 🤺 ') {
    this.hp = hp;
    this.damage = damage;
    this.mana = mana;
    this.name = name;
    this.status = status;
  }
  takeDammage(dmg){
    this.hp -= dmg; 
    console.log("<- - - - - - - - - - - - - - - - - - - - -> ");
    console.log(`${this.name} à infligé ${dmg} de dégât!!`);
    console.log("<- - - - - - - - - - - - - - - - - - - - -> ");

  };

  dealDammage(victim){
    if (this.name == victim.name){
      console.log("on ne peut pas s'attaquer soit même")
    }
    else {
      
      if (victim.hp > 0){
      console.log(`${this.name} est ton joueur pour ce tour et à choisi ${victim.name} comme adversaire !`);
      this.takeDammage(this.damage);
      console.log(`Il reste ${victim.hp -= this.damage} hp à ${victim.name}`);
      }
      if (victim.hp <= 0){
          victim.status = 'Loser 👹 ';
          console.log("<- - - - - - - - - - - - - - - - - - - - -> ");
          console.log(` ☠ GAME OVER pour ${victim.name} qui vient de mourrir ☠️ `);
          console.log("<- - - - - - - - - - - - - - - - - - - - -> ");
        }
       if (victim.hp < 0 && victim.status === 'Loser 👹 ' ){
        console.log(`Ce joueur est  mort, il ne peut plus être attaqué...`);
      }
    }
  }
}


