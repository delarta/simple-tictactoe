var isPlayer = true;
var playerTurn = [];
var enemyTurn = [];
var filledBox = [];
var playerPoints = 0;
var enemyPoints = 0;
var ids = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

window.onload = () => {
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");
  let reset = document.getElementById("reset");

  one.addEventListener("click", handleClick.bind(this, "one"));
  two.addEventListener("click", handleClick.bind(this, "two"));
  three.addEventListener("click", handleClick.bind(this, "three"));
  four.addEventListener("click", handleClick.bind(this, "four"));
  five.addEventListener("click", handleClick.bind(this, "five"));
  six.addEventListener("click", handleClick.bind(this, "six"));
  seven.addEventListener("click", handleClick.bind(this, "seven"));
  eight.addEventListener("click", handleClick.bind(this, "eight"));
  nine.addEventListener("click", handleClick.bind(this, "nine"));
  reset.addEventListener("click", handleReset);
};

const handleClick = id => {
  if (!filledBox.includes(id)) {
    if (isPlayer) {
      filledBox.push(id);
      playerTurn.push(id);
      changeTurn();
      document.getElementById(id).innerHTML = "<h1>X</h1>";
      setTimeout(() => checkWinner(playerTurn, "X"), 300);
    } else if (!isPlayer) {
      filledBox.push(id);
      enemyTurn.push(id);
      changeTurn();
      document.getElementById(id).innerHTML = "<h1>O</h1>";
      setTimeout(() => checkWinner(enemyTurn, "O"), 300);
    }
  }
};

const handlePoints = (turn) => {
  switch(turn){
    case "X":
      playerPoints++;
      return document.getElementById(turn).innerHTML = playerPoints;
      
    case "O":
    enemyPoints++;
      return document.getElementById(turn).innerHTML = enemyPoints;
      
  }
}

const changeTurn = () => {
  return (isPlayer = !isPlayer);
};

const handleReset = () => {
  isPlayer = true;
  playerTurn = [];
  enemyTurn = [];
  filledBox = [];
  ids.forEach(id => (document.getElementById(id).innerHTML = ""));
};

const checkWinner = (move, turn) => {
  // one, two, three
  if (move.includes("one") && move.includes("two") && move.includes("three")) {
    alert(`${turn} win the game`);
    handlePoints(turn);
  }
  // one, four, seven
  else if (
    move.includes("one") &&
    move.includes("four") &&
    move.includes("seven")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);  
  }
  // one, five, nine
  else if (
    move.includes("one") &&
    move.includes("five") &&
    move.includes("nine")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);    
  }
  // two, five, eight
  else if (
    move.includes("two") &&
    move.includes("five") &&
    move.includes("eight")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);

  }
  // three, five, seven
  else if (
    move.includes("three") &&
    move.includes("five") &&
    move.includes("seven")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);

  }
  // four, five, six
  else if (
    move.includes("four") &&
    move.includes("five") &&
    move.includes("six")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);

  }
  // seven, eight, nine
  else if (
    move.includes("seven") &&
    move.includes("eight") &&
    move.includes("nine")
  ) {
    alert(`${turn} win the game`);
    handlePoints(turn);

  } else if (filledBox.length === 9) {
    alert("it's a tie !");
  }
};
