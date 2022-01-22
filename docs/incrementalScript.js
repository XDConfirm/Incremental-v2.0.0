var user = String(prompt("Enter a username for this game \n Disclaimer: Any username that is put, is not saved. Data is NOT saved."));
console.info("Username is " + user);

/* ID Consts */
const main = document.getElementById('main'); //Main Div
setTimeout(function() {
    main.style.opacity = '1';
}, 1200) //Sets Intros Opacity to 1 (visible)
const label = document.getElementById('forclicker'); //Label that displays your amount of clicks
const clicker = document.getElementById('clicker-btn'); //The Click Button
const upgrades_btn = document.getElementById('upgrade-btn'); //The Upgrade Button

const upgrades = document.getElementById('upgrades'); //Upgrade UI

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

/* Upgrade Variables */
//Upgrades
var clicks = 0; //Currency
var clicks_upg = 1; // Clicks Per Click
var clickers = 0; //CPS 1
var grandmas = 0; //CPS 3
var grandpas = 0; //CPS 5
var dogs = 0; //CPS 10
var bots = 0; //CPS 50

//Upgrade Costs
var clicks_upgcost = 100;
var clickerscost = 150;
var grandmascost = 450; //clickerscost * 3
var grandpascost = 750; //clickerscost * 5
var dogscost = 1500; //clickerscost * 10
var botscost = 7500; //clickerscost * 50


/* Buying Functions */
//Clicks
function buyClicks() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let answer0 = Number(answer);
    let temp = clicks_upgcost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        clicks_upg+=answer0;
        clicks-=clicks_upgcost;
        clicks_upgcost*=random;
        console.info(user + " bought Clicks Upgrade. \n Clicks: " + clicks_upg);
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.");
        buyClicks();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Clicks.")
    }

    else {
        alert("Insufficient Clicks!");
        console.error(user + " has insufficient amount of clicks.");
    }
}

//Clickers
function buyClickers() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let answer0 = Number(answer);
    let temp = clickerscost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        clickers+=answer0;
        clicks-=clickerscost;
        clickerscost*=random;
        console.info(user + " bought Clickers Upgrade. \n Clickers: " + clickers);
    }

    else if(answer0==0) {
        alert("-_- \n You can't put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.");
        buyClickers();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Clickers.");
    }

    else {
        alert("Insufficient Clicks!");
        console.error(user + " has insufficient amount of clicks.");
    }
}

//Grandmas
function buyGrandmas() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let answer0 = Number(answer);
    let temp = grandmascost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        grandmas+=answer0;
        clicks-=grandmascost;
        grandmascost*=random;
        console.log(user + " bought Grandmas Upgrade. \n Grandmas: " + grandmas);
    }

    else if(answer0==0) {
        alert("-_- \n You can't put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.");
        buyGrandmas();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Grandmas.");
    }

    else {
        alert("Insufficient Clicks!");
        console.error(user + " has insufficient amount of clicks.")
    }
}

//Grandpas
function buyGrandpas() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let answer0 = Number(answer);
    let temp = grandmascost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        grandpas+=answer0;
        clicks-=grandpascost;
        grandpascost*=random;
        console.log(user + " bought Grandpas Upgrade. \n Grandpas: " + grandpas);
    }

    else if(answer0==0) {
        alert("-_- \n You can't put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.")
        buyGrandpas();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Grandpas.")
    }

    else {
        alert("Insufficient Funds!");
        console.error(user + " has insufficient amount of clicks");
    }
}

//Dogs
function buyDogs() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to buy.");
    let answer0 = Number(answer);
    let temp = dogscost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        dogs+=answer0;
        clicks-=dogscost;
        dogscost*=random;
        console.log(user + " has bought Dogs Upgrade. \n Dogs: " + dogs);
    }

    else if(answer==0) {
        alert("-_- \n You can't put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.")
        buyDogs();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Dogs.")
    }

    else {
        alert("Insufficient Funds!");
        console.error(user + " has insufficient amount of clicks.")
    }
}

//Bots
function buyBots() {
    let random = Math.round(Math.random() * 3) + 1;
    let answer = prompt("Enter the amount you want to to buy.");
    let answer0 = Number(answer);
    let temp = botscost * answer0;
    if(clicks>=temp&&answer0!=0&&answer!=null) {
        bots+=answer0;
        clicks-=botscost;
        botscost*=random;
        console.log(user + " bought Bots Upgrade. Bots: " + bots);
    }

    else if(answer==0) {
        alert("-_- \n You can't be put 0 or nothing.");
        console.warn(user + " put 0 / null for Upgrade.")
        buyBots();
    }

    else if(answer==null) {
        console.log(user + " cancelled Upgrade Purchase of Bots.")
    }

    else {
        alert("Insufficient Funds!");
        console.error(username + " has insufficient amount of clicks");
    }
}

//Indicates that the game has fully loaded, including the html, css, js, & jpg files.
console.log("Game has fully loaded.")

/* Intervals */
//Money Per Second Intervals
setInterval(function() {
    let grandmas_ = grandmas * 3;
    let grandpas_ = grandpas * 5;
    let dogs_ = dogs * 10;
    let bots_ = bots * 50;
    
    setTimeout(function() {
    clicks+=clickers + grandmas_ + grandpas_ + dogs_ + bots_;
    }, 250)

    setTimeout(function() {
    label.innerHTML = clicks;
    }, 250)
}, 500);

/* Update Stats */
//HTML Values
const clicks_upgstats = document.getElementById('clicks-value');
const clickersstats = document.getElementById('clickers-value');
const grandmasstats = document.getElementById('grandmas-value');
const grandpasstats = document.getElementById('grandpas-value');
const dogsstats = document.getElementById("dogs-value");
const botsstats = document.getElementById("bots-value");

//Interval Update
setInterval(function() {
    clicks_upgstats.innerHTML = clicks_upg;
    clickersstats.innerHTML = clickers;
    grandmasstats.innerHTML = grandmas;
    grandpasstats.innerHTML = grandpas;
    dogsstats.innerHTML = dogs;
}, 1150)

/* Update Costs */
//HTML Values
const clickscost = document.getElementById("clickscost");
const clickers_cost = document.getElementById("clickerscost");
const grandmas_cost = document.getElementById("grandmascost");
const grandpas_cost = document.getElementById("grandpascost");
const dogs_cost = document.getElementById("dogscost");
const bots_cost = document.getElementById("botscost");

//Interval Update
setInterval(function() {
    clickscost.innerHTML = clicks_upgcost;
    clickers_cost.innerHTML = clickerscost;
    grandmas_cost.innerHTML = grandmascost;
    grandpas_cost.innerHTML = grandpascost;
    dogs_cost.innerHTML = dogscost;
}, 1300)