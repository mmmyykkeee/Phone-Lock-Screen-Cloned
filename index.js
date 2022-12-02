const time = document.querySelector('.time');
const day = document.querySelector('.date');
const today  = new Date();
const clock = today.getHours() + ':' + today.getMinutes();
const date = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()] +"  " +today.getDate()+'/' + (today.getMonth()+1);
time.textContent = clock;
day.textContent = date;


let container1 = document.querySelector("#one");
let text1 = document.querySelector("#one span");

if (container1.clientWidth < text1.clientWidth) {
  text1.classList.add("animate");
}

let screenState = document.querySelector('.screen').style.opacity = '0'
document.querySelector('.poweroff').style.display = 'none'
document.querySelector('.pattern').style.visibility = 'hidden';

function screenOn(){
  document.querySelector('.screen').style.opacity = '1';
  document.querySelector('.poweroff').style.display = 'block'
}

function screenOff(){
  document.querySelector('.screen').style.opacity = '0';
  document.querySelector('.poweron').style.display = 'block';
  document.querySelector('.poweroff').style.display = 'none';
}

function displayPattern(){
  document.querySelector('.pattern').style.visibility = 'visible';
  const unlock = document.querySelector('.unlock').textContent = 'Draw your Pattern';
  setTimeout(() => {
    document.querySelector('.screen').style.opacity = '0'
  }, "10000");
}
