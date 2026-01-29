function showPlayer(player){
    console.log("I am " + player.name + ", age " + player.age + ", playing for " + player.team);
}

player1 = {name: "Shiva", age: 25, team: "Warriors"};
showPlayer(player1); // passing object as argument with variable

showPlayer({name: "Krishna", age: 26, team: "Knights"}); // passing object as argument directly


