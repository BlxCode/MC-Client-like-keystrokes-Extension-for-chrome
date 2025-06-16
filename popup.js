var cps = document.getElementById("cps");
var rmb = document.getElementById("rmb");
var w = document.getElementById("w");
var lmb = document.getElementById("lmb");
var a = document.getElementById("a");
var s = document.getElementById("s");
var d = document.getElementById("d");
var space = document.getElementById("space");
var shift = document.getElementById("shift");
var cpsNum = 0;
var secsPassed = 0;
var bgColorSelected = document.getElementById("Keystrokes-Selected-Background-Color").value;
var bgColor = document.getElementById("Keystrokes-Background-Color").value;
var Color = document.getElementById("Keystrokes-Color").value;
var ColorSelected = document.getElementById("Keystrokes-Selected-Color").value;
document.addEventListener("keydown", (event)=>{
if(event.key=="w"){
    w.style.backgroundColor = bgColorSelected;
} if(event.key=="a"){
    a.style.backgroundColor = bgColorSelected;
} if(event.key=="s"){
    s.style.backgroundColor = bgColorSelected;
} if(event.key=="d"){
    d.style.backgroundColor = bgColorSelected;
} if(event.key==" "){
    space.style.backgroundColor = bgColorSelected;
} if(event.key=="Shift"){
    shift.style.backgroundColor = bgColorSelected;
}
});
document.addEventListener("keyup", (event)=>{
if(event.key=="w"){
    w.style.backgroundColor = "#909090";
}
if(event.key=="a"){
    a.style.backgroundColor = "#909090";
}
if(event.key=="s"){
    s.style.backgroundColor = "#909090";
}
if(event.key=="d"){
    d.style.backgroundColor = "#909090";
}
if(event.key==" "){
    space.style.backgroundColor = "#909090";
}
if(event.key=="Shift"){
    shift.style.backgroundColor = "#909090";
}
});
document.addEventListener("click", ()=>{cpsNum++;});
document.addEventListener("mousedown", function(event) {
    cpsNum++;
    if (event.button === 0) { // Left mouse button
    
        
    } else if (event.button === 1) { // Middle mouse button
       
    } else if (event.button === 2) { // Right mouse button
      
    }
});
let clickTimestamps = [];

document.addEventListener("click", () => {
    clickTimestamps.push(Date.now());
});

setInterval(() => {
    const now = Date.now();
    clickTimestamps = clickTimestamps.filter(ts => now - ts <= 1000);
    const cpsNum = clickTimestamps.length;
    cps.innerText = "CPS: " + cpsNum;
}, 250);



