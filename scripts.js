// //your code here
// let hoursHand = document.querySelector(".hour-hand")
// let minutesHand = document.querySelector(".min-hand")
// let secondsHand = document.querySelector(".second-hand")


// //for seconds


// function clock() {
//     const now = new Date();
//     console.log(now)
//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const minutes = now.getMinutes();
//     const minutesDegrees = ((minutes / 60) * 360) + 90 + ((seconds/60) * 6);
//     minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

//     const hours = now.getHours();
//     const hourDegrees = ((hours / 12) * 360) + 90+ ((minutes / 60) * 30)
//     hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
// }
   

// setInterval(clock, 1000)
// // clock()

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
 
 function setDate() {
  const now = new Date(); 
 
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360)+ 90 + ((seconds/60)*6) ;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
 
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360)+ 90 + ((mins/60)*30) ;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);