let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".img");
let msg=document.querySelector("#msg");
const playGame=(userChoice)=>{
    console.log("User clicked, ", userChoice);
};

let usSc=document.querySelector("#user-score");
let cmSc=document.querySelector("#comp-score");
//sc val update here
const scoreUpdate=(count)=>{
    if(count){
        userScore++;
        usSc.innerText=userScore;

    }else{
        compScore++;
        cmSc.innerText=compScore;
    }

}


const result=(output,mine,pc)=>{
    if(output){
        msg.innerText=`You won, Your ${mine} beats ${pc}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText=`You Lost, System ${pc} beats ${mine}`;
        msg.style.backgroundColor = "Red";
    }

};


const compGame=(userChoice)=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random() * 3);
    let compChoice=options[idx];
    console.log("Comp sel: ",compChoice);
    if(compChoice===userChoice){
        //draw
        msg.innerText="Drawn,Try Again";
        msg.style.backgroundColor = "brown";
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            //paper sci
            userwin= (compChoice==="paper") ? false : true;
        } else if(userChoice=="paper"){
            //rock scc
            userwin= (compChoice==="rock") ? true : false;
        }else{
            //rock //paper
            userwin= (compChoice==="paper") ? true : false;
        }
        result(userwin,userChoice,compChoice);
        scoreUpdate(userwin);
    }
    
}


choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let sel=choice.getAttribute("id");
        console.log("user selected, ",sel);
        compGame(sel);
    })
})




