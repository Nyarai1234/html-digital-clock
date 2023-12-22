const hourEl = document.getElementById
("hour");
const minuteEl = document.
getElementById("minutes");
const secondEl = document.
getElementById("seconds");
const ampmEl = Document.getElementByIds
("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h > 12){
        h = h - 12;
        ampm = "PM";s
    }
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{

    }, 1000)
}
updateClock();
updateClock();