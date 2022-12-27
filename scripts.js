//your code here
let hoursHand = document.querySelector(".hour-hand")
let minutesHand = document.querySelector(".min-hand")
let secondsHand = document.querySelector(".second-hand")


//for seconds


function clock() {
    const now = new Date();
    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}
   

setInterval(clock, 1000)
clock()