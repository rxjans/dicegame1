function match(){


var randomNumber = 0;
function random(){
 randomNumber = Math.floor(Math.random()*6+1);
 return randomNumber;
//console.log(randomNumber);
}

var randomNumber1 = random();

if (randomNumber1 == 1){
    document.querySelector(".player1 img").setAttribute("src", "./images/dice1.png");
}

else if (randomNumber1 == 2){
    document.querySelector(".player1 img").setAttribute("src", "./images/dice2.png");
}

else if (randomNumber1 == 3){
    document.querySelector(".player1 img").setAttribute("src", "./images/dice3.png");
}

else if (randomNumber1 == 4){
    document.querySelector(".player1 img").setAttribute("src", "./images/dice4.png");
}

else if (randomNumber1 == 5){
    document.querySelector(".player1 img").setAttribute("src", "./images/dice5.png");
}

else {
    document.querySelector(".player1 img").setAttribute("src", "./images/dice6.png");
}
 

//########################player2####################
var randomNumber2 = random();
if (randomNumber2 == 1){
    document.querySelector(".player2 img").setAttribute("src", "./images/dice1.png");
}

else if (randomNumber2 == 2){
    document.querySelector(".player2 img").setAttribute("src", "./images/dice2.png");
}

else if (randomNumber2 == 3){
    document.querySelector(".player2 img").setAttribute("src", "./images/dice3.png");
}

else if (randomNumber2 == 4){
    document.querySelector(".player2 img").setAttribute("src", "./images/dice4.png");
}

else if (randomNumber2 == 5){
    document.querySelector(".player2 img").setAttribute("src", "./images/dice5.png");
}

else {
    document.querySelector(".player2 img").setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2){
    document.querySelector(".container").textContent="Player 1 wins";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector(".container").textContent="Player 2 wins";
}

else{
    document.querySelector(".container").textContent="Draw";
}

}
