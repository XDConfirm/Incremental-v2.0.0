"use strict";

let color = "hsl(120, 73%, 75%)";

let clicks1 = false, clicks10 = false, clicks100 = false, clicks1000 = false, clicks10000 = false, clicks100000 = false, clicks1000000 = false, clicks10000000 = false, clicks100000000 = false, clicks1000000000 = false, clicksupg15 = false, clicksupg30 = false, clicksupg45 = false, clicksupg60 = false, luck1 = false, luck3 = false, luck5 = false, luck7 = false, luck10 = false, luckmultiplier3 = false, luckmultiplier4 = false, luckmultiplier5 = false, autoclicker1 = false, autoclickers15 = false, autoclickers30 = false, autoclickers45 = false, autoclickers60 = false, bot1 = false, bots15 = false, bots30 = false, bots45 = false, bots60 = false, macro1 = false, macros15 = false, macros30 = false, macros45 = false;

let clicksI = document.getElementsByClassName("achievement clicks"), clicksupgI = document.getElementsByClassName("achievement clickupg"), luckI = document.getElementsByClassName("achievement luck"), luckmultiplierI = document.getElementsByClassName("achievement luckmultiplier"), autoclickerI = document.getElementsByClassName("achievement autoclicker"), botI = document.getElementsByClassName("achievement bot"), macroI = document.getElementsByClassName("achievement macro")

function updateAchievements() {
    updateclicks();
    updateclicks_upg();
    updateluck();
    updateluck_multiplier();
    updateauto_clickers();
    updatebots();
    updatemacros();
    // updateupgradeamount();
    // updateachievementamount();
}

    let updateclicks = function() {
        if (clicks >= 1 && clicksI[0].style.color != color && clicks1 != true) {
            user.achieved++;
            clicksI[0].style.color = color;
            clicks1 = true;
            popUp("success", "You got the 1 Click Achievement!");
        }

        if (clicks >= 10 && clicksI[1].style.color != color && clicks10 != true) {
            user.achieved++;
            clicksI[1].style.color = color;
            clicks10 = true;
            popUp("success", "You got the 10 Clicks Achievement!");
        }

        if (clicks >= 100 && clicksI[2].style.color != color && clicks100 != true) {
            user.achieved++;
            clicksI[2].style.color = color;
            clicks100 = true;
            popUp("success", "You got the 100 Clicks Achievement!");
        }

        if (clicks >= 1000 && clicksI[3].style.color != color && clicks1000 != true) {
            user.achieved++;
            clicksI[3].style.color = color;
            clicks1000 = true;
            popUp("success", "You got the 1,000 Clicks Achievement!");
        }

        if (clicks >= 10000 && clicksI[4].style.color != color && clicks10000 != true) {
            user.achieved++;
            clicksI[4].style.color = color;
            clicks10000 = true;
            popUp("success", "You got the 10,000 Clicks Achievement!");
        }

        if (clicks >= 100000 && clicksI[5].style.color != color && clicks100000 != true) {
            user.achieved++;
            clicksI[5].style.color = color;
            clicks100000 = true;
            popUp("success", "You got the 100,000 Clicks Achievement!");
        }

        if (clicks >= 1000000 && clicksI[6].style.color != color && clicks1000000 != true) {
            user.achieved++;
            clicksI[6].style.color = color;
            clicks1000000 = true;
            popUp("success", "You got the 1,000,000 Clicks Achievement!");
        }

        if (clicks >= 10000000 && clicksI[7].style.color != color && clicks10000000 != true) {
            user.achieved++;
            clicksI[7].style.color = color;
            clicks10000000 = true;
            popUp("success", "You got the 10,000,000 Clicks Achievement!");
        }

        if (clicks >= 100000000 && clicksI[8].style.color != color && clicks100000000 != true) {
            user.achieved++;
            clicksI[8].style.color = color;
            clicks100000000 = true;
            popUp("success", "You got the 100,000,000 Clicks Achievement!");
        }

        if (clicks >= 1000000000 && clicksI[9].style.color != color && clicks1000000000 != true) {
            user.achieved++;
            clicksI[9].style.color = color;
            clicks1000000000 = true;
            popUp("success", "You got the 1,000,000,000 Clicks Achievement!");
        }
    }

    let updateclicks_upg = function() {
        let clicks = clicksU.amount;

            if (clicks >= 15 && clicksupgI[0].style.color != color && clicksupg15 != true) {
                user.achieved++;
                clicksupgI[0].style.color = color;
                clicksupg15 = true;
                popUp("success", "You got the 15 Clicks Upgrade Achievement!");
            }

            if (clicks >= 30 && clicksupgI[1].style.color != color && clicksupg30 != true) {
                user.achieved++;
                clicksupgI[1].style.color = color;
                clicksupg30 = true;
                popUp("success", "You got the 30 Clicks Upgrade Achievement!");
            }

            if (clicks >= 45 && clicksupgI[2].style.color != color && clicksupg45 != true) {
                user.achieved++;
                clicksupgI[2].style.color = color;
                clicksupg45 = true;
                popUp("success", "You got the 45 Clicks Upgrade Achievement!");
            }

            if (clicks == 60 && clicksupgI[3].style.color != color && clicksupg60 != true) {
                user.achieved++;
                clicksupgI[3].style.color = color;
                clicksupg60 = true;
                popUp("success", "You got the 60 Clicks Upgrade Achievement!");
            }
    }

    let updateluck = function() {
        let lucks = luck.amount;

            if (lucks >= 3 && luckI[0].style.color != color && luck3 != true) {
                user.achieved++;
                luckI[0].style.color = color;
                luck3 = true;
                popUp("success", "You got the 3 Luck Achievement!");
            }

            if (lucks >= 5 && luckI[1].style.color != color && luck5 != true) {
                user.achieved++;
                luckI[1].style.color = color;
                luck5 = true;
                popUp("success", "You got the 5 Luck Achievement!");
            }

            if (lucks >= 7 && luckI[2].style.color != color && luck7 != true) {
                user.achieved++;
                luckI[2].style.color = color;
                luck7 = true;
                popUp("success", "You got the 7 Luck Achievement!");
            }

            if (lucks == 10 && luckI[3].style.color != color && luck10 != true) {
                user.achieved++;
                luckI[3].style.color = color;
                luck10 = true;
                popUp("success", "You got the 10 Luck Achievement!");
            }
    }

    let updateluck_multiplier = function() {
        let luckmultiplier = luck_multiplier.amount;

            if (luckmultiplier >= 3 && luckmultiplierI[0].style.color != color && luckmultiplier3 != true) {
                user.achieved++;
                luckmultiplierI[0].style.color = color;
                luckmultiplier3 = true;
                popUp("success", "You got the 3 Luck Multiplier Achievement!");
            }

            if (luckmultiplier >= 4 && luckmultiplierI[1].style.color != color && luckmultiplier4 != true) {
                user.achieved++;
                luckmultiplierI[1].style.color = color;
                luckmultiplier4 = true;
                popUp("success", "You got the 4 Luck Multiplier Achievement!");
            }

            if (luckmultiplier == 5 && luckmultiplierI[2].style.color != color && luckmultiplier5 != true) {
                user.achieved++;
                luckmultiplierI[2].style.color = color;
                luckmultiplier5 = true;
                popUp("success", "You got the 5 Luck Multiplier Achievement!");
            }
    }

    let updateauto_clickers = function() {
        let autoclickers = autoclicker.amount;

            if (autoclickers >= 1 && autoclickerI[0].style.color != color && autoclicker1 != true) {
                user.achieved++;
                autoclickerI[0].style.color = color;
                autoclicker1 = true;
                popUp("success", "You got the 1 Auto Clicker Achievement!");
            }

            if (autoclickers >= 15 && autoclickerI[1].style.color != color && autoclickers15 != true) {
                user.achieved++;
                autoclickerI[1].style.color = color;
                autoclickers15 = true;
                popUp("success", "You got the 15 Auto Clickers Achievement!");
            }

            if (autoclickers >= 30 && autoclickerI[2].style.color != color && autoclickers30 != true) {
                user.achieved++;
                autoclickerI[2].style.color = color;
                autoclickers30 = true;
              popUp("success", "You got the 30 Auto Clickers Achievement!");
            }

            if (autoclickers >= 45 && autoclickerI[3].style.color != color && autoclickers45 != true) {
                user.achieved++;
                autoclickerI[3].style.color = color;
                autoclickers45 = true;
                popUp("success", "You got the 45 Auto Clickers Achievement!");
            }

            if (autoclickers == 60 && autoclickerI[4].style.color != color && autoclickers60 != true) {
                user.achieved++;
                autoclickerI[4].style.color = color;
                autoclickers60 = true;
                popUp("success", "You got the 60 Auto Clickers Achievement!");
            }
    }

    let updatebots = function() {
        let bots = bot.amount;

            if (bots >= 1 && botI[0].style.color != color && bot1 != true) {
                user.achieved++;
                botI[0].style.color = color;
                bot1 = true;
                popUp("success", "You got the 1 Bot Achievement!");
            }

            if (bots >= 15 && botI[1].style.color != color & bots15 != true) {
                user.achieved++;
                botI[1].style.color = color;
                bots15 = true;
                popUp("success", "You got the 15 Bots Achievement!");
            }

            if (bots >= 30 && botI[2].style.color != color && bots30 != true) {
                user.achieved++;
                botI[2].style.color = color;
                bots30 = true;
                popUp("success", "You got the 30 Bots Achievement!");
            }

            if (bots >= 45 && botI[3].style.color != color && bots45 != true) {
                user.achieved++;
                botI[3].style.color = color;
                bots45 = true;
                popUp("success", "You got the 45 Bots Achievement!");
            }

            if (bots == 60 && botI[4].style.color != color && bots60 != true) {
                user.achieved++;
                botI[4].style.color = color;
                bots60 = true;
                popUp("success", "You got the 60 Bots Achievement!");
            }
    }


    let updatemacros = function() {
        let macros = macro.amount;

            if (macros >= 1 && macroI[0].style.color != color && macro1 != true) {
                user.achieved++;
                macroI[0].style.color = color;
                macro1 = true;
                popUp("success", "You got the 1 Macro Achievement!");
            }

            if (macros >= 15 && macroI[1].style.color != color && macros15 != true) {
                user.achieved++;
                macroI[1].style.color = color;
                macros15 = true;
                popUp("success", "You got the 15 Macros Achievement!");
            }

            if (macros >= 30 && macroI[2].style.color != color && macros30 != true) {
                user.achieved++;
                macroI[2].style.color = color;macros30 = true;
                popUp("success", "You got the 30 Macros Achievement!");
            }

            if (macros >= 45 && macroI[3].style.color != color && macros45 != true) {
                user.achieved++;
                macroI[3].style.color = color;
                macros45 = true;
                popUp("success", "You got the 45 Macros Achievement!");
            }
    }

    /*let updateupgradeamount = function() {

    }

    let updateachievementamount = function() {

    }
    */

setInterval(updateAchievements, 1);
