class Berzerker extends Character{
  constructor(name, special_attack, hp = 8, damage = 4, mana = 0, status ){
    super(hp, damage, mana, status );
    this.name = name;
    this.special_attack = special_attack;
  }
}
const berzerkerPlayer = new Berzerker('Draven 🦹‍♂️');