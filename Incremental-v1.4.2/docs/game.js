"use strict";
console.clear();

/* Classes */
class Element {
    constructor(getId) {
        this.getId = getId;
    }

    setText(text) {
        this.getId.innerText = text;
    }

    setValue(text) {
        this.getId.value = text;
    }

    setColor(color) {
        this.getId.style.color = color;
        this.getId.style.outlineColor = color;
    }

    visibleElement() {
        this.getId.style.display = "block";
        this.getId.style.visibility = "visible";
    }

    invisibleElement() {
        this.getId.style.display = "none";
        this.getId.style.visibility = "hidden";
    }

    transParent() {
        this.getId.style.opacity = "0";
    }

    opaQue() {
        this.getId.style.opacity = "1";
    }
}

class Upgrade {
  constructor(name, amount, def, max, defaultcost, cost) {
      this.name = name;
      this.amount = amount;
      this.def = def;
      this.max = max;
      this.defaultcost = defaultcost;
      this.cost = cost;
  }

  possibleBuys() {
      return clicks / this.cost > this.max ? this.max : Math.floor(clicks / this.cost);
  }

  outOf() {
      return String(this.amount + "/" + this.max);
  }
}

class PlayerData {
    constructor(name, clicked, clicks, bought, achieved) {
        this.name = name;
        this.clicked = clicked;
        this.clicks = clicks;
        this.bought = bought;
        this.achieved = achieved;
    }

    setSection(section, page) {
        this.section = section;
        this.page = page;
    }
}

/* Elements */
let click_btn = new Element(document.getElementById("click-btn"));
let section = {
    main: new Element(document.getElementById("main")),
    settings: new Element(document.getElementById("settings")),
    stats: new Element(document.getElementById("stats")),
    upgrades: new Element(document.getElementById("upgrades")),
    achieves: new Element(document.getElementById("achievements")),
}
let stats = {
    clicks: new Element(document.getElementById("clicksstats")),
    luck: new Element(document.getElementById("luckstats")),
    luck_multiplier: new Element(document.getElementById("luck-multiplierstats")),
    auto_clickers: new Element(document.getElementById("auto-clickersstats")),
    bots: new Element(document.getElementById("botsstats")),
    macros: new Element(document.getElementById("macrosstats")),
    upgamount: new Element(document.getElementById("bought")),
    upgrade: new Element(document.getElementById("subupgrade")),

    clicked: new Element(document.getElementById("clicked")),
    total: new Element(document.getElementById("totalclicks")),
    stat: new Element(document.getElementById("game")),

    achieveamount: new Element(document.getElementById("amountachievements")),
    section: new Element(document.getElementById("subachievements")),

    leftarrow: new Element(document.getElementById("leftstats")),
    rightarrow: new Element(document.getElementById("rightstats")),
}
let upgrades = {
    manual: new Element(document.getElementById("manualupgrade")),
    auto: new Element(document.getElementById("autoupgrade")),

    clicks: new Element(document.getElementById("buyclicks")),
    luck: new Element(document.getElementById("luck")),
    luck_multiplier: new Element(document.getElementById("luckmultiplier")),
    auto_clickers: new Element(document.getElementById("autoclickers")),
    bots: new Element(document.getElementById("bots")),
    macros: new Element(document.getElementById("macros")),

    leftarrow: new Element(document.getElementById("leftupgrade")),
    rightarrow: new Element(document.getElementById("rightupgrade")),
}
let achieves = {
    leftarrow: new Element(document.getElementById("leftachievements")),
    rightarrow: new Element(document.getElementById("rightachievements")),
    clickssection: new Element(document.getElementById("clicksachievements")),
    upgradessection: new Element(document.getElementById("upgradesachievements")),
}

/* Game Values */
let clicks = 0;

let clicksU = new Upgrade("Clicks", 1, 1, 60, 100, 100);
let luck = new Upgrade("Luck", 1, 1, 10, 200, 200);
let luck_multiplier = new Upgrade("Luck Multiplier", 2, 2, 5, 500, 500);
let autoclicker = new Upgrade("Auto Clicker", 0, 0, 60, 150, 150);
let bot = new Upgrade("Bot", 0, 0, 60, 475, 475);
let macro = new Upgrade("Macro", 0, 0, 45, 700, 700);

// Player Data
let user = new PlayerData(Math.round(Math.random() * 100000) + 1000, 0, 0, 0, 0);

let buybtn = {
    amount: 1,
    amounts: [1, 5, 10, 25, 50],
    string: ["Buy: 1x", "Buy: 5x", "Buy: 10x", "Buy: 25x", "Buy: 50x"],
    temp: 0,
}

/* Game Functions */
  //Click Function
  let clickbtn = function () {
    let random = Math.round(Math.random() * 9) + 1;
    if (luck.amount > random && luck.amount != 1) {
      clicks += clicksU.amount * luck_multiplier.amount;
      user.clicks += clicksU.amount * luck_multiplier.amount;
    }

    else {
      clicks += clicksU.amount;
      user.clicks += clicksU.amount;
    }

    user.clicked++;
  }

    //Open Statistics
  let openstats = function () {
        user.setSection("stats", 1);

        section.main.invisibleElement();
        section.stats.visibleElement();
        stats.upgrade.visibleElement();
        stats.stat.invisibleElement();
        stats.section.invisibleElement();

        stats.leftarrow.invisibleElement();
        stats.rightarrow.visibleElement();

        section.main.invisibleElement();

        setTimeout(function() {
            section.stats.opaQue();
        }, 1500);
    }

    //Open Settings
    let opensettings = () => popUp("failed", "Settings will be coming soon!");
     /*
    user.section = "settings";
    section.settings.visibleElement();
    section.main.invisibleElement();

    setTimeout(function() {
        section.settings.opaQue();
    }, 1500);
    */

    //Open Upgrades
    let openupgrades = function () {
        user.section = "upgrades";
        user.page = 1;

        section.upgrades.visibleElement();
        upgrades.manual.visibleElement();
        upgrades.auto.invisibleElement();

        upgrades.leftarrow.invisibleElement();
        upgrades.rightarrow.visibleElement();

        section.main.invisibleElement();

        setTimeout(function() {
            section.upgrades.opaQue();
        }, 1500)
    }

    let openachievements = function() {
        user.section = "achievements";
        user.page = 1;

        section.achieves.visibleElement();
        section.main.invisibleElement();

        achieves.leftarrow.invisibleElement();
        achieves.rightarrow.visibleElement();

        achieves.clickssection.visibleElement();
        achieves.upgradessection.invisibleElement();

        setTimeout(function() {
            updateAchievements();
            section.achieves.opaQue();
        }, 1500);
    }

  let closesec = function() {
    user.page = 0;

    switch (user.section) {
        case "stats":
            section.stats.invisibleElement();

        case "settings":
            section.settings.invisibleElement();

        case "upgrades":
            section.upgrades.invisibleElement();

        case "achievements":
            section.achieves.invisibleElement();
    }

    user.section = "main";

    section.main.visibleElement();

    setTimeout(function() {
        section.main.opaQue();
    }, 2000);
}

//Previous & Next Functions for Sections
let statsprevious = function() {
    switch (user.page) {
        case 2:
            stats.upgrade.visibleElement();
            stats.stat.invisibleElement();

            stats.leftarrow.invisibleElement();
            stats.rightarrow.visibleElement();

            setTimeout(function() {
                stats.upgrade.opaQue();
            }, 1500);
        break;

        case 3:
            stats.stat.visibleElement();
            stats.section.invisibleElement();

            stats.leftarrow.visibleElement();
            stats.rightarrow.visibleElement();

            setTimeout(function() {
                stats.stat.opaQue();
            }, 1500);
        break;
            }

            user.page--;
          }

let statsnext = function() {
    switch(user.page) {
        case 1:
            stats.stat.visibleElement();
            stats.upgrade.invisibleElement();

            stats.leftarrow.visibleElement();
            stats.rightarrow.visibleElement();

            setTimeout(function() {
                stats.stat.opaQue();
            }, 1500);
        break;

        case 2:
            stats.section.visibleElement();
            stats.stat.invisibleElement();

            stats.leftarrow.visibleElement();
            stats.rightarrow.invisibleElement();

            setTimeout(function() {
               stats.section.opaQue()
            }, 1500);
        break;
              }

            user.page++;
          }

          let upgradesprevious = function() {
            upgrades.rightarrow.visibleElement();
            upgrades.leftarrow.invisibleElement();

            upgrades.manual.visibleElement();
            upgrades.auto.invisibleElement();

            user.page++;

            setTimeout(function() {
                upgrades.manual.opaQue();
            }, 1500);
          }

          let upgradesnext = function() {
            upgrades.leftarrow.visibleElement();
            upgrades.rightarrow.invisibleElement();

            upgrades.auto.visibleElement();
            upgrades.manual.invisibleElement();

            user.page++;

            setTimeout(function() {
                upgrades.auto.opaQue();
            }, 1500);
          }

        let achievementsprevious = function() {
            switch (user.page) {
                case 2:
                    achieves.clickssection.visibleElement();
                    achieves.upgradessection.invisibleElement();

                    achieves.leftarrow.invisibleElement();
                    achieves.rightarrow.visibleElement();

                    setTimeout(function() {
                        achieves.clickssection.opaQue();
                }, 1500)
                break;

                case 3:

                break;
            }

           user.page--;
        }

        let achievementsnext = function() {
            switch (user.page) {
                case 1:
                    achieves.upgradessection.visibleElement();
                    achieves.clickssection.invisibleElement();

                    achieves.leftarrow.visibleElement();
                    achieves.rightarrow.invisibleElement();

                    setTimeout(function() {
                        achieves.upgradessection.opaQue();
                    }, 1500);
                break;

                case 2:

                break;
            }


            user.page++;
        }

        // Buy Functions
        let buyclicks = function() {
            let amount = buybtn.amount;
            let required = clicksU.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

             if(clicks >= required && (clicksU.amount + amount) <= clicksU.max && clicksU.amount <= clicksU.max) {
                 clicks -= required;
                 clicksU.amount += amount;
                 clicksU.cost *= multiplier;
                 user.bought++;
                 // buyAlert("failure", "You need to get more clicks!");
             }

             else if(required > clicks) {
                // buyAlert("failure", insufficient);
             }

             else if (clicksU.amount + amount > clicksU.max) {
                clicks -= clicksU.cost * (clicksU.max - clicksU.amount);
                clicksU.amount += Math.floor(clicks / clicksU.cost) > clicksU.max ? clicksU.max - clicksU.amount : Math.floor(clicks / clicksU.cost);
                clicksU.cost *= Math.ceil(multiplier * 1.5);
                user.bought++;
             }

             upgradePopUp("clicks");
            }

        let buyluck = function() {
            let amount = buybtn.amount;
            let required = luck.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

            if(clicks >= required && (luck.amount + amount) <= luck.max && luck.amount <= luck.max) {
                clicks -= required;
                luck.amount += amount;
                luck.cost *= multiplier;
                user.bought++;
            }

            else if(required > clicks) {
                // buyAlert("failure", insufficient);
            }

            else if(luck.amount + amount > luck.max) {
                clicks -= luck.cost * (luck.max - luck.amount);
                luck.amount += Math.floor(clicks / luck.cost) > luck.max ? luck.max - luck.amount : Math.floor(clicks / luck.cost);
                luck.cost *= Math.ceil(multiplier * 1.5);
                user.bought++;
            }

            upgradePopUp("luck");
        }

        let buyluck_multiplier = function() {
            let amount = buybtn.amount;
            let required = luck_multiplier.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

            if(clicks >= required && (luck_multiplier.amount + amount) <= luck_multiplier.max && luck_multiplier.amount < luck_multiplier.max) {
                clicks -= required;
                luck_multiplier.amount += amount;
                luck_multiplier.cost *= multiplier;
                user.bought++;
            }

            else if(required > clicks) {
                // buyAlert("failure", insufficient);
            }

            else if(luck_multiplier.amount + amount > luck_multiplier.max) {
                clicks -= luck_multiplier.cost * (luck_multiplier.max - luck_multiplier.amount);
                luck_multiplier.amount += Math.floor(clicks / luck_multiplier.cost) > luck_multiplier.max ? luck_multiplier.max - luck_multiplier.amount : Math.floor(clicks / luck_multiplier.cost);
                luck_multiplier.cost *= Math.ceil(multiplier * 1.5);
                user.bought++;
            }

            upgradePopUp("luckmultiplier");
        }

        let buyauto_clickers = function() {
            let amount = buybtn.amount;
            let required = autoclicker.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

            if(clicks >= required && (autoclicker.amount + amount) <= autoclicker.max && autoclicker.amount <= autoclicker.max) {
                clicks -= required;
                autoclicker.amount += amount;
                autoclicker.cost *= multiplier;
                user.bought++;
            }

            else if(required > clicks) {
                // buyAlert("failure", insufficient);
            }

            else if(autoclicker.amount + amount > autoclicker.max) {
                clicks -= autoclicker.cost * (autoclicker.max - autoclicker.amount);
                autoclicker.amount += Math.floor(clicks / autoclicker.cost) > autoclicker.max ? autoclicker.max - autoclicker.amount : Math.floor(clicks / autoclicker.cost);
                autoclicker.cost *= Math.ceil(multiplier * 1.5);
                user.bought++;
            }

            upgradePopUp("autoclickers");
        }

        let buybots = function() {
            let amount = buybtn.amount;
            let required = bot.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

            if(clicks >= required && (bot.amount + amount) <= bot.max && bot.amount <= bot.max) {
                clicks -= required;
                bot.amount += amount;
                bot.cost *= multiplier;
                user.bought++;
                // buyAlert("success", "Bot Purchase Successful")
            }

            else if(required > clicks) {
                // buyAlert("failure", insufficient);
            }

            else if(bot.amount + amount > bot.max) {
                clicks -= bot.cost * (bot.max - bot.amount);
                bot.amount += Math.floor(clicks / bot.cost) > bot.max ? bot.max - bot.amount : Math.floor(clicks / bot.cost);
                bot.cost *= Math.ceil(multiplier * 1.5);
                user.bought++;
            }

            upgradePopUp("bots");
        }

        let buymacros = function() {
            let amount = buybtn.amount;
            let required = macro.cost * amount;
            let multiplier = Math.round(Math.random() * 2) + 2;

            if(clicks >= required && (macro.amount + amount) <= macro.max && macro.amount < macro.max) {
                clicks -= required;
                macro.amount += amount;
                macro.cost *= multiplier;
                user.bought++;
                // buyAlert("success", "Macro Purchase Successful!");
            }

            else if(required > clicks) {
                // buyAlert("failure", insufficient);
            }

            else if(macro.amount + amount > macro.max) {
                clicks -= macro.cost * (macro.max - macro.amount);
                macro.amount += Math.floor(clicks / macro.cost) > macro.max ? macro.max - macro.amount : Math.floor(clicks / macro.cost);
                macro.cost *= multiplier * 2.5;
                user.bought++;
            }

            upgradePopUp("macros");
        }

        let buy = function() {
            if (buybtn.temp === buybtn.amounts.length - 1) {
                buybtn.temp = 0;
            }

            else {
                buybtn.temp++;
            }

            buybtn.amount = buybtn.amounts[buybtn.temp];
            document.getElementById("perbuy").innerText = buybtn.string[buybtn.temp];
        }

/* Popup Function */
function popUp(type, text) {
    let main = new Element(document.getElementsByClassName("popup")[0]);

    main.setText(text);
    main.visibleElement();

    if (type === "success") {
        main.setColor("rgba(25, 255, 25, 1)");
    }

    else {
        main.setColor("rgba(255, 25, 25, 1)");
    }

    setTimeout(function() {
        main.invisibleElement();
    }, 8500);
}

function upgradePopUp(upgrade) {
    let main = new Element(document.getElementsByClassName("upgpopup")[0]);
    main.setColor("Yellow");

    let clone = "\nClicks: " + new Intl.NumberFormat("en-us", { notation: "standard", useGrouping: "true", trailingZeroDisplay: "stripIfInteger"}).format(clicks.toString());;
    let amount = buybtn.amount;

    switch (upgrade) {
        case 'clicks' :
            main.setText("Clicks Upgrade: " + clicksU.amount + "/" + clicksU.max + "\nClicks Cost: " + (clicksU.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (clicksU.cost * (clicksU.max - clicksU.amount))) >= clicksU.max) ? clicksU.max - clicksU.amount : Math.floor(clicks / clicksU.cost)) + clone);
        break;

        case 'luck':
            main.setText("Luck: " + luck.amount + "/" + luck.max + "\nLuck Cost: " + (luck.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (luck.cost * (luck.max - luck.amount))) >= luck.max ? luck.max - luck.amount : Math.floor(clicks / luck.cost))) + clone);
        break;

        case 'luckmultiplier':
            main.setText("Luck Multiplier: " + luck_multiplier.amount + "/" + luck_multiplier.max + "\nLuck Multiplier Cost: " + ((luck_multiplier.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (luck_multiplier.cost * (luck_multiplier.max - luck_multiplier.amount))) >= luck_multiplier.max) ? luck_multiplier.max - luck_multiplier.amount : Math.floor(clicks / luck_multiplier.cost))) + clone);
        break;

        case 'autoclickers':
            main.setText("Auto Clickers: " + autoclicker.amount + "/" + autoclicker.max + "\nAuto Clicker Cost: " + (autoclicker.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (autoclicker.cost * (autoclicker.max - autoclicker.amount))) >= autoclicker.max) ? autoclicker.max - autoclicker.amount : Math.floor(clicks / autoclicker.cost)) + clone);
        break;

        case 'bots':
            main.setText("Bots: " + bot.amount + "/" + bot.max + "\nBot Cost: " + (bot.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (bot.cost * (bot.max - bot.amount))) >= bot.max) ? bot.max - bot.amount : Math.floor(clicks / bot.cost )) + clone);
        break;

        case 'macros':
            main.setText("Macros: " + macro.amount + "/" + macro.max + "\nMacro Cost: " + (macro.cost * amount) + "\nPossible Buys: " + ((Math.floor(clicks / (macro.cost * (macro.max - macro.amount))) >= macro.max) ? macro.max - macro.amount : Math.floor(clicks / macro.cost)) + clone);
        break;

        case 'disappear':
            main.invisibleElement();
        break;

        default:
            main.invisibleElement();
        break;
    }

    main.visibleElement();
}

/* function buyAlert(type, text) {

}
*/

/* Intervals */
setInterval(function() {
    let autoclickers = autoclicker.amount;
    let bots = bot.amount * 5;
    let macros = macro.amount * 10;
    let total = (autoclickers + bots + macros);

    clicks += total;
    user.clicks += total;
}, 1000);

setInterval(function() {
  if (clicksU.amount >= clicksU.max) { document.getElementById("buyclicks").disabled = true; }
  if (luck.amount >= luck.max) { document.getElementById("luck").disabled = true; }
  if (luck_multiplier.amount >= luck_multiplier.max) { document.getElementById("luckmultiplier").disabled = true; }
  if (autoclicker.amount >= autoclicker.max) { document.getElementById("autoclickers").disabled = true; }
  if (bot.amount >= bot.max) { document.getElementById("bots").disabled = true; }
  if (macro.amount >= macro.max) { document.getElementById("macros").disabled = true; }
}, 100)

let setAbbr = function() {
    let abbr = new Intl.NumberFormat("en-us", { notation: "standard", useGrouping: "true", trailingZeroDisplay: "stripIfInteger"}).format(clicks.toString());

    click_btn.setValue(abbr);
}

let updatestats = function() {
    stats.clicks.setText("Clicks: " + clicksU.amount);
    stats.luck.setText("Luck: " + luck.amount);
    stats.luck_multiplier.setText("Luck Multiplier: " + luck_multiplier.amount);
    stats.auto_clickers.setText("Auto Clickers: " + autoclicker.amount);
    stats.bots.setText("Bots: " + bot.amount);
    stats.macros.setText("Macros: " + macro.amount);
    stats.upgamount.setText("Amount of Bought Upgrades: " + user.bought);
    stats.clicked.setText("Total Clicked: " + user.clicked);
    stats.total.setText("Total Clicks: " + user.clicks)
    stats.achieveamount.setText("Amount of Gained Achievements: " + user.achieved);
}

setInterval(setAbbr, 10);
setInterval(updatestats, 2000);
