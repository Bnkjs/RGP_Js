class Paladin extends Character{
  constructor(name, special_attack, hp = 16, damage = 3, mana = 160, status ){
    super(hp, damage, mana, status);
    this.name = name;
    this.special_attack = special_attack;
  }
}
const paladinPlayer = new Paladin('Ulder 🧙‍♂️');
