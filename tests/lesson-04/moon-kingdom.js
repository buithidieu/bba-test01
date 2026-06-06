//bt1 tao ham createCharacters, khai bao mang cac object: characters
//co cacs thuoc tinh name level heath
function createCharacters(){
   //khai bao mang
    const characters = [
    {name: "dieu", level: 1, health: 1000}, //createCharacters[0] createCharacters.length =3
    {name: "my", level: 2, health: 2000},
    {name: "pig", level: 1, health: 3300}
 ];
  //tao mang moi
   const charactersPowerUp = characters.map(characters => ({
    name: characters.name.toUpperCase(),
    level: characters.level * 2,
    health: characters.health * 3
  }));
 return charactersPowerUp;
}
const allcharacters = createCharacters(); //save ket qua vao bien allcharacters
//console.log(createCharacters()); // output 
//filter cac phan tu co chi sohealth >1000
let PossibleWinners = allcharacters.filter(characters => characters.health > 1000);

console.log("Danh sach power up", allcharacters);
console.log("Possible winner la", PossibleWinners);



//bt2 tao ham printLeaderboard
function printLeaderboard (players){
//sap sep mang score cao nhat den thap nhat
const sortedbyScore = [...players].sort((a,b) => b.score - a.score);
console.log('Bang xep hang:');

sortedbyScore.forEach(function(players){
  console.log(`${players.name} : ${players.score}`);
})
}
const players = [
    {name: "Mario", score: 8000},
    {name: "luigi", score: 11100},
    {name: "Peach", score: 850},
    {name: "Yoshi", score: 99900},
   {name: "Phong", score: 500}
];
printLeaderboard(players);

