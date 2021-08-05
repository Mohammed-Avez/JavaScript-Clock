

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const date = new Date()

    
    // const sec = date.getSeconds();
    // const secondDegrees = ((sec / 60) * 360) + 90;
    // secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    
    // const min = date.getMinutes();
    // const minuteDegrees = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
    // minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    
    // const hour = date.getHours();
    // const hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) +  90;
    // hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    const sec = date.getSeconds();
    const runSecPin = ( (sec / 60) * 360  ) + 90;
    secondHand.style.transform = `rotate(${runSecPin}deg)`;


    const min = date.getMinutes();
    const runPinMin = ( (min / 60) * 360 ) + (  (sec / 60)  * 6 )   + 90;
    minHand.style.transform = `rotate(${runPinMin}deg)`;


    const hour = date.getHours();
    const runPinHour = ( (hour / 12) * 360  ) + ( (min / 60) * 30 ) + 90;
    hourHand.style.transform = `rotate(${runPinHour}deg)`;

}

setInterval(setDate, 1000)