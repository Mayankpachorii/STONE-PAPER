let usersc=0;
let compscor=0;

const choices = document.querySelectorAll(".choice");
const box = document.querySelector("#move");
const gencomputerchoice=()=>{
    let cho = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return cho[idx];
}

const drawgame =()=>{
    console.log("game was draw");
    box.innerText="GAME WAS DRAW. PLAY AGAIN.";
    box.style.backgroundColor="#081b31";
}

const show=(userwin,userchoice,comp)=>{
if(userwin){
    console.log("you win!");
    box.innerText=`YOU WIN! ${userchoice} beats ${comp}`;
    box.style.backgroundColor="green";
    let u = document.querySelector("#us");
    let uu =++usersc;
    u.innerText=uu;
}
else{
    console.log("you loose");
    box.innerText=`YOU LOOSE ${comp} beats ${userchoice}.`; 
    box.style.backgroundColor="red";
    let s = document.querySelector("#cs");
    let ss=++compscor;
    s.innerText=ss;
}
}

const playgame = (userchoice)=>{
    console.log("user choice = ",userchoice)
    //generate computer choice.
    const comp = gencomputerchoice();
    console.log("computer choice = ",comp)

    if(userchoice==comp){
     drawgame();
    }
    else {
        let userwin=true;
        if(userchoice==="rock"){
            userwin = comp==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin = comp==="scissors"?false:true;
        }else{
            userwin = comp==="rock"?false:true;
        }
        show(userwin,userchoice,comp);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    })
})