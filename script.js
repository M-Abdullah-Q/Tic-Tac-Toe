let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let message = document.querySelector("#message");
let title = document.querySelector("#title");
let heading = document.querySelector("#heading");

let xTurn = true;

const wPatterns = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(xTurn){
            box.style.color = '#FED8B1';
            box.innerHTML = "X";
            xTurn = false;
        }
        else{
            box.style.color = '#A67B5B';
            box.innerHTML = "O";
            xTurn = true;
        }
        box.disabled = true;

        let w = checkWinner();
        if (w) {
            setTimeout(() => {
                displayWinner(w);
            }, 500);
        }
    })
})

function checkWinner() {
    for (let pattern of wPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if(p1!=="" && p2!=="" && p3!==""){
            if(p1===p2 && p2===p3){
                console.log("winner");
                return p1;
            }
        }
    }
    return null;
}

function displayWinner(w){
    message.innerHTML = `Winner is ${w}`;
    message.hidden = false;
    newGame.hidden = false;
    title.hidden = true;
    resetbtn.hidden = true;
    heading.style.height = '110vmin';
    heading.style.flexDirection = 'column';
}

resetbtn.addEventListener("click", () => {
    resetGame();
});

newGame.addEventListener("click", () => {
    message.hidden = true;
    newGame.hidden = true;
    title.hidden = false;
    resetbtn.hidden = false;

    heading.style.height = '30vmin';
    heading.style.flexDirection = 'row';
    resetGame();
})

function resetGame(){
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    
    xTurn = true;
}
