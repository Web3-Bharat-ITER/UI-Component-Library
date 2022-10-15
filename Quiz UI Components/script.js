const Quiz=[

    {
        question:"1:Which  is the Capital of India?",
        a:"Delhi",
        b:"Patna",
        c:"Kolkata",
        d:"Mumbai",
        ans:"opt1",
        
        
    },
    {
        question:"2: Who is Virat Kohli? ",
        a:"cricketer",
        b:"Footbollar",
        c:"Hockey Player",
        d:"Golf Player",
        ans:"opt1"

    },
    {
        question:"3: Which is the Capital of Bihar? ",
        a:"Gaya",
        b:"Patna",
        c:"Agra",
        d:"Ranchi",
        ans:"opt2"

    },
    {
        question:"4: How many States in India? ",
        a:"28",
        b:"29",
        c:"14",
        d:"26",
        ans:"opt2"

    },



];

const Question=document.querySelector('.question');
const Option1=document.querySelector('#option1');
const Option2=document.querySelector('#option2');
const Option3=document.querySelector('#option3');
const Option4=document.querySelector('#option4');
const Submit=document.querySelector('#Submit');
const Answers=document.querySelectorAll('.ans');
const Score=document.querySelector('#ScoreShow');

let QuestionCount=0;
let score=0;
const LoadQuestion= () =>{
const QuestionList=Quiz[QuestionCount];
    Question.innerHTML=QuestionList.question;
    Option1.innerText=QuestionList.a;
    Option2.innerText=QuestionList.b;
    Option3.innerText=QuestionList.c;
    Option4.innerText=QuestionList.d;
}

LoadQuestion();

const getCheckAnswer = () => {
let answer;

Answers.forEach((x) => {
    if(x.checked){
        answer=x.id;

    }
});

return answer;
};

const Delete= () =>{
    Answers.forEach((x) => x.checked=false);
}

Submit.addEventListener('click', () =>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===Quiz[QuestionCount].ans){
        score++;
    }
    QuestionCount++;
    Delete();
    if(QuestionCount<Quiz.length){
        LoadQuestion();

    }
    else{
        Score.innerHTML=`
        <h3 Style="Font-size:20px; text-align:center; font-weight:bold;">Your Score ${score}/${Quiz.length} 😍</h3>
        <button class="btn" onclick='location.reload()'>Play Again</button>
        ` 
        Score.classList.remove("score");
    }
});

