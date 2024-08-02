
const game = document.getElementById("gameBox");
let gameBoard = document.querySelectorAll('.grid')
const col = 4;
const row = 4;
const grid = col * row
let score = 0
let allBox = []
let numArray = []

const displayGame = () => {
    game.innerHTML = ""
    for (let i = 0; i < col; i++) {
        let rowArr = []
        for (let j = 0; j < row; j++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            div.innerHTML = ``
            div.id = `${i}-${j}`
            div.setAttribute("test", "false");
            rowArr.push(`${i}-${j}`)
            game.appendChild(div)
        }
        allBox.push(rowArr)
    }
    numberGenrator(2)
}

const numberGenrator = (num) => {
    for (let i = 0; i < num; i++) {
        let x = Math.floor(Math.random() * col).toString()
        let y = Math.floor(Math.random() * row).toString()
        let id = `${x}-${y}`
        let boxes = document.getElementById(id)

        if (boxes.getAttribute("test") == "false") {
            numArray.push(id)
            document.getElementById(id).innerHTML = 2
            document.getElementById(id).setAttribute("test", "true");
        } else {
            i--
        }
        if (numArray.length == col * row) {
            document.addEventListener("keydown", function (e) {
                e.preventDefault()
            })
            setTimeout(() => {
                alert("game over")
            }, 0.500)
            return
        }
    }
}


document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) {
        moveLeft()
    }
    if (e.keyCode == 38) {
        moveUp()
    }
    if (e.keyCode == 39) {
        moveRight()
    }
    if (e.keyCode == 40) {
        moveDown()
    }
})

const moveLeft = () => {
    numberGenrator(1)
}
const moveRight = () => {
    numberGenrator(1)
}
const moveUp = () => {
    numberGenrator(1)
}


const moveDown = () => {
    numArray.forEach(element => {
        let splitId = element.split("-")
        let x = parseInt(splitId[0])
        let y = parseInt(splitId[1])
        console.log(`${x}-${y}`);

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let id = `${x}-${y}`
                let num = document.getElementById(id)
                // if (num.innerText != null) {
                //     // console.log(`${x + 1}-${y}`);
                //     // document.getElementById(`${x + 1}-${y}`).innerText = 2
                // }
            }
        }
    });

    numberGenrator(1)
}

const newGame = () => {
    document.getElementById("score").innerHTML = `0`
    numArray = []
    displayGame()
}

displayGame()
