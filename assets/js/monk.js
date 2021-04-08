class Monk extends Character{
  constructor(name, special_attack, hp = 8, damage = 2, mana = 200 ){
    super(hp, damage, mana);
    this.name = name;
    this.special_attack = special_attack;
  }
}

const monkPlayer = new Monk('Moana 🧝‍♀️');
