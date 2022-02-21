/* Objects? */
//Constant IDs
const html = {
    clicks: document.getElementById("click-btn"),
    main: document.getElementById("main"),
    sections: {
        stats: document.getElementById("stats"),
        settings: document.getElementById("settings"),
        upgrades: document.getElementById("upgrades"),
        achievements: document.getElementById("achievements"),
    },

    stats: {
        upgrades: {
        clicks: document.getElementById("clicksstats"),
        luck: document.getElementById("luckstats"),
        luck_multiplier: document.getElementById("luck-multiplierstats"),
        auto_clickers: document.getElementById("auto-clickersstats"),
        bots: document.getElementById("botsstats"),
        macros: document.getElementById("macrosstats"),
        amount: document.getElementById("bought"),
        section: document.getElementById("subupgrade"),
        },

        game: {
            clicked: document.getElementById("clicked"),
            total: document.getElementById("totalclicks"),
            section: document.getElementById("game"),
        },

        achievements: {
            amount: document.getElementById("amountachievements"),
            leftarrow: document.getElementById("leftachievements"),
            rightarrow: document.getElementById("rightachievements"),
            clickssection: document.getElementById("clicksachievements"),
            upgradessection: document.getElementById("upgradesachievements"),
            clicks: {
                1: document.getElementById("1"),
                10: document.getElementById("10"),
                100: document.getElementById("100"),
                1000: document.getElementById("1,000"),
                10000: document.getElementById("10,000"),
                100000: document.getElementById("100,000"),
                1000000: document.getElementById("1,000,000"),
                10000000: document.getElementById("10,000,000"),
                100000000: document.getElementById("100,000,000"),
                1000000000: document.getElementById("1,000,000,000"),
                },
            upgrades: {
                oneclick: document.getElementById("1click"),
                fifteenclicks: document.getElementById("15clicks"),
                thirtyclicks: document.getElementById("30clicks"),
                fortyfiveclicks: document.getElementById("45clicks"),
                sixtyclicks: document.getElementById("60clicks"),
                oneluck: document.getElementById("1luck"),
                threeluck: document.getElementById("3luck"),
                fiveluck: document.getElementById("5luck"),
                sevenluck: document.getElementById("7luck"),
                tenluck: document.getElementById("10luck"),
                threeluckmultiplier: document.getElementById("3luckmultiplier"),
                fourluckmultiplier: document.getElementById("4luckmultiplier"),
                fiveluckmultiplier: document.getElementById("5luckmultiplier"),
                oneautoclicker: document.getElementById("1autoclicker"),
                fifteenautoclickers: document.getElementById("15autoclickers"),
                thirtyautoclickers: document.getElementById("30autoclickers"),
                fortyfiveautoclickers: document.getElementById("45autoclickers"),
                sixtyautoclickers: document.getElementById("60autoclickers"),
                onebot: document.getElementById("1bot"),
                fifteenbots: document.getElementById("15bots"),
                thirtybots: document.getElementById("30bots"),
                fortyfivebots: document.getElementById("45bots"),
                sixtybots: document.getElementById("60bots"),
                onemacro: document.getElementById("1macro"),
                fifteenmacros: document.getElementById("15macros"),
                thirtymacros: document.getElementById("30macros"),
                fortyfivemacros: document.getElementById("45macros"),
            },
            section: document.getElementById("subachievements"),
        },
        leftarrow: document.getElementById("leftstats"),
        rightarrow: document.getElementById("rightstats"),
        },

        upgrades: {
            manual: document.getElementById("manualupgrade"),
            auto: document.getElementById("autoupgrade"),
            clicks: document.getElementById("buyclicks"),
            luck: document.getElementById("luck"),
            luck_multiplier: document.getElementById("luckmultipleir"),
            auto_clickers: document.getElementById("autoclickers"),
            bots: document.getElementById("bots"),
            macros: document.getElementById("macros"),
            leftarrow: document.getElementById("leftupgrade"),
            rightarrow: document.getElementById("rightupgrade"),
    }
}

/* Game Values */
//Main
var game = {
    clicks: 0,
    upgrades: {
        clicks: 1,
        luck: 0,
        luck_multiplier: 2,
        autoclickers: 0,
        bots: 0,
        macros: 0,

        costs: {
            clicks: 100,
            luck: 200,
            luck_multiplier: 500,
            autoclickers: 150,
            bots: 475,
            macros: 700,
    },
},

    achievements: {
        clicks: {
            1: false,
            10: false,
            100: false,
            1000: false,
            10000: false,
            100000: false,
            1000000: false,
            10000000: false,
            100000000: false,
            1000000000: false,
        },

        upgrades: {
            oneclick: false,
            fifteenclicks: false,
            thirtyclicks: false,
            fortyfiveclicks: false,
            sixtyclicks: false,
            oneluck: false,
            threeluck: false,
            fiveluck: false,
            sevenluck: false,
            tenluck: false,
            threeluckmultiplier: false,
            fourluckmultiplier: false,
            fiveluckmultiplier: false,
            oneautoclicker: false,
            fifteenautoclickers: false,
            thirtyautoclickers: false,
            fortyfiveautoclickers: false,
            sixtyautoclickers: false,
            onebot: false,
            fifteenbots: false,
            thirtybots: false,
            fortyfivebots: false,
            sixtybots: false,
            onemacro: false,
            fifteenmacros: false,
            thirtymacros: false,
            fortyfivemacros: false,
        },
    },
}


//Player Data
let temp = Math.round(Math.random() * 100000) + 1000;
var player = {
    data: {
        name: "player" + temp,
    },

    game: {
        section: "main",
        sectionpage: 0,
    }
}

//Player Stats
var stats = {
    main: {
        clicked: 0, //Amount of times clicked
        total: 0, //Total Amount of Clicks
    },

    upgrades: {
        bought: 0, //Amount of upgrades bought
    },

    achievements: {
        amount: 0,
    }
}

/* Functions (Game Mechanics) */
function addClicks() {
    let random = Math.round(Math.random() * 9) + 1;
    console.log(random);
    if(game.upgrades.luck>random&&luck!=0) {
        game.clicks+=(game.upgrades.clicks * game.upgrades.luck_multiplier);
        stats.main.total+=(game.upgrades.clicks * game.upgrades.luck_multiplier);
    }

    else {
    game.clicks+=game.upgrades.clicks;
    stats.main.total+=game.upgrades.clicks;
    }

    stats.main.clicked+=1;
    html.clicks.value = game.clicks;
}

//Statistics
//Opening
function openStatistics() {
    player.game.section = "stats";
    html.main.style.display = "none";
    html.main.style.visibility = "hidden";
    html.sections.stats.style.display = "block";
    html.sections.stats.style.visibility = "visible";
    html.stats.upgrades.section.style.display = "block";
    html.stats.upgrades.section.style.visibility = "visible";
    html.stats.game.section.style.display = "none";
    html.stats.game.section.style.visibility = "hidden";
    html.stats.achievements.section.style.display = "none";
    html.stats.achievements.section.style.visibility = "hidden";
    html.stats.leftarrow.style.display = "none";
    html.stats.leftarrow.style.visibility = "hidden";
    html.stats.rightarrow.style.display = "block";
    html.stats.rightarrow.style.visibility = "visible";
    html.main.style.display = "none";
    html.main.style.visibility = "hidden";

    setTimeout(function() {
        html.sections.stats.style.opacity = "1";
    }, 1500);
}

//Next & Previous Functions
function previousStatistics() {
    if(player.game.sectionpage==2) {
        html.stats.upgrades.section.style.display = "block";
        html.stats.upgrades.section.style.visibility = "visible";
        html.stats.game.section.style.display = "none";
        html.stats.game.section.style.visibility = "hidden";
        html.stats.leftarrow.style.display = "none";
        html.stats.leftarrow.style.visibility = "hidden";
        html.stats.rightarrow.style.display = "block";
        html.stats.rightarrow.style.visibility = "visible";

        setTimeout(function() {
            html.stats.upgrades.section.style.opacity = "1";
        }, 1500)
    }

    else if(player.game.sectionpage==3) {
        html.stats.game.section.style.display = "block";
        html.stats.game.section.style.visibility = "visible";
        html.stats.achievements.section.style.display = "none";
        html.stats.achievements.section.style.visibility = "hidden";
        html.stats.leftarrow.style.display = "block";
        html.stats.leftarrow.style.visibility = "visible";
        html.stats.rightarrow.style.display = "block";
        html.stats.rightarrow.style.visibility = "visible";

        setTimeout(function() {
            html.stats.game.section.style.opacity = "1";
        }, 1500);
    }

    player.game.sectionpage-=1;
}

function nextStatistics() {
    if(player.game.sectionpage==1) {
        html.stats.game.section.style.display = "block";
        html.stats.game.section.style.visibility = "visible";
        html.stats.upgrades.section.style.display = "none";
        html.stats.upgrades.section.style.visibility = "hidden";
        html.stats.leftarrow.style.display = "block";
        html.stats.leftarrow.style.visibility = "visible";
        html.stats.rightarrow.style.display = "block";
        html.stats.rightarrow.style.visibility = "visible";

        setTimeout(function() {
            html.stats.game.section.style.opacity = "1";
        }, 1500);
    }

    else if(player.game.sectionpage==2) {
        html.stats.achievements.section.style.display = "block";
        html.stats.achievements.section.style.visibility = "visible";
        html.stats.game.section.style.display = "none";
        html.stats.game.section.style.visibility = "hidden";
        html.stats.leftarrow.style.display = "block";
        html.stats.leftarrow.style.visibility = "visible";
        html.stats.rightarrow.style.display = "none";
        html.stats.rightarrow.style.visibility = "hidden";

        setTimeout(function() {
            html.stats.achievements.section.opacity = "1";
        }, 1500);
    }

    player.game.sectionpage+=1;
}

//Settings
//Opening Function
function openSettings() {
    console.log("Settings will be coming in v1.5.");
    /*
    player.game.section = "settings";
    html.sections.settings.style.display = "block";
    html.sections.settings.style.visibility = "visible";
    html.main.style.display = "none";;
    html.main.style.visibility = "hidden";

    setTimeout(function() {
        html.sections.settings.style.opacity = "1";
    }, 1500);
    */
}

//Upgrades
//Opening Function
function openUpgrades() {
    player.game.section = "upgrades";
    html.sections.upgrades.style.display = "block";
    html.sections.upgrades.style.visibility = "visible";
    html.upgrades.manual.style.display = "block";
    html.upgrades.manual.style.visibility = "visible";
    html.upgrades.auto.style.display = "none";
    html.upgrades.auto.style.display = "hidden";
    html.upgrades.leftarrow.style.display = "none";
    html.upgrades.leftarrow.style.visibility = "hidden";
    html.main.style.display = "none";
    html.main.style.visibility = "hidden";
    player.game.sectionpage = 1;

    setTimeout(function() {
        html.sections.upgrades.style.opacity = "1";
    }, 1500)
}

//Arrow Functions
function previousUpgrades() {
    html.upgrades.rightarrow.style.display = "block";
    html.upgrades.rightarrow.style.visibility = "visible";
    html.upgrades.leftarrow.style.display = "none";
    html.upgrades.leftarrow.style.visibility = "hidden";

    html.upgrades.manual.style.display = "block";
    html.upgrades.manual.style.visibility = "visible";
    html.upgrades.auto.style.display = "none";
    html.upgrades.auto.style.visibility = "hidden";
    player.game.sectionpage-=1;

    setTimeout(function() {
        html.upgrades.manual.style.opacity = "1";
    }, 1500);
}

function nextUpgrades() {
    html.upgrades.leftarrow.style.display = "block";
    html.upgrades.leftarrow.style.visibility = "visible";
    html.upgrades.rightarrow.style.display = "none";
    html.upgrades.rightarrow.style.visibility = "hidden";

    html.upgrades.auto.style.display = "block";
    html.upgrades.auto.style.visibility = "visible";
    html.upgrades.manual.style.display = "none";
    html.upgrades.manual.style.visibility = "hidden";
    player.game.sectionpage+=1;

    setTimeout(function() {
        html.upgrades.auto.style.opacity = "1";
    }, 1500);
}

//Buy Functions
//Manual
function buyClicks() {
    if(game.clicks>=!requirement) {

    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("Clicks: " + game.clicks + "\nClicks Upgrade: " + game.upgrades.clicks + " \nCost: " + game.upgrades.costs.clicks  + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.clicks * answer;

    if(game.clicks>=requirement&&requirement!=0) {
        game.upgrades.clicks+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.clicks*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
}

function buyLuck() {
    if(game.clicks>=!requirement) {
        
    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("Clicks: " + game.clicks + "\nLuck: " + game.upgrades.luck + "\nCost: " + game.upgrades.costs.luck  + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.luck * answer;

    if(game.clicks>=requirement&&requirement!=0) {
        game.upgrades.luck+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.luck*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
}

function buyLuckMultiplier() {
    if(game.clicks>=!requirement) {

    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("CLicks: " + game.clicks + "\nLuck Multiplier: " + game.upgrades.luck_multiplier + "\nCost: " + game.upgrades.costs.luck_multiplier + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.luck_multiplier * answer;

    if(game.clicks>=requirement&&requirement!=0) {
        game.upgrades.luck_multiplier+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.luck_multiplier*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
}

//Auto
function buyAutoClicker() {
    if(game.clicks>=!requirement) {

    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("Clicks: " + game.clicks + "\nAuto Clickers: " + game.upgrades.autoclickers + " \nCost: " + game.upgrades.costs.autoclickers  + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.autoclickers * answer;

    if(game.clicks>=requirement&&requirement!=0) {
        game.upgrades.autoclickers+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.autoclickers*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
}

function buyBot() {
    if(game.clicks>=!requirement) {

    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("Clicks: " + game.clicks + "\nBots: " + game.upgrades.bots + " \nCost: " + game.upgrades.costs.bots  + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.bots * answer;

    if(game.clicks>=requirement&&requirement!=0){
        game.upgrades.bots+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.bots*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
 }

function buyMacro() {
    if(game.clicks>=!requirement) {

    }

    let multiplier = Math.round(Math.random() * 2) + 2;
    let answer = Number(prompt("Clicks: " + game.clicks + "\nMacros: " + game.upgrades.macros + " \nCost: " + game.upgrades.costs.macros  + "\nEnter in the amount you want to buy."));
    var requirement = game.upgrades.costs.macros * answer;

    if(game.clicks>=requirement&&requirement!=0) {
        game.upgrades.macros+=answer;
        game.clicks-=requirement;
        game.upgrades.costs.macros*=multiplier;
        stats.upgrades.bought+=1;
    }

    else if(requirement==0) {

    }
}

//Achievements
//Opening Function
function openAchievements() {
    player.game.section = "achievements";
    html.sections.achievements.style.display = "block";
    html.sections.achievements.style.visibility = "visible";
    html.main.style.display = "none";
    html.main.style.visibility = "hidden";
    html.stats.achievements.leftarrow.style.display = "none";
    html.stats.achievements.leftarrow.style.visibility = "hidden";
    html.stats.achievements.rightarrow.style.display = "block";
    html.stats.achievements.rightarrow.style.visibility = "visible";
    html.stats.achievements.clickssection.style.display = "block";
    html.stats.achievements.clickssection.style.visibility = "visible";
    html.stats.achievements.upgradessection.style.display = "none";
    html.stats.achievements.upgradessection.style.visibility = "hidden"
    player.game.sectionpage = 1;

    setTimeout(function() {
        updateAchievements();
        html.sections.achievements.style.opacity = "1";
    }, 1500);
}

//Previous & Next
function previousAchievements() {
    if(player.game.sectionpage==2) {
        html.stats.achievements.clickssection.style.display = "block";
        html.stats.achievements.clickssection.style.visibility = "visible";
        html.stats.achievements.upgradessection.style.display = "none";
        html.stats.achievements.upgradessection.style.visibility = "hidden";
        html.stats.achievements.leftarrow.style.display = "none";
        html.stats.achievements.leftarrow.style.visibility = "hidden";
        html.stats.achievements.rightarrow.style.display = "block";
        html.stats.achievements.rightarrow.style.visibility = "visible";

        setTimeout(function() {
            html.stats.achievements.clickssection.style.opacity = "1";
        }, 1500)
    }

    player.game.sectionpage-=1;
}

function nextAchievements() {
    if(player.game.sectionpage==1) {
        html.stats.achievements.upgradessection.style.display = "block";
        html.stats.achievements.upgradessection.style.visibility = "visible";
        html.stats.achievements.clickssection.style.display = "none";
        html.stats.achievements.clickssection.style.visibility = "hidden";
        html.stats.achievements.leftarrow.style.display = "block";
        html.stats.achievements.leftarrow.style.visibility = "visible";
        html.stats.achievements.rightarrow.style.display = "none";
        html.stats.achievements.rightarrow.style.visibility = "hidden";

        setTimeout(function() {
            html.stats.achievements.upgradessection.style.opacity = "1";
        }, 1500);
    }

    player.game.sectionpage+=1;
}

//Update Achievement
function updateAchievements() {
    let clicks = game.clicks;
    let clicks_upg = game.upgrades.clicks;
    let luck = game.upgrades.luck;
    let luck_multiplier = game.upgrades.luck_multiplier;
    let auto_clicker = game.upgrades.autoclickers;
    let bots = game.upgrades.bots;
    let macros = game.upgrades.macros;
    let color = "hsl(120, 73%, 75%)";

    if(clicks>=1&&html.stats.achievements.clicks[1].style.color!=color&&game.achievements.clicks[1]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[1].style.color = color;
        game.achievements.clicks[1] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=10&&html.stats.achievements.clicks[10].style.color!=color&&game.achievements.clicks[10]!=true) {
         stats.achievements.amount+=1;
         html.stats.achievements.clicks[10].style.color = color;
         game.achievements.clicks[10] = true;
         console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=100&&html.stats.achievements.clicks[100].style.color!=color&&game.achievements.clicks[100]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[100].style.color = color;
        game.achievements.clicks[100] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=1000&&html.stats.achievements.clicks[1000].style.color!=color&&game.achievements.clicks[1000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[1000].style.color = color;
        game.achievements.clicks[1000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=10000&&html.stats.achievements.clicks[10000].style.color!=color&&game.achievements.clicks[10000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[10000].style.color = color;
        game.achievements.clicks[10000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=100000&&html.stats.achievements.clicks[100000].style.color!=color&&game.achievements.clicks[100000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[100000].style.color = color;
        game.achievements.clicks[100000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=1000000&&html.stats.achievements.clicks[1000000].style.color!=color&&game.achievements.clicks[1000000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[1000000].style.color = color;
        game.achievements.clicks[1000000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=10000000&&html.stats.achievements.clicks[10000000].style.color!=color&&game.achievements.clicks[10000000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[10000000].style.color = color;
        game.achievements.clicks[10000000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=100000000&&html.stats.achievements.clicks[100000000].style.color!=color&&game.achievements.clicks[100000000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[100000000].style.color = color;
        game.achievements.clicks[100000000] = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks>=1000000000&&html.stats.achievements.clicks[1000000000].style.color!=color&&game.achievements.clicks[1000000000]!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.clicks[1000000000].style.color = color;
        game.achievements.clicks[1000000000] = true;
        console.log(player.data.name + " got an achievement!")
    }

    if(clicks_upg>=1&&html.stats.achievements.upgrades.oneclick.style.color!=color&&game.achievements.upgrades.oneclick!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.oneclick.style.color = color;
        game.achievements.upgrades.oneclick = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks_upg>=15&&html.stats.achievements.upgrades.fifteenclicks.style.color!=color&&game.achievements.upgrades.fifteenclicks!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fifteenclicks.style.color = color;
        game.achievements.upgrades.fifteenclicks = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks_upg>=30&&html.stats.achievements.upgrades.thirtyclicks.style.color!=color&&game.achievements.upgrades.thirtyclicks!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.thirtyclicks.style.color = color;
        game.achievements.upgrades.thirtyclicks = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks_upg>=45&&html.stats.achievements.upgrades.fortyfiveclicks.style.color!=color&&game.achievements.upgrades.fortyfiveclicks!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fortyfiveclicks.style.color = color;
        game.achievements.upgrades.fortyfiveclicks = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(clicks_upg>=60&&html.stats.achievements.upgrades.sixtyclicks.style.color!=color&&game.achievements.upgrades.sixtyclicks!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.sixtyclicks.style.color = color;
        game.achievements.upgrades.sixtyclicks = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck>=1&&html.stats.achievements.upgrades.oneluck.style.color!=color&&game.achievements.upgrades.oneluck!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.oneluck.style.color = color;
        game.achievements.upgrades.oneluck = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck>=3&&html.stats.achievements.upgrades.threeluck.style.color!=color&&game.achievements.upgrades.threeluck!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.threeluck.style.color = color;
        game.achievements.upgrades.threeluck = true;
        console.log(player.data.name + " got an achievement!")
    }

    if(luck>=5&&html.stats.achievements.upgrades.fiveluck.style.color!=color&&game.achievements.upgrades.fiveluck!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fiveluck.style.color = color;
        game.achievements.upgrades.fiveluck = true;
        console.log(player.data.name + " got an achievement!")
    }

    if(luck>=7&&html.stats.achievements.upgrades.sevenluck.style.color!=color&&game.achievements.upgrades.sevenluck!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.sevenluck.style.color = color;
        game.achievements.upgrades.sevenluck = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck>=10&&html.stats.achievements.upgrades.tenluck.style.color!=color&&game.achievements.upgrades.tenluck!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.tenluck.style.color = color;
        game.achievements.upgrades.tenluck = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck_multiplier>=3&&html.stats.achievements.upgrades.threeluckmultiplier.style.color!=color&&game.achievements.upgrades.threeluckmultiplier!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.threeluckmultiplier.style.color = color;
        game.achievements.upgrades.threeluckmultiplier = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck_multiplier>=4&&html.stats.achievements.upgrades.fourluckmultiplier.style.color!=color&&game.achievements.upgrades.fourluckmultiplier!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fourluckmultiplier.style.color = color;
        game.achievements.upgrades.fourluckmultiplier = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(luck_multiplier>=5&&html.stats.achievements.upgrades.fiveluckmultiplier.style.color!=color&&game.achievements.upgrades.fiveluckmultiplier!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fiveluckmultiplier.style.color = color;
        game.achievements.upgrades.fiveluckmultiplier = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(auto_clicker>=1&&html.stats.achievements.upgrades.oneautoclicker.style.color!=color&&game.achievements.upgrades.oneautoclicker!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.oneautoclicker.style.color = color;
        game.achievements.upgrades.oneautoclicker = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(auto_clicker>=15&&html.stats.achievements.upgrades.fifteenautoclickers.style.color!=color&&game.achievements.upgrades.fifteenautoclickers!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fifteenautoclickers.style.color = color;
        game.achievements.upgrades.fifteenautoclickers = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(auto_clicker>=30&&html.stats.achievements.upgrades.thirtyautoclickers.style.color!=color&&game.achievements.upgrades.thirtyautoclickers!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.thirtyautoclickers.style.color = color;
        game.achievements.upgrades.thirtyautoclickers = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(auto_clicker>=45&&html.stats.achievements.upgrades.fortyfiveautoclickers.style.color!=color&&game.achievements.upgrades.fortyfiveautoclickers!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fortyfiveautoclickers.style.color = color;
        game.achievements.upgrades.fortyfiveautoclickers = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(auto_clicker>=60&&html.stats.achievements.upgrades.sixtyautoclickers.style.color!=color&&game.achievements.upgrades.sixtyautoclickers!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.sixtyautoclickers.style.color = color;
        game.achievements.upgrades.sixtyautoclickers = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(bots>=1&&html.stats.achievements.upgrades.onebot.style.color!=color&&game.achievements.upgrades.onebot!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.onebot.style.color = color;
        game.achievements.upgrades.onebot = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(bots>=15&&html.stats.achievements.upgrades.fifteenbots.style.color!=color&&game.achievements.upgrades.fifteenbots!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fifteenbots.style.color = color;
        game.achievements.upgrades.fifteenbots = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(bots>=30&&html.stats.achievements.upgrades.thirtybots.style.color!=color&&game.achievements.upgrades.thirtybots!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.thirtybots.style.color = color;
        game.achievements.upgrades.thirtybots = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(bots>=45&&html.stats.achievements.upgrades.fortyfivebots.style.color!=color&&game.achievements.upgrades.fortyfivebots!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fortyfivebots.style.color = color;
        game.achievements.upgrades.fortyfivebots = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(bots>=60&&html.stats.achievements.upgrades.sixtybots.style.color!=color&&game.achievements.upgrades.sixtybots!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.sixtybots.style.color = color;
        game.achievements.upgrades.sixtybots = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(macros>=1&&html.stats.achievements.upgrades.onemacro.style.color!=color&&game.achievements.upgrades.onemacro!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.onemacro.style.color = color;
        game.achievements.upgrades.onemacro = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(macros>=15&&html.stats.achievements.upgrades.fifteenmacros.style.color!=color&&game.achievements.upgrades.fifteenmacros!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fifteenmacros.style.color = color;
        game.achievements.upgrades.fifteenmacros = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(macros>=30&&html.stats.achievements.upgrades.thirtymacros.style.color!=color&&game.achievements.upgrades.thirtymacros!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.thirtymacros.style.color = color;
        game.achievements.upgrades.thirtymacros = true;
        console.log(player.data.name + " got an achievement!");
    }

    if(macros>=45&&html.stats.achievements.upgrades.fortyfivemacros.style.color!=color&&game.achievements.upgrades.fortyfivemacros!=true) {
        stats.achievements.amount+=1;
        html.stats.achievements.upgrades.fortyfivemacros.style.color = color;
        game.achievements.upgrades.fortyfivemacros = true;
        console.log(player.data.name + " got an achievement!");
    }
}   
/* Other? */
//Closing Functions
function closeSection() {
    let section = player.game.section;
    player.game.sectionpage = 0;

    if(section=="stats") {
        html.sections.stats.style.display = "none";
        html.sections.stats.style.visibility = "hidden";
        html.main.style.display = "block";
        html.main.style.visibility = "visible";
    }

    if(section=="settings") {
        html.sections.settings.style.display = "none";
        html.sections.settings.style.visibility = "hidden";
        html.main.style.display = "block";
        html.main.style.visibility = "visible"
    }

    if(section=="upgrades") {
        html.sections.upgrades.style.display = "none";
        html.sections.upgrades.style.visibility = "hidden";
        html.main.style.display = "block";
        html.main.style.visibility = "visible";
    }

    if(section=="achievements") {
        html.sections.achievements.style.display = "none";
        html.sections.achievements.style.visibility = "hidden";
        html.main.style.display = "block";
        html.main.style.visibility = "visible";
    }

    setTimeout(function() {
        html.main.style.opacity = "1";
    }, 2000)
}

/* Intervals */
setInterval(function() {
    let autoclickers = game.upgrades.autoclickers;
    let bots = game.upgrades.bots * 5;
    let macros = game.upgrades.macros * 10;
    let total = (autoclickers + bots + macros);
    
    game.clicks+=total;
    stats.main.total+=total;
    html.clicks.value = game.clicks;
}, 1000);

//Update Stats Function & Interval
function updateStats() {
    html.stats.upgrades.clicks.innerHTML = "Clicks: " + game.upgrades.clicks;
    html.stats.upgrades.luck.innerHTML = "Luck: " + game.upgrades.luck;
    html.stats.upgrades.luck_multiplier.innerHTML = "Luck Multiplier: " + game.upgrades.luck_multiplier;
    html.stats.upgrades.auto_clickers.innerHTML = "Auto Clickers: " + game.upgrades.autoclickers;
    html.stats.upgrades.bots.innerHTML = "Bots: " + game.upgrades.bots;
    html.stats.upgrades.macros.innerHTML = "Macros: " + game.upgrades.macros;
    html.stats.upgrades.amount.innerHTML = "Amount of Bought Upgrades: " + stats.upgrades.bought;
    html.stats.game.clicked.innerHTML = "Total Clicked: " + stats.main.clicked;
    html.stats.game.total.innerHTML = "Total Clicks: " + stats.main.total;
    html.stats.achievements.amount.innerHTML = "Amount of Gained Achievements: " + stats.achievements.amount;
}

setInterval(updateStats, 2500);