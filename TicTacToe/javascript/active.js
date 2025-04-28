const typical = (function() {
    let names = document.querySelector(".names");
    let player1wins = document.querySelector(".player1wins");
    let player2wins = document.querySelector(".player2wins");
    let player1 = document.querySelector(".player1");
    let player2 = document.querySelector(".player2");
    let scplayer1name = document.querySelector(".scplayer1");
    let scplayer2name = document.querySelector(".scplayer2");
    let divs = document.querySelectorAll(".cell");
    let move = 0;

    function entertheMark() {
        divs.forEach((div) => {
            div.addEventListener("click", () => {
                if(!div.textContent) {
                    if (move % 2 === 0) {
                        div.textContent = "x";
                        move++;
                    }
                    else if (move % 2 !== 0) {
                        div.textContent = "o";
                        move++;
                    }
                    let game = [
                        [divs[0].textContent, divs[1].textContent, divs[2].textContent],
                        [divs[3].textContent, divs[4].textContent, divs[5].textContent],
                        [divs[6].textContent, divs[7].textContent, divs[8].textContent]
                    ];
                    if(move >= 3) {
                        if (( game[0][0] === "x" &&  game[0][1] === "x" &&  game[0][2] === "x")
                            || ( game[0][0] === "x" &&  game[1][0] === "x" &&  game[2][0] === "x")
                            || ( game[0][0] === "x" &&  game[1][1] === "x" &&  game[2][2] === "x")
                            || ( game[0][1] === "x" &&  game[1][1] === "x" &&  game[2][1] === "x")
                            || ( game[0][2] === "x" &&  game[1][2] === "x" &&  game[2][2] === "x")
                            || ( game[0][2] === "x" &&  game[1][1] === "x" &&  game[2][0] === "x")
                            || ( game[1][0] === "x" &&  game[1][1] === "x" &&  game[1][2] === "x")
                            || ( game[2][0] === "x" &&  game[2][1] === "x" &&  game[2][2] === "x")) {
                            player1wins.textContent++;
                            move = 0;
                        }
                        
                        else if (( game[0][0] === "o" &&  game[0][1] === "o" &&  game[0][2] === "o")
                            || ( game[0][0] === "o" &&  game[1][0] === "o" &&  game[2][0] === "o")
                            || ( game[0][0] === "o" &&  game[1][1] === "o" &&  game[2][2] === "o")
                            || ( game[0][1] === "o" &&  game[1][1] === "o" &&  game[2][1] === "o")
                            || ( game[0][2] === "o" &&  game[1][2] === "o" &&  game[2][2] === "o")
                            || ( game[0][2] === "o" &&  game[1][1] === "o" &&  game[2][0] === "o")
                            || ( game[1][0] === "o" &&  game[1][1] === "o" &&  game[1][2] === "o")
                            || ( game[2][0] === "o" &&  game[2][1] === "o" &&  game[2][2] === "o")) {
                            player2wins.textContent++;
                            move = 0;
                        }
                
                        else {
                            return "";
                        }
                    }

                }
            });
        });
    }

    function newgame() {
        divs.forEach((div) => {
            div.textContent = "";
        });
        move = 0;
    }

    function resetgame() {
        divs.forEach((div) => {
            div.textContent = "";
        });

        if(names.style.display === "none" || names.style.display === "") {
            names.style.display = "block";
        }

        move = 0;
        
        scplayer1name.textContent = "Player 1";
        scplayer2name.textContent = "player2";
        player1wins.textContent = 0;
        player2wins.textContent = 0;
    }

    function startgame() {
        if(names.style.display === "block" || names.style.display === "") {
            names.style.display = "none";
        }
        scplayer1name.textContent = player1.value;
        scplayer2name.textContent = player2.value;
        player1.value = "";
        player2.value = "";
    }

    function newgame() {
        divs.forEach((div) => {
            div.textContent = "";
        });
        move = 0;
        player1.value = "";
        player2.value = "";
    }

    return {
        entertheMark: entertheMark,
        startgame: startgame,
        newgame: newgame,
        resetgame: resetgame,
    }
})();

let entertheMark = typical.entertheMark;
let startgame = typical.startgame;
let newgame = typical.newgame;
let resetgame = typical.resetgame;


