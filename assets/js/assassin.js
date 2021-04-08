class Assassin extends Character{
  constructor(name, special_attack, hp = 6, damage = 6, mana = 20, status ){
    super(hp, damage, mana, status);
    this.name = name;
    this.special_attack = special_attack;
  }
}

const assassinPlayer = new Assassin('Carl 🧛‍♀️');
