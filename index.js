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
