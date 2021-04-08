
class Fighter extends Character{
  constructor(name, special_attack, hp = 12, damage = 4, mana = 40, status ){
    super(hp, damage, mana, status);
    this.name = name;
    this.special_attack = special_attack;
  }
  specialAttack(victim) {
    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(
        `${this.name} utilise l'attaque Dark Vision sur ${victim.name}. ${victim.name} perd 5pts de vie ! ${this.name} prendra 2 dégâts de moins par coup reçu!  Il dispose maintenant de ${this.mana} mana.`
      );
      return victim.takeDamage(5);
    } else {
      console.log(
        "Vous n'avez plus assez de mana pour faire ça, déso mais ça part en attaque de BASE"
      );
      return victim.takeDamage(this.dmg);
    }
  }
}

const fighterPlayer = new Fighter('Grace 🦸‍♀️');
