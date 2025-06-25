
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
document.getElementById("apply").addEventListener("click", function() {
     bgColorSelected = document.getElementById("Keystrokes-Selected-Background-Color").value;
 bgColor = document.getElementById("Keystrokes-Background-Color").value;
 Color = document.getElementById("Keystrokes-Color").value;
 ColorSelected = document.getElementById("Keystrokes-Selected-Color").value;
    chrome.storage.local.set({bgColorSelected: bgColorSelected, bgColor: bgColor, Color: Color, ColorSelected: ColorSelected});
    w.style.backgroundColor = bgColor;
    a.style.backgroundColor = bgColor;
    s.style.backgroundColor = bgColor;
    d.style.backgroundColor = bgColor;
    space.style.backgroundColor = bgColor;
    shift.style.backgroundColor = bgColor;
    rmb.style.backgroundColor = bgColor;
    lmb.style.backgroundColor = bgColor;
    cps.style.backgroundColor = bgColor;
    cps.style.color = Color;
    w.style.color = Color;
    a.style.color = Color;
    s.style.color = Color;
    d.style.color = Color;
    space.style.color = Color;
    shift.style.color = Color;
    rmb.style.color = Color;
    lmb.style.color = Color;

});
chrome.storage.local.get(['bgColorSelected', 'bgColor', 'Color', 'ColorSelected'], function(result) {
    bgColorSelected = result.bgColorSelected || bgColorSelected;
    bgColor = result.bgColor || bgColor;
    Color = result.Color || Color;
    ColorSelected = result.ColorSelected || ColorSelected;
    w.style.backgroundColor = bgColor;
    a.style.backgroundColor = bgColor;
    s.style.backgroundColor = bgColor;
    d.style.backgroundColor = bgColor;
    space.style.backgroundColor = bgColor;
    shift.style.backgroundColor = bgColor;
    rmb.style.backgroundColor = bgColor;
    lmb.style.backgroundColor = bgColor;
    cps.style.backgroundColor = bgColor;
    cps.style.color = Color;
    w.style.color = Color;
    a.style.color = Color;
    s.style.color = Color;
    d.style.color = Color;
    space.style.color = Color;
    shift.style.color = Color;
    rmb.style.color = Color;
    lmb.style.color = Color;
    document.getElementById("Keystrokes-Selected-Background-Color").value = bgColorSelected;
    document.getElementById("Keystrokes-Background-Color").value = bgColor;
    document.getElementById("Keystrokes-Color").value = Color;
    document.getElementById("Keystrokes-Selected-Color").value = ColorSelected;
});
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
    w.style.backgroundColor = bgColor;
}
if(event.key=="a"){
    a.style.backgroundColor = bgColor;
}
if(event.key=="s"){
    s.style.backgroundColor = bgColor;
}
if(event.key=="d"){
    d.style.backgroundColor = bgColor;
}
if(event.key==" "){
    space.style.backgroundColor = bgColor;
}
if(event.key=="Shift"){
    shift.style.backgroundColor = bgColor;
}
});
document.addEventListener("click", ()=>{cpsNum++;});
document.addEventListener("mousedown", function(event) {
    cpsNum++;
    if (event.button === 0) { // Left mouse button
    lmb.style.backgroundColor = bgColorSelected;

    } else if (event.button === 2) { // Right mouse button
      rmb.style.backgroundColor = bgColorSelected;
    }
});
document.addEventListener("mouseup", function(event) {
    cpsNum++;
    if (event.button === 0) { // Left mouse button
    lmb.style.backgroundColor = bgColor;

    } else if (event.button === 2) { // Right mouse button
      rmb.style.backgroundColor = bgColor;
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



document.getElementById("Keystrokes-Size").addEventListener("change", function() {
    document.getElementById("Keystrokes-Size-Text").innerText = "Keystrokes Size: "+this``.value;
  
    document.querySelectorAll(".Keystroke-CrExt").forEach(function(element) {
        element.style.fontSize = this.value + "px";
    });
});

