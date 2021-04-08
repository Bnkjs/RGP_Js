
// BTN START
const btnStart = document.querySelector(".btn-start");
btnStart.addEventListener("click",function(){
  const gameStart = new Game();
  gameStart.newTurn(gameStart);
});
// Name player on h1 card
const cardName = document.querySelectorAll('.card-title');
cardName[0].innerHTML= paladinPlayer.name;
cardName[1].innerHTML= fighterPlayer.name;
cardName[2].innerHTML= assassinPlayer.name;
cardName[3].innerHTML= monkPlayer.name;
cardName[4].innerHTML= berzerkerPlayer.name;

const cardStatus = document.querySelectorAll('.card-text');
cardStatus[0].innerHTML= paladinPlayer.status;
cardStatus[1].innerHTML= fighterPlayer.status;
cardStatus[2].innerHTML= assassinPlayer.status;
cardStatus[3].innerHTML= monkPlayer.status;
cardStatus[4].innerHTML= berzerkerPlayer.status;



const modaltext = document.querySelectorAll('.modal-text');
modaltext[0].innerHTML= `1/ ${paladinPlayer.name} = 💛 hp :  ${paladinPlayer.hp} , 💫 mana: ${paladinPlayer.mana},🌀  damage: ${paladinPlayer.damage}, status: ${paladinPlayer.status}`;
modaltext[1].innerHTML= `2/ ${fighterPlayer.name} = 💛 hp: ${fighterPlayer.hp}, 💫 mana: ${fighterPlayer.mana}, 🌀 damage: ${fighterPlayer.damage}, status: ${fighterPlayer.status}`;
modaltext[2].innerHTML= `3/ ${assassinPlayer.name} = 💛 hp: ${assassinPlayer.hp}, 💫 mana: ${assassinPlayer.mana}, 🌀 damage: ${assassinPlayer.damage}, status: ${assassinPlayer.status}`;
modaltext[3].innerHTML= `5/ ${monkPlayer.name} = 💛 hp: ${monkPlayer.hp}, 💫 mana: ${monkPlayer.mana}, 🌀 damage: ${monkPlayer.damage}, status: ${monkPlayer.status}`;
modaltext[4].innerHTML= `4/ ${berzerkerPlayer.name} = 💛 hp: ${berzerkerPlayer.hp}, 💫 mana: ${berzerkerPlayer.mana}, 🌀 damage: ${berzerkerPlayer.damage}, status: ${berzerkerPlayer.status}`;


console.log(modaltext);
