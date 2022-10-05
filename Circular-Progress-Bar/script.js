const circle = document.querySelector(".circle");
const progValue = document.querySelector("#value");

let progStart = 0;
let progEnd = 100;
let speed = 50;

let progress = setInterval(()=>{
    progStart++;
    progValue.innerHTML=progStart + '%';

    circle.style.background = `conic-gradient(rgba(17, 255,8)
    ${progStart*3.6}deg, rgb(0,0,0,0.1) 0deg)`;
    if(progStart==progEnd)
    {
        clearInterval(progress);
    }
}, speed);

