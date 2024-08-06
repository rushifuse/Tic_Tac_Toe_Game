let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];

const resetgame=()=>
    {
     turn0=true;
     enableboxes();

    }




boxes.forEach((box)=>{
box.addEventListener("click",()=>
{
    console.log("box was clicked");
    box.innerText="X"

if(turn0)
{
box.innerText="O";
turn0=false;
}
else
{
box.innerText="X";
turn0=true;
}
box.disabled=true;

checkWineer();


});

}
);


const disabledBoxes=()=>
{
    for(let box of boxes)
    {
box.disabled=true;
    }}



    const enableboxes=()=>
        {
            for(let box of boxes)
            {
        box.disabled=false;
        box.innerText="";
        msgcont.classList.add("hide");
            }
        }





const showWinner=(winner)=>
{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledBoxes();
}

 const checkWineer=()=>
{
for(let pattern of winPattern)
{
let pos1val=boxes[pattern[0]].innerText;
let pos2val= boxes[pattern[1]].innerText;
let pos3val= boxes[pattern[2]].innerText;


if(pos1val !="" && pos2val !="" && pos3val !="")
{
if(pos1val===pos2val && pos2val===pos3val)
{
console.log("Winner",pos1val);
showWinner(pos1val);
}
}
}
};


newbtn.addEventListener("click",resetgame);

reset.addEventListener("click",resetgame);