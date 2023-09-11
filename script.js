const hour = document.getElementById('Hours');
const minut = document.getElementById('Minuts');
const second = document.getElementById('Seconds');

const start = document.getElementById('start');
const reset= document.getElementById('reset');
const stop =document.getElementById('stop');

const disp= document.getElementById('timer');

let interval = null;
let total = 0;
totalvalue = ()=>{
    total = Number(hour.value)*3600 + Number(minut.value)*60 +Number(second.value);
}

Timer = ()=>{
    totalvalue();
    total--;
    if(total >= 0){

        let hr = Math.floor(total/3600);
        let mint = Math.floor((total/60 ) - (hr*60));
        let sec = total -((hr*3600) + (mint*60));

        hour.value = hr;
        minut.value = mint;
        second.value = sec;
    }
    else{
        disp.innerText = "Time Over !!"
    }
}
start.addEventListener('click' ,()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000)
    disp.innerText ="Timer Started";
    start.innerHTML="START";
});

reset.addEventListener('click' ,()=>{
        clearInterval(interval);
        hour.value = 0;
        minut.value = 0;
        second.value = 0;
        disp.innerText="Countdown Timer";
        start.innerHTML="START";

});
stop.addEventListener('click' ,()=>{
    clearInterval(interval);
    interval = null;
    start.innerHTML="RESTART";
});