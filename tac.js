let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let nsg=document.querySelector("#nsg");
let nsgContainer=document.querySelector(".nsg-container");
let turn0= true;
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let moveCount=0;
const resetGame=() =>{
    turn0=true;
    moveCount=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    nsgContainer.classList.add("hidee");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turn0 ? "X" : "O";
        turn0 = !turn0;
        box.disabled = true;
        moveCount++;
        checkWinner();
        if(moveCount==9 && !checkWinner()){
            noWinner();
        }
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    nsgContainer.classList.add("hidee");
    disableBoxes();
}
const noWinner=()=>{
    nsg.innerText=`Game Tied! No Winner`;
    nsgContainer.classList.remove("hidee");
    msgContainer.classList.add("hide");
    disableBoxes(); 
}
const checkWinner = () => {
    for (let pattern of winPatterns)
    {
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
    
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1==pos2 &&pos2==pos3)
            {
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
    
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);