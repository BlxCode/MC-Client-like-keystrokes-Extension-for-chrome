const blockedWebsites = ["girlswithmuscle.com","pornhub.com"];
const hostname = location.hostname;

const isBlocked = blockedWebsites.some(site =>
hostname.includes(site)
);

if (isBlocked) {
    location.href = chrome.runtime.getURL("index.html");
}

if (hostname.includes("youtube.com") && location.pathname.includes("/shorts/")) {
    location.href = "https://www.youtube.com/watch?v="+location.pathname.split("/shorts/")[1];
}
setInterval(() => {
const hostname = location.hostname;

const isBlocked = blockedWebsites.some(site =>
hostname.includes(site)
);

if (isBlocked) {
    location.href = chrome.runtime.getURL("index.html");
}

if (hostname.includes("youtube.com") && location.pathname.includes("/shorts/")) {
    location.href = "https://www.youtube.com/watch?v="+location.pathname.split("/shorts/")[1];
}}, 2500);