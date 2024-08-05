const game = document.getElementById("gameBox");

let gameBoard = [];
const col = 4;
const row = 4;
let score = 0;
let allBox = [];
let numArray = [];
let a = 0;

// display game board
const displayGame = () => {
  game.innerHTML = "";
  allBox = [];
  for (let i = 0; i < col; i++) {
    let rowArr = [];
    for (let j = 0; j < row; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      div.id = `${i}-${j}`;
      div.setAttribute("test", "false");
      rowArr.push(div);
      game.appendChild(div);
    }
    allBox.push(rowArr);
  }
  numberGenerator(2);
};

// generate new number
const numberGenerator = (num) => {
  try {
    let setNum = 2;

    if (score > 200) {
      let setTarget = Math.ceil(Math.random() * 2);
      if (setTarget <= 1) {
        setNum = 2;
      } else {
        setNum = 4;
      }
    }

    for (let i = 0; i < num; i++) {
      let x = Math.floor(Math.random() * col).toString();
      let y = Math.floor(Math.random() * row).toString();
      let id = `${x}-${y}`;
      let box = document.getElementById(id);

      if (box.getAttribute("test") == "false") {
        numArray.push(id);
        box.innerHTML = setNum;
        box.setAttribute("test", "true");
      } else {
        i--;
      }
    }
  } catch (err) {
    console.log(err);
    gameOver();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
    moveLeft();
  }
  if (e.keyCode == 38) {
    moveUp();
  }
  if (e.keyCode == 39) {
    moveRight();
  }
  if (e.keyCode == 40) {
    moveDown();
  }
});

const moveLeft = () => {
  for (let i = 0; i < row; i++) {
    let currentPosition = [];
    for (let j = 0; j < col; j++) {
      let id = `${i}-${j}`;
      let value = document.getElementById(id).innerText;
      if (value !== "") {
        currentPosition.push(parseInt(value));
        document.getElementById(id).innerText = "";
        document.getElementById(id).setAttribute("test", "false");
      }
    }

    let mergePosition = [];
    while (currentPosition.length > 0) {
      let value = currentPosition.shift();
      if (currentPosition.length > 0 && currentPosition[0] === value) {
        mergePosition.push(value * 2);
        score += value * 2;
        currentPosition.shift();
      } else {
        mergePosition.push(value);
      }
    }

    for (j = 0; j < col; j++) {
      let id = `${i}-${j}`;
      let value = mergePosition.shift();
      if (value !== undefined) {
        document.getElementById(id).innerText = value;
        document.getElementById(id).setAttribute("test", "true");
      }
    }
  }

  document.getElementById("score").innerText = `${score}`;
  numberGenerator(1);
  gameOver();
};

const moveRight = () => {
  for (let i = 0; i < row; i++) {
    let currentPosition = [];
    for (let j = col - 1; j >= 0; j--) {
      let id = `${i}-${j}`;
      let value = document.getElementById(id).innerText;
      if (value !== "") {
        currentPosition.push(parseInt(value));
        document.getElementById(id).innerText = "";
        document.getElementById(id).setAttribute("test", "false");
      }
    }

    let mergePosition = [];
    while (currentPosition.length > 0) {
      let value = currentPosition.shift();
      if (currentPosition.length > 0 && currentPosition[0] == value) {
        mergePosition.push(value * 2);
        score += value * 2;
        currentPosition.shift();
      } else {
        mergePosition.push(value);
      }
    }

    for (let j = col - 1; j >= 0; j--) {
      let id = `${i}-${j}`;
      let value = mergePosition.shift();
      if (value !== undefined) {
        document.getElementById(id).innerText = value;
        document.getElementById(id).setAttribute("test", "true");
      }
    }
  }

  document.getElementById("score").innerText = `${score}`;
  numberGenerator(1);
  gameOver();
};

const moveUp = () => {
  for (let j = 0; j < col; j++) {
    let currentPosition = [];
    for (let i = 0; i < row; i++) {
      let id = `${i}-${j}`;
      let value = document.getElementById(id).innerText;
      if (value !== "") {
        currentPosition.push(parseInt(value));
        document.getElementById(id).innerText = "";
        document.getElementById(id).setAttribute("test", "false");
      }
    }

    let mergePosition = [];
    while (currentPosition.length > 0) {
      let value = currentPosition.shift();
      if (currentPosition.length > 0 && currentPosition[0] === value) {
        mergePosition.push(value * 2);
        score += value * 2;
        currentPosition.shift();
      } else {
        mergePosition.push(value);
      }
    }

    for (let i = 0; i < row; i++) {
      let id = `${i}-${j}`;
      let value = mergePosition.shift();
      if (value !== undefined) {
        document.getElementById(id).innerText = value;
        document.getElementById(id).setAttribute("test", "true");
      }
    }
  }
  document.getElementById("score").innerText = `${score}`;
  numberGenerator(1);
  gameOver();
};

const moveDown = () => {
  for (let j = 0; j < col; j++) {
    let currentPosition = [];
    for (let i = row - 1; i >= 0; i--) {
      let id = `${i}-${j}`;
      let value = document.getElementById(id).innerText;
      if (value !== "") {
        currentPosition.push(parseInt(value));
        document.getElementById(id).innerText = "";
        document.getElementById(id).setAttribute("test", "false");
      }
    }

    let mergePosition = [];
    while (currentPosition.length > 0) {
      let value = currentPosition.shift();
      if (currentPosition.length > 0 && currentPosition[0] === value) {
        mergePosition.push(value * 2);
        score += value * 2;
        currentPosition.shift();
      } else {
        mergePosition.push(value);
      }
    }

    for (let i = row - 1; i >= 0; i--) {
      let id = `${i}-${j}`;
      let value = mergePosition.shift();
      if (value !== undefined) {
        document.getElementById(id).innerText = value;
        document.getElementById(id).setAttribute("test", "true");
      }
    }
  }
  document.getElementById("score").innerText = `${score}`;
  numberGenerator(1);
  gameOver();
};

const newGame = () => {
  document.getElementById("score").innerText = `0`;
  score = 0;
  numArray = [];
  displayGame();
};

const gameOver = () => {
//   let empty = true
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       let id = `${i}-${j}`;
//       let value = parseInt(document.getElementById(id).innerText)

//       if (value === 2048) {
//         alert("You Win");
//         newGame();
//       }

//       if(j < col - 1){
//         let down = parseInt(document.getElementById(id).innerText)
//         down == value
//         empty = false;
//       }

//       if(i < row -1 ){
//         let left =  parseInt(document.getElementById(id).innerText)
//         left == value
//         empty = false
//       }
//     }
//   }

// if(empty == true){
//   alert("game  over");
// }

  let count = 0;
  let box = document.querySelectorAll(".grid");
  box.forEach((element) => {
    if (element.getAttribute("test") != "false") {
      count++;
    }
  });

  if (count === 16) {
    setTimeout(() => {
      alert("game  over");
      newGame();
    }, 1000);
  }
};

displayGame();
