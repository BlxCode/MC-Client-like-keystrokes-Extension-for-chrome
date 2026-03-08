
var weatherInfo;
if (Date.now() - localStorage.getItem("weatherTimestamp") > 3600000){ // 1hour
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.198771&lon=-122.774095&appid=b0efe99d0ac427bda44eeb15743a9d3e&units=metric`)
    .then(response => response.json())
    .then(data => {
       var  weatherInfo = data;
        localStorage.setItem("weatherData", JSON.stringify(weatherInfo));
        localStorage.setItem("weatherTimestamp", Date.now().toString());
        var weatherInfo = JSON.parse(localStorage.getItem("weatherData"));
    })

} else {
   var  weatherInfo = JSON.parse(localStorage.getItem("weatherData"));
}
console.log(weatherInfo);

var colorRange = localStorage.getItem("colorRange") || 100;
// bg color random grad
document.body.style.background =
`linear-gradient(${Math.random() * 360}deg,
                 rgb(${Math.round(Math.random()*colorRange)}, ${Math.round(Math.random()*colorRange)}, ${Math.round(Math.random()*colorRange)}),
                 rgb(${Math.round(Math.random()*colorRange)}, ${Math.round(Math.random()*colorRange)}, ${Math.round(Math.random()*colorRange)})
) no-repeat`;
document.body.style.backgroundSize = "cover";
document.body.style.minHeight = "100vh";
document.body.style.overflow = "hidden";
 document.getElementById("colorRangeText").textContent = `Color Range: ${colorRange}`;
 document.getElementById("colorRange").value = colorRange;
//time

function updateTime() {
    const now = new Date();
    let hours24 = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hours12 = hours24 % 12 || 12; // Convert to 12-hour format
    let ampm = hours24 >= 12 ? 'PM' : 'AM';

    // Update the time elements
    document.getElementById("time24").textContent = `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("time12").textContent = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

document.getElementById("weatherTemp").innerHTML = `${Math.round(weatherInfo.main.temp)}°C         <span id="tempHigh">${Math.round(weatherInfo.main.temp_max)}°C</span><span id="tempLow">${Math.round(weatherInfo.main.temp_min)}°C</span>`;
document.getElementById("feelsTemp").innerHTML = `Feels like: ${Math.round(weatherInfo.main.feels_like)}°C`;


document.getElementById("extensionLogo").addEventListener("click", function() {document.getElementById("settings").hidden = !document.getElementById("settings").hidden;});
   
document.getElementById("colorRange").addEventListener("input", function() {
    localStorage.setItem("colorRange", this.value);
    let value = this.value;
    document.getElementById("colorRangeText").textContent = `Color Range: ${value}`;
    document.body.style.background =
    `linear-gradient(${Math.random() * 360}deg,
                     rgb(${value}, ${Math.round(Math.random()*value)}, ${Math.round(Math.random()*value)}),
                     rgb(${value}, ${Math.round(Math.random()*value)}, ${Math.round(Math.random()*value)})
    ) no-repeat`;
    document.body.style.backgroundSize = "cover";
});

document.getElementById("flexCheckChecked").addEventListener("changed",()=>{
if document

})