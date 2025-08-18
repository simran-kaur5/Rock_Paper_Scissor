let userScore = 0;
let compScore = 0;
let userWin = true;
let msg = document.querySelector(".play")
let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let ret = document.querySelector(".re");


const showWinner = (userWin) =>{
    if(userWin){
        userScore++
        user.innerText = userScore;
        msg.innerText = "You won";
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = "You Lost";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (choiceUser) =>{
    const compChoice = comChoice();
    console.log(compChoice , choiceUser);
    if(compChoice === choiceUser){
        msg.innerText  ="Match got drawn!!" ;
        msg.style.backgroundColor = "#081b31";
    }else{
        if(choiceUser === "rock"){
            userWin = (compChoice === "scissor" ? true :false);
         }else if(choiceUser === "scissor"){
            userWin = (compChoice === "rock" ? false : true);
         }else{
           userWin = (compChoice === "scissor" ? false:true);
         }
         showWinner(userWin);
    }
    

}

ret.addEventListener("click", ()=>{
    msg.innerText = "Play Your move";
    msg.style.backgroundColor = "#081b31";
    comp.innerText = "0";
    user.innerText = "0";
    userScore = 0;
    compScore = 0;
}) 

const comChoice=() =>{

    let game = ["rock" , "paper" , "scissor"];
    const ran = Math.floor(Math.random()*3);
    return game[ran];
}
choices.forEach((choice) => {
    const choiceUser = choice.getAttribute("id");
    choice.addEventListener("click",() =>{
       playGame(choiceUser)
    })
});