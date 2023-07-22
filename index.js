function match(){
    function random(){
        return Math.floor(Math.random()*6+1);
    }
    
    var randomNumber1 = random();
    document.querySelector(".player1 img").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    
    var randomNumber2 = random();
    document.querySelector(".player1 img").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    
    if (randomNumber1 > randomNumber2){
        document.querySelector(".container").textContent="Player 1 wins";
    } else if (randomNumber1 < randomNumber2){
        document.querySelector(".container").textContent="Player 2 wins";
    } else{
        document.querySelector(".container").textContent="Draw";
    }
}
