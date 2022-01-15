/* ID Consts */
const main = document.getElementById('main'); //Main Div
setTimeout(function() {
    main.style.opacity = '1';
}, 1200) //Sets Intros Opacity to 1 (visible)
const label = document.getElementById('forclicker'); //Label that displays your amount of clicks
const clicker = document.getElementById('clicker-btn'); //The Click Button
const divider = document.getElementById('divider'); //The HR Element
const upgrades_btn = document.getElementById('upgrade-btn'); //The Upgrade Button

/* What the italics element value shows for the stats */
const clicks_upgstats = document.getElementById('clicks-value');
const clickersstats = document.getElementById('clickers-value');
const grandmasstats = document.getElementById('grandmas-value');
const grandpasstats = document.getElementById('grandpas-value');
const dogsstats = document.getElementById("dogs-value");
const botsstats = document.getElementById("bots-value");

const upgrades = document.getElementById('upgrades'); //Upgrade UI

/* Cost Elements */
const clickscost = document.getElementById("clickscost");
const clickers_cost = document.getElementById("clickerscost");
const grandmas_cost = document.getElementById("grandmascost");
const grandpas_cost = document.getElementById("grandpascost");
const dogs_cost = document.getElementById("dogscost");
const bots_cost = document.getElementById("botscost");

/*Needed Variables*/
var clicks = 0; //Currency
var clicks_upg = 1; // Clicks Per Click
var clickers = 0; //CPS 1
var grandmas = 0; //CPS 3
var grandpas = 0; //CPS 5
var dogs = 0; //CPS 10
var bots = 0; //CPS 50

/* Upgrade Costs */
var clicks_upgcost = 100;
var clickerscost = 150;
var grandmascost = 450; //clickerscost * 3
var grandpascost = 750; //clickerscost * 5
var dogscost = 1500; //clickerscost * 10
var botscost = 7500; //clickerscost * 50

/* Functions */
//Clicks = clicks_upg + clicks;
function addClicks() {
        clicks+=clicks_upg;
    label.innerHTML = clicks;
}

/* Open & Close Upgrade UI */
//Open
function openUpgrades() {
    main.style.display = "none";
    main.style.visibility = "hidden";
    main.style.opacity = "0";
   upgrades.style.opacity = "0";
   upgrades.style.display = "block";
   upgrades.style.visibility = "visible";
   
   setTimeout(function() {
       upgrades.style.opacity = "1";
   }, 1500)
}

//Close
function closeUpgrades() {
    main.style.display = "block";
    main.style.visibility = "visible";
    main.style.opacity = "1";
   upgrades.style.opacity = "1";
   upgrades.style.display = "none";
   upgrades.style.visibility = "hidden";
   
   setTimeout(function() {
       main.style.opacity = "1";
   }, 1200)
}


/* Buying Functions */
//Clicks
function buyClicks() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let temp = clicks_upgcost * answer;
    if(clicks>=temp&&answer!=0) {
        clicks_upg+=answer;
        clicks_upgcost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0.");
        buyClicks();
    }

    else {
        alert("Insufficient Funds!");
    }
}

//Clickers
function buyClickers() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let temp = clickerscost * answer;
    if(clicks>=temp&&answer!=0) {
        clickers+=answer;
        clickerscost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0.");
        buyClickers();
    }

    else {
        alert("Insufficient Funds!");
    }
}

//Grandmas
function buyGrandmas() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let temp = grandmascost * answer;
    if(clicks>=temp&&answer!=0) {
        grandmas+=answer;
        grandmascost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0.");
        buyGrandmas();
    }

    else {
        alert("Insufficient Funds!");
    }
}

//Grandpas
function buyGrandpas() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let temp = grandmascost * answer;
    if(clicks>=temp&&answer!=0) {
        grandpas+=answer;
        grandpascost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0.");
        buyGrandpas();
    }

    else {
        alert("Insufficient Funds!");
    }
}

//Dogs
function buyDogs() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let temp = dogscost * answer;
    if(clicks>=temp&&answer!=0) {
        dogs+=answer;
        dogscost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0.");
        buyDogs();
    }

    else {
        alert("Insufficient Funds!");
    }
}

//Bots
function buyBots() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to to buy.");
    let temp = botscost * answer;
    if(clicks>=temp&&answer!=0) {
        bots+=answer;
        botscost*=random;
    }

    else if(answer==0) {
        alert("-_- \n You can't be put 0.");
        buyBots();
    }

    else {
        alert("Insufficient Funds!");
    }
}

/* Intervals */
//Money Per Second Intervalz
setInterval(function() {
    clicks+=clickers + (grandmas * 3) + (grandpas * 5) + (dogs * 10) + (bots * 50);
    label.innerHTML = clicks;
}, 1000);

//Update Stats
setInterval(function() {
    clicks_upgstats.innerHTML = clicks_upg;
    clickersstats.innerHTML = clickers;
    grandmasstats.innerHTML = grandmas;
    grandpasstats.innerHTML = grandpas;
    dogsstats.innerHTML = dogs;
}, 1150)

//Update Costs
setInterval(function() {
    clickscost.innerHTML = clicks_upgcost;
    clickers_cost.innerHTML = clickerscost;
    grandmas_cost.innerHTML = grandmascost;
    grandpas_cost.innerHTML = grandpascost;
    dogs_cost.innerHTML = dogscost;
}, 1300)
