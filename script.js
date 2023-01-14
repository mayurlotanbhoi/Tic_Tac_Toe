console.log("connected");

const click = new Audio("click.wav");
const gameover = new Audio("gameover.wav");

let box = document.getElementsByClassName("box");
let won = document.getElementsByClassName("won");
console.log(won);
won[0].innerText = `GAME WON 0`;
won[0].style.color = "green";

// console.log(box);

let isGameOver = false;

let turn = "";
let count = 0;
function changeTurn() {
  // if (count == 9) {
  //   gameover.play();

  //   isGameOver = true;
  //   count = 0;
  //   document.getElementsByClassName("ele") = "game Tie X  0"
  // }
  return turn === "X" ? "0" : "X";
}

function reset() {
  let text = document.getElementsByClassName("ele");

  for (let i = 0; i < text.length; i++) {
    text[i].innerText = "";
    text[i].classList = "ele";
    isGameOver = false;
    won[0].style.color = "green";
  }
}

// confetti code
const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  Stop

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

function chackGameOver() {
  let winnigPossible = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winnigPossible.forEach((e) => {
    let text = document.getElementsByClassName("ele");

    //     console.log(text);
    //     won.innerHTML = "GAME OVER";
    if (
      text[e[0]].innerText === text[e[1]].innerText &&
      text[e[1]].innerText === text[e[2]].innerText &&
      text[e[0]].innerText !== ""
    ) {
      won[0].innerText = `GAME WON ${turn}`;
      won[0].style.color = "red";
      gameover.play();
      start();
      stop();
      isGameOver = true;
      count = 0;
      console.log("game over");
    }
  });
}

Array.from(box).forEach((element, ind) => {
  let text = document.getElementsByClassName("ele");
  element.addEventListener("click", (e) => {
    if (text[ind].innerHTML == "" && !isGameOver) {
      won[0].innerText = `TURN FOR ${turn}`;
      turn = changeTurn();
      click.play();

      text[ind].innerHTML = turn;
      if (turn === "X") {
        text[ind].classList.add("xturn");
      } else {
        text[ind].classList.add("oturn");
      }

      chackGameOver();

      //       console.log(text);
    }
  });
});
