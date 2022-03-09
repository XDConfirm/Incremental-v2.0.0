/* Objects */
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
            buy: document.getElementById("perbuy"),
    }
}

/* Game Values */
//Main
var game = {
    clicks: 0,
    upgrades: {
        clicks: 1,
        luck: 1,
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

        max: {
            clicks: 60,
            luck: 10,
            luck_multiplier: 5,
            autoclickers: 60,
            bots: 60,
            macros: 45, 
        }
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


// Player Data
let temp = Math.round(Math.random() * 100000) + 1000;
var player = {
    data: {
        name: "player" + temp,
    },

    game: {
        section: "main",
        sectionpage: 0,
        buy: {
            amount: 1,
            amounts: [1, 5, 10, 25, 50, 100],
            string: ["Buy: 1x", "Buy: 5x", "Buy: 10x", "Buy: 25x", "Buy: 50x", "Buy: 100x"],
            temp: 0,
        }
    }
}

// Player Stats
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
const gamefunction = {
  //Click Function
  click: function () {
    let random = Math.round(Math.random() * 9) + 1;
    if (game.upgrades.luck > random && luck != 1) {
      game.clicks += game.upgrades.clicks * game.upgrades.luck_multiplier;
      stats.main.total += game.upgrades.clicks * game.upgrades.luck_multiplier;
    } 
    
    else {
      game.clicks += game.upgrades.clicks;
      stats.main.total += game.upgrades.clicks;
    }

    stats.main.clicked += 1;
    html.clicks.value = game.clicks;
  },

  //Open Functions
  open: {
    //Open Statistics
    statistics: function () {
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
    },

    //Open Settings
    settings: () => console.log("Settings will be coming in v1.5"),
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

    //Open Upgrades
    upgrades: function () {
        player.game.section = "upgrades";
        html.sections.upgrades.style.display = "block";
        html.sections.upgrades.style.visibility = "visible";
    
        html.upgrades.manual.style.display = "block";
        html.upgrades.manual.style.visibility = "visible";
    
        html.upgrades.auto.style.display = "none";
        html.upgrades.auto.style.display = "hidden";
    
        html.upgrades.leftarrow.style.display = "none";
        html.upgrades.leftarrow.style.visibility = "hidden";
        html.upgrades.rightarrow.style.display = "block";
        html.upgrades.rightarrow.style.visibility = "visible";
    
        html.main.style.display = "none";
        html.main.style.visibility = "hidden";
        player.game.sectionpage = 1;
    
        setTimeout(function() {
            html.sections.upgrades.style.opacity = "1";
        }, 1500)
    },

    achievements: function() {
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
    },
  },

  close: function() {
    let section = player.game.section;
    player.game.sectionpage = 0;

    if(section=="stats") {
        html.sections.stats.style.display = "none";
        html.sections.stats.style.visibility = "hidden";
    }

    if(section=="settings") {
        html.sections.settings.style.display = "none";
        html.sections.settings.style.visibility = "hidden";
    }

    if(section=="upgrades") {
        html.sections.upgrades.style.display = "none";
        html.sections.upgrades.style.visibility = "hidden";
    }

    if(section=="achievements") {
        html.sections.achievements.style.display = "none";
        html.sections.achievements.style.visibility = "hidden";
    }

    html.main.style.display = "block";
    html.main.style.visibility = "visible";
    setTimeout(function() {
        html.main.style.opacity = "1";
    }, 2000);
  },

  //Previous & Next Functions for Sections
  arrow: {
      statistics: {
          previous: function() {
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
          },

          next: function() {
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
          },
      },

      upgrades: {
          previous: function() {
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
          },

          next: function() {
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
          },
      },

      achievements: {
        previous: function() {
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
        },

        next: function() {
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
        },
      },
  },

  upgrades: {
      buy: {
        max: "You have reached the max for this upgrade!", //When the player has reached the max for an upgrade
        reach: "Lower your amount per buy!", // When the amount per buy plus the amount of upgrade is greater than the upgrad max
        insufficient: "You don't have enough clicks for this upgrade!", // When the player has an amount of clicks that is lower than the cost
        bought: stats.upgrades.bought,
        amount: player.game.buy.amount,

        clicks: function() {
            const required = game.upgrades.costs.clicks * this.amount;
            let multiplier = Math.round(Math.random() * 2) + 2;
        
             if(game.clicks>=required&&(game.upgrades.clicks+this.amount)>!game.upgrades.max.clicks&&game.upgrades.clicks>=!game.upgrades.max.clicks) {
                 game.clicks-=required;
                 game.upgrades.clicks+=this.amount;
                 game.upgrades.costs.clicks*=multiplier;
                 this.bought++;
                 console.log(player.data.name + " bought the Clicks Upgrade " + this.amount + "x.");
             }
        
             else if(required>game.clicks) {
                alert(this.insufficient);
             }
        
             else if((game.upgrades.clicks+this.amount)<game.upgrades.max.clicks) {
                 alert(this.reach);
             }

             else if(game.upgrades.clicks>=game.upgrades.max.clicks) {
                 alert(this.max);
             }
        },

        luck: function() {
            const required = game.upgrades.costs.luck * this.amount;
            let multiplier = Math.round(Math.random() * 2);

            if(game.clicks>=required&&(game.upgrades.luck+this.amount)>!game.upgrades.max.clicks) {
                game.clicks-=required;
                game.upgrades.clicks+=this.amount;
                game.upgrades.costs.luck*=multiplier;
                this.bought++;
                console.log(player.data.name + " bought the Luck Upgrade " + this.amount + "x.");
            }
            
            else if(required>game.clicks) {
                alert(this.insufficient);
            }

            else if((game.upgrades.luck+this.amount)<game.upgrades.max.luck) {
                alert(this.reach);
            }

            else if(game.upgrades.luck>=game.upgrades.max.luck) {
                alert(this.max);
            }
        },

        luck_multiplier: function() {
            const required = game.upgrades.costs.luck_multiplier * this.amount;
            let multiplier = Math.round(Math.random() * 2);

            if(game.clicks>=required&&(game.upgrades.luck_multiplier+this.amount)>!game.upgrades.max.luck_multiplier) {
                game.clicks-=required;
                game.upgrades.clicks+=this.amount;
                game.upgrades.costs.luck_multiplier*=multiplier;
                this.bought++;
                console.log(player.data.name + " bought the Luck Multiplier Upgrade " + this.amount + "x.");
            }
            
            else if(required>game.clicks) {
                alert(this.insufficient);
            }

            else if((game.upgrades.luck_multiplier+this.amount)<game.upgrades.max.luck_multiplier) {
                alert(this.reach);
            }

            else if(game.upgrades.luck_multiplier>=game.upgrades.max.luck_multiplier) {
                alert(this.max);
            }
        },

        auto_clickers: function() {
            const required = game.upgrades.costs.autoclickers * this.amount;
            let multiplier = Math.round(Math.random() * 2);

            if(game.clicks>=required&&(game.upgrades.autoclickers+this.amount)>!game.upgrades.max.autoclickers) {
                game.clicks-=required;
                game.upgrades.autoclickers+=this.amount;
                game.upgrades.costs.autoclickers*=multiplier;
                this.bought++;
                console.log(player.data.name + " bought the Auto Clickers Upgrade " + this.amount + "x.");
            }
            
            else if(required>game.clicks) {
                alert(this.insufficient);
            }

            else if((game.upgrades.autoclickers+this.amount)<game.upgrades.max.autoclickers) {
                alert(this.reach);
            }

            else if(game.upgrades.autoclickers>=game.upgrades.max.autoclickers) {
                alert(this.max);
            }
        },

        bots: function() {
            const required = game.upgrades.costs.bots * this.amount;
            let multiplier = Math.round(Math.random() * 2);

            if(game.clicks>=required&&(game.upgrades.bots+this.amount)>!game.upgrades.max.bots) {
                game.clicks-=required;
                game.upgrades.bots+=this.amount;
                game.upgrades.costs.bots*=multiplier;
                this.bought++;
                console.log(player.data.name + " bought the Bots Upgrade " + this.amount + "x.");
            }
            
            else if(required>game.clicks) {
                alert(this.insufficient);
            }

            else if((game.upgrades.bots+this.amount)<game.upgrades.max.bots) {
                alert(this.reach);
            }

            else if(game.upgrades.bots>=game.upgrades.max.bots) {
                alert(this.max);
            }
        },

        macros: function() {
            const required = game.upgrades.costs.macros * this.amount;
            let multiplier = Math.round(Math.random() * 2);

            if(game.clicks>=required&&(game.upgrades.macros+this.amount)>!game.upgrades.max.macros) {
                game.clicks-=required;
                game.upgrades.macros+=this.amount;
                game.upgrades.costs.macros*=multiplier;
                this.bought++;
                console.log(player.data.name + " bought the Macros Upgrade " + this.amount + "x.");
            }
            
            else if(required>game.clicks) {
                alert(this.insufficient);
            }

            else if((game.upgrades.macros+this.amount)<game.upgrades.max.macros) {
                alert(this.reach);
            }

            else if(game.upgrades.macros>=game.upgrades.max.macros) {
                alert(this.max);
            }
        },

        buy: function() {
            let id = html.upgrades.buy;

            if(player.game.buy.temp==5) {
                player.game.buy.temp = 0;
            }
        
            else {
                player.game.buy.temp++;
            }
        
            player.game.buy.amount = player.game.buy.amounts[player.game.buy.temp];
            id.innerHTML = player.game.buy.string[player.game.buy.temp];
        },
      }
  }
};

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

const update = {
    stats: function() {
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
    },

    titles: function() {
        let amount = player.game.buy.amount;

        if(amount!=1) {
        document.getElementById("buyclicks").title = "Clicks: " + game.clicks + "\nClick Upgrade: " + game.upgrades.clicks + "\nOriginal Cost: " + game.upgrades.costs.clicks + "\nCost: " + (game.upgrades.costs.clicks * amount);
    
        document.getElementById("luck").title = "Clicks: " + game.clicks + "\nLuck: " + game.upgrades.luck + "\nOriginal Cost: " + game.upgrades.costs.luck + "\nCost: " + (game.upgrades.costs.luck * amount);
    
        document.getElementById("luckmultiplier").title = "Clicks: " + game.clicks + "\nLuck Multiplier: " + game.upgrades.luck_multiplier + "\nOriginal Cost: " + game.upgrades.costs.luck_multiplier + "\nCost: " + (game.upgrades.costs.luck_multiplier * amount);
    
        document.getElementById("autoclickers").title = "Clicks: " + game.clicks + "\nAuto Clickers: " + game.upgrades.autoclickers + "\nOriginal Cost: " + game.upgrades.costs.autoclickers + "\nCost: " + (game.upgrades.costs.autoclickers * amount);
    
        document.getElementById("bots").title = "Clicks: " + game.clicks + "\nBots: " + game.upgrades.bots + "\nOriginal Cost: " + game.upgrades.costs.bots + "\nCost: " + (game.upgrades.costs.bots * amount);
    
        document.getElementById("macros").title = "Clicks: " + game.clicks + "\nMacros: " + game.upgrades.macros + "\nOriginal Cost: " + game.upgrades.costs.macros + "\nCost: " + (game.upgrades.costs.macros * amount);
        }
    
        else {
            document.getElementById("buyclicks").title = "Clicks: " + game.clicks + "\nClick Upgrade: " + game.upgrades.clicks + "\nCost: " + game.upgrades.costs.clicks;
    
        document.getElementById("luck").title = "Clicks: " + game.clicks + "\nLuck: " + game.upgrades.luck + "\nCost: " + game.upgrades.costs.luck;
    
        document.getElementById("luckmultiplier").title = "Clicks: " + game.clicks + "\nLuck Multiplier: " + game.upgrades.luck_multiplier + "\nCost: " + game.upgrades.costs.luck_multiplier;
    
        document.getElementById("autoclickers").title = "Clicks: " + game.clicks + "\nAuto Clickers: " + game.upgrades.autoclickers + "\nCost: " + game.upgrades.costs.autoclickers;
    
        document.getElementById("bots").title = "Clicks: " + game.clicks + "\nBots: " + game.upgrades.bots + "\nCost: " + game.upgrades.costs.bots;
    
        document.getElementById("macros").title = "Clicks: " + game.clicks + "\nMacros: " + game.upgrades.macros + "\nCost: " + game.upgrades.costs.macros;
        }
    },
}

setInterval(update.titles, 1000);
setInterval(update.stats, 2000);