
var cpsNum = 0;
var secsPassed = 0;
var bgColorSelected;
var bgColor;
var Color;
var ColorSelected;
var size;
console.log(chrome.storage.local.get(["size"]));
chrome.storage.local.get(
  ["bgColorSelected", "bgColor", "Color", "ColorSelected","size"],
  function (result) {
    bgColorSelected = result.bgColorSelected || bgColorSelected;
    console.log(bgColorSelected + " BGCOLORSOLECTED");
    bgColor = result.bgColor || bgColor;
    console.log(bgColor + " BG COLOR");
    console.log(Color + "COLOR");

    Color = result.Color || Color;
size = result.size || 1;
console.log(size + " SIZE");
    ColorSelected = result.ColorSelected || ColorSelected;
    if (bgColorSelected == undefined && bgColor == undefined) {
      bgColorSelected = "#ffffff";
      bgColor = "#909090";
      Color = "#000000";
      ColorSelected = "#000000";
      size = 1;
      chrome.storage.local.set({
        bgColorSelected: bgColorSelected,
        bgColor: bgColor,
        Color: Color,
        ColorSelected: ColorSelected,
        size:size
      });
    }
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
  }
);
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
// Load Settings
function makeSpace(wat) {
  KeystrokeWrapper.appendChild(wat);
}
var KeystrokeWrapper = document.createElement(
  "blxms-keystroke-web-module-cr-ext"
);
KeystrokeWrapper.id = "KeystrokeWrapper-CrExt";
document.body.appendChild(KeystrokeWrapper);
var LMB = document.createElement("div");
size = chrome.storage.local.get(["size"]).size || 1;
function makeStroke(variable, text) {
  variable.innerText = text;
  variable.className = "Keystroke-CrExt";
  KeystrokeWrapper.appendChild(variable);
  console.log(size + " SIZE IN MAKE STROKE");
  if(size != 1||size != undefined){
    
   
    variable.style.width=3*size+"em".toString();
   
    variable.style.height=3*size+"em".toString();
    variable.style.fontSize=2.5*size+"em".toString();
  }
}
var cps = document.createElement("div");
makeStroke(cps, "CPS: 0");
cps.style.width = "9.2em";
var br1 = document.createElement("br");
makeSpace(br1);
var lmb = document.createElement("div");
makeStroke(lmb, "LMB");
var w = document.createElement("div");
makeStroke(w, "W");
var rmb = document.createElement("div");
makeStroke(rmb, "RMB");
var br2 = document.createElement("br");
makeSpace(br2);
var a = document.createElement("div");
makeStroke(a, "A");
var s = document.createElement("div");
makeStroke(s, "S");
var d = document.createElement("div");
makeStroke(d, "D");
var br3 = document.createElement("br");
makeSpace(br3);
var space = document.createElement("div");
makeStroke(space, "Space");
var shift = document.createElement("div");
makeStroke(shift, "Shift");



document.addEventListener("keydown", (event) => {
  if (event.key == "w") {
    w.style.backgroundColor = bgColorSelected;
  }
  if (event.key == "a") {
    a.style.backgroundColor = bgColorSelected;
  }
  if (event.key == "s") {
    s.style.backgroundColor = bgColorSelected;
  }
  if (event.key == "d") {
    d.style.backgroundColor = bgColorSelected;
  }
  if (event.key == " ") {
    space.style.backgroundColor = bgColorSelected;
  }
  if (event.key == "Shift") {
    shift.style.backgroundColor = bgColorSelected;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == "w") {
    w.style.backgroundColor = bgColor;
  }
  if (event.key == "a") {
    a.style.backgroundColor = bgColor;
  }
  if (event.key == "s") {
    s.style.backgroundColor = bgColor;
  }
  if (event.key == "d") {
    d.style.backgroundColor = bgColor;
  }
  if (event.key == " ") {
    space.style.backgroundColor = bgColor;
  }
  if (event.key == "Shift") {
    shift.style.backgroundColor = bgColor;
  }
});
document.addEventListener("click", () => {
  cpsNum++;
});
document.addEventListener("mousedown", function (event) {
  cpsNum++;
  if (event.button === 0) {
    // Left mouse button
    lmb.style.backgroundColor = bgColorSelected;
  } else if (event.button === 2) {
    // Right mouse button
    rmb.style.backgroundColor = bgColorSelected;
  }
});
document.addEventListener("mouseup", function (event) {
  cpsNum++;
  if (event.button === 0) {
    // Left mouse button
    lmb.style.backgroundColor = bgColor;
  } else if (event.button === 2) {
    // Right mouse button
    rmb.style.backgroundColor = bgColor;
  }
});
let clickTimestamps = [];

document.addEventListener("click", () => {
  clickTimestamps.push(Date.now());
  const now = Date.now();
  clickTimestamps = clickTimestamps.filter((ts) => now - ts <= 1000);
  const cpsNum = clickTimestamps.length;
  cps.innerText = "CPS: " + cpsNum;
});

setInterval(() => {
  const now = Date.now();
  clickTimestamps = clickTimestamps.filter((ts) => now - ts <= 1000);
  const cpsNum = clickTimestamps.length;
  cps.innerText = "CPS: " + cpsNum;
}, 500);
