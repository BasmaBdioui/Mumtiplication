const num1 = Math.ceil(Math.random()*10) ;
const num2 = Math.ceil(Math.random()*10) ;
let score = JSON.parse(localStorage.getItem("score"));

const question = document.getElementById("qst");
const formelm = document.getElementById("form");
const inputelm = document.getElementById("input");
const scoreelm = document.getElementById("score");

if(!score){
    score=0;
}

question.innerText = `What is ${num1} Multiply by ${num2}?`
scoreelm.innerText =`score : ${score}`

const correctAns = num1 * num2 ;

formelm.addEventListener("submit",()=>{
    const userAns = +inputelm.value
    if(userAns === correctAns){
        score++;
        LocalStorage()
    }
    else {
        score--;
        LocalStorage()
    }

//we creat this fnct to save the current value
function LocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

});


