const color = "hsl(120, 73%, 75%)";
const t = true;
const string = player.data.name + " got an achievement!";
var tempach = {
    clicks: 0,
    clicks_upg: 0,
    luck: 0,
    luck_multiplier: 0,
    auto_clicker: 0,
    bots: 0,
    macros: 0,
}

function updateAchievements() {
    tempach.clicks = game.clicks;
    tempach.clicks_upg = game.upgrades.clicks;
    tempach.luck = game.upgrades.luck;
    tempach.luck_multiplier = game.upgrades.luck_multiplier;
    tempach.auto_clicker = game.upgrades.autoclickers;
    tempach.bots = game.upgrades.bots;
    tempach.macros = game.upgrades.macros;

    updateachievements.clicks();
    updateachievements.clicks_upg();
    updateachievements.luck();
    updateachievements.luck_multiplier();
    updateachievements.auto_clickers();
    updateachievements.bots();
    updateachievements.macros();
}   

const updateachievements = {
    clicks: function() {
        if(tempach.clicks>=1&&html.stats.achievements.clicks[1].style.color!=color&&game.achievements.clicks[1]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[1].style.color = color;
            game.achievements.clicks[1] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=10&&html.stats.achievements.clicks[10].style.color!=color&&game.achievements.clicks[10]!=t) {
             stats.achievements.amount+=1;
             html.stats.achievements.clicks[10].style.color = color;
             game.achievements.clicks[10] = t;
             console.log(string);
        }
    
        if(tempach.clicks>=100&&html.stats.achievements.clicks[100].style.color!=color&&game.achievements.clicks[100]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[100].style.color = color;
            game.achievements.clicks[100] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=1000&&html.stats.achievements.clicks[1000].style.color!=color&&game.achievements.clicks[1000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[1000].style.color = color;
            game.achievements.clicks[1000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=10000&&html.stats.achievements.clicks[10000].style.color!=color&&game.achievements.clicks[10000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[10000].style.color = color;
            game.achievements.clicks[10000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=100000&&html.stats.achievements.clicks[100000].style.color!=color&&game.achievements.clicks[100000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[100000].style.color = color;
            game.achievements.clicks[100000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=1000000&&html.stats.achievements.clicks[1000000].style.color!=color&&game.achievements.clicks[1000000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[1000000].style.color = color;
            game.achievements.clicks[1000000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=10000000&&html.stats.achievements.clicks[10000000].style.color!=color&&game.achievements.clicks[10000000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[10000000].style.color = color;
            game.achievements.clicks[10000000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=100000000&&html.stats.achievements.clicks[100000000].style.color!=color&&game.achievements.clicks[100000000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[100000000].style.color = color;
            game.achievements.clicks[100000000] = t;
            console.log(string);
        }
    
        if(tempach.clicks>=1000000000&&html.stats.achievements.clicks[1000000000].style.color!=color&&game.achievements.clicks[1000000000]!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.clicks[1000000000].style.color = color;
            game.achievements.clicks[1000000000] = t;
            console.log(string);
        }
    },

    clicks_upg: function() {
        if(tempach.clicks_upg>=1&&html.stats.achievements.upgrades.oneclick.style.color!=color&&game.achievements.upgrades.oneclick!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.oneclick.style.color = color;
            game.achievements.upgrades.oneclick = t;
            console.log(string);
        }
    
        if(tempach.clicks_upg>=15&&html.stats.achievements.upgrades.fifteenclicks.style.color!=color&&game.achievements.upgrades.fifteenclicks!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fifteenclicks.style.color = color;
            game.achievements.upgrades.fifteenclicks = t;
            console.log(string);
        }
    
        if(tempach.clicks_upg>=30&&html.stats.achievements.upgrades.thirtyclicks.style.color!=color&&game.achievements.upgrades.thirtyclicks!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.thirtyclicks.style.color = color;
            game.achievements.upgrades.thirtyclicks = t;
            console.log(string);
        }
    
        if(
            tempach.clicks_upg>=45&&html.stats.achievements.upgrades.fortyfiveclicks.style.color!=color&&game.achievements.upgrades.fortyfiveclicks!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fortyfiveclicks.style.color = color;
            game.achievements.upgrades.fortyfiveclicks = t;
            console.log(string);
        }
    
        if(tempach.clicks_upg >= 60 && html.stats.achievements.upgrades.sixtyclicks.style.color != color && game.achievements.upgrades.sixtyclicks != t) {
            stats.achievements.amount +=1 ;
            html.stats.achievements.upgrades.sixtyclicks.style.color = color;
            game.achievements.upgrades.sixtyclicks = t;
            console.log(string);
        }
    },

    luck: function() {
        if(tempach.luck>=1&&html.stats.achievements.upgrades.oneluck.style.color!=color&&game.achievements.upgrades.oneluck!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.oneluck.style.color = color;
            game.achievements.upgrades.oneluck = t;
            console.log(string);
        }
    
        if(tempach.luck>=3&&html.stats.achievements.upgrades.threeluck.style.color!=color&&game.achievements.upgrades.threeluck!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.threeluck.style.color = color;
            game.achievements.upgrades.threeluck = t;
            console.log(string)
        }
    
        if(tempach.luck>=5&&html.stats.achievements.upgrades.fiveluck.style.color!=color&&game.achievements.upgrades.fiveluck!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fiveluck.style.color = color;
            game.achievements.upgrades.fiveluck = t;
            console.log(string)
        }
    
        if(tempach.luck>=7&&html.stats.achievements.upgrades.sevenluck.style.color!=color&&game.achievements.upgrades.sevenluck!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.sevenluck.style.color = color;
            game.achievements.upgrades.sevenluck = t;
            console.log(string);
        }
    
        if(tempach.luck>=10&&html.stats.achievements.upgrades.tenluck.style.color!=color&&game.achievements.upgrades.tenluck!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.tenluck.style.color = color;
            game.achievements.upgrades.tenluck = t;
            console.log(string);
        }
    },

    luck_multiplier: function() {
        if(tempach.luck_multiplier>=3&&html.stats.achievements.upgrades.threeluckmultiplier.style.color!=color&&game.achievements.upgrades.threeluckmultiplier!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.threeluckmultiplier.style.color = color;
            game.achievements.upgrades.threeluckmultiplier = t;
            console.log(string);
        }
    
        if(tempach.luck_multiplier>=4&&html.stats.achievements.upgrades.fourluckmultiplier.style.color!=color&&game.achievements.upgrades.fourluckmultiplier!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fourluckmultiplier.style.color = color;
            game.achievements.upgrades.fourluckmultiplier = t;
            console.log(string);
        }
    
        if(tempach.luck_multiplier>=5&&html.stats.achievements.upgrades.fiveluckmultiplier.style.color!=color&&game.achievements.upgrades.fiveluckmultiplier!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fiveluckmultiplier.style.color = color;
            game.achievements.upgrades.fiveluckmultiplier = t;
            console.log(string);
        }
    },

    auto_clickers: function() {
        if(tempach.auto_clicker>=15&&html.stats.achievements.upgrades.fifteenautoclickers.style.color!=color&&game.achievements.upgrades.fifteenautoclickers!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fifteenautoclickers.style.color = color;
            game.achievements.upgrades.fifteenautoclickers = t;
            console.log(string);
        }
    
        if(tempach.auto_clicker>=30&&html.stats.achievements.upgrades.thirtyautoclickers.style.color!=color&&game.achievements.upgrades.thirtyautoclickers!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.thirtyautoclickers.style.color = color;
            game.achievements.upgrades.thirtyautoclickers = t;
            console.log(string);
        }
    
        if(tempach.auto_clicker>=45&&html.stats.achievements.upgrades.fortyfiveautoclickers.style.color!=color&&game.achievements.upgrades.fortyfiveautoclickers!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fortyfiveautoclickers.style.color = color;
            game.achievements.upgrades.fortyfiveautoclickers = t;
            console.log(string);
        }
    
        if(tempach.auto_clicker>=60&&html.stats.achievements.upgrades.sixtyautoclickers.style.color!=color&&game.achievements.upgrades.sixtyautoclickers!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.sixtyautoclickers.style.color = color;
            game.achievements.upgrades.sixtyautoclickers = t;
            console.log(string);
        }
    },

    bots: function() {
        if(tempach.bots>=1&&html.stats.achievements.upgrades.onebot.style.color!=color&&game.achievements.upgrades.onebot!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.onebot.style.color = color;
            game.achievements.upgrades.onebot = t;
            console.log(string);
        }
    
        if(tempach.bots>=15&&html.stats.achievements.upgrades.fifteenbots.style.color!=color&&game.achievements.upgrades.fifteenbots!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fifteenbots.style.color = color;
            game.achievements.upgrades.fifteenbots = t;
            console.log(string);
        }
    
        if(tempach.bots>=30&&html.stats.achievements.upgrades.thirtybots.style.color!=color&&game.achievements.upgrades.thirtybots!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.thirtybots.style.color = color;
            game.achievements.upgrades.thirtybots = t;
            console.log(string);
        }
    
        if(tempach.bots>=45&&html.stats.achievements.upgrades.fortyfivebots.style.color!=color&&game.achievements.upgrades.fortyfivebots!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fortyfivebots.style.color = color;
            game.achievements.upgrades.fortyfivebots = t;
            console.log(string);
        }
    
        if(tempach.bots>=60&&html.stats.achievements.upgrades.sixtybots.style.color!=color&&game.achievements.upgrades.sixtybots!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.sixtybots.style.color = color;
            game.achievements.upgrades.sixtybots = t;
            console.log(string);
        }
    },

    macros: function() {
        if(tempach.macros>=1&&html.stats.achievements.upgrades.onemacro.style.color!=color&&game.achievements.upgrades.onemacro!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.onemacro.style.color = color;
            game.achievements.upgrades.onemacro = t;
            console.log(string);
        }
    
        if(tempach.macros>=15&&html.stats.achievements.upgrades.fifteenmacros.style.color!=color&&game.achievements.upgrades.fifteenmacros!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fifteenmacros.style.color = color;
            game.achievements.upgrades.fifteenmacros = t;
            console.log(string);
        }
    
        if(tempach.macros>=30&&html.stats.achievements.upgrades.thirtymacros.style.color!=color&&game.achievements.upgrades.thirtymacros!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.thirtymacros.style.color = color;
            game.achievements.upgrades.thirtymacros = t;
            console.log(string);
        }
    
        if(tempach.macros>=45&&html.stats.achievements.upgrades.fortyfivemacros.style.color!=color&&game.achievements.upgrades.fortyfivemacros!=t) {
            stats.achievements.amount+=1;
            html.stats.achievements.upgrades.fortyfivemacros.style.color = color;
            game.achievements.upgrades.fortyfivemacros = t;
            console.log(string);
        }
    },
}