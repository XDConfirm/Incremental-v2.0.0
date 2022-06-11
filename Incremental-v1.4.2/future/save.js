"use strict";

// NOT FINISHED PRODUCT

let savedata = "";

/*function saveData() {
    downloadFile("inc v142 save.txt", savedata);
}

function loadData() {
    let data = prompt("Paste your saved data.")
    loadFile();
}

function downloadFile(filename, text) {
    var file = document.createElement('a');

    file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    file.setAttribute('download', filename);

    file.style.display = 'none';
    document.body.appendChild(file);

    document.body.removeChild(file);
}
*/

function setSave() {
    savedata =
    String(game.clicks + ":" + game.upgrades.clicks + ":" + game.upgrades.luck  + ":" + game.upgrades.luck_multiplier + ":" + game.upgrades.autoclickers + ":" + game.upgrades.bots + ":" + game.upgrades.macros + ":" + game.upgrades.costs.clicks + ":" + game.upgrades.costs.luck + ":" + game.upgrades.costs.luck_multiplier + ":" + game.upgrades.costs.autoclickers + ":" + game.upgrades.costs.bots + ":" + game.upgrades.costs.macros + ":" +
 + ":" + game.achievements.clicks[10] + ":" + game.achievements.clicks[100] + ":" + game.achievements.clicks[1000] + ":" + game.achievements.clicks[10000] + ":" + game.achievements.clicks[100000] + ":" + game.achievements.clicks[1000000] + ":" + game.achievements.clicks[10000000] + ":" + game.achievements.clicks[100000000] + ":" + game.achievements.clicks[1000000000] + ":" + game.achievements.upgrades.onclick + ":" + game.achievements.upgrades.fifteenclicks + ":" + game.achievements.upgrades.thirtyclicks + ":" + game.achievements.upgrades.fortyfiveclicks + ":" + game.achievements.upgrades.sixtyclicks + ":" + game.achievements.upgrades.oneluck + ":" + game.achievements.upgrades.threeluck + ":" + game.achievements.upgrades.fiveluck + ":" + game.achievements.upgrades.sevenluck + ":" + game.achievements.upgrades.tenluck + ":" + game.achievements.upgrades.threeluckmultiplier + ":" + game.achievements.upgrades.fourluckmultiplier + ":" + game.achievements.upgrades.fiveluckmultiplier + ":" + game.achievements.upgrades.oneautoclicker + ":" + game.achievements.upgrades.fifteenautoclickers + ":" + game.achievements.upgrades.thirtyautoclickers + ":" + game.achievements.upgrades.fortyfiveautoclickers + ":" + game.achievements.upgrades.sixtyautoclickers + ":" + game.achievements.upgrades.onebot + ":" + game.achievements.upgrades.fifteenbots + ":" + game.achievements.upgrades.thirtybots + ":" + game.achievements.upgrades.fortyfivebots + ":" + game.achievements.upgrades.sixtybots + ":" + game.achievements.upgrades.onemacro + ":" + game.achievements.upgrades.fifteenmacros + ":" + game.achievements.upgrades.thirtymacros + ":" + game.achievements.upgrades.fortyfivemacros + ":" + player.data.name + ":" + stats.main.clicked + ":" + stats.main.total + ":" + stats.upgrades.bought + ":" + stats.achievements.amount + ":")
}

setInterval(setSave, 1);
