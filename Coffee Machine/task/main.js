const input = require('sync-input');

function printRemaining() {
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`\$${money} of money`);
}

function buy() {
    let drinkChoice = parseInt(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n")) - 1;
    // stock = [[waterRequired, milkRequired, beansRequired, drinkPrice], ...]
    let stock = [[250, 0, 16, 4], [350, 75, 20, 7], [200, 100, 12, 6]];
    // continue to take drink orders until the user types "back" to return to the main menu
    while (drinkChoice == 0 || drinkChoice == 1 || drinkChoice == 2) {
        if (cups >= 1) {
            if (water >= stock[drinkChoice][0]) {
                if (milk >= stock[drinkChoice][1]) {
                    if (beans >= stock[drinkChoice][2]) {
                        console.log("I have enough resources, making you a coffee!");
                        cups -= 1;
                        water -= stock[drinkChoice][0];
                        milk -= stock[drinkChoice][1];
                        beans -= stock[drinkChoice][2];
                        money += stock[drinkChoice][3];
                    } else {
                        console.log("Sorry, not enough beans!");
                    };
                }  else {
                    console.log("Sorry, not enough milk!");
                } ;
            } else {
                console.log("Sorry, not enough water!");
            };
        } else {
            console.log("Sorry, not enough cups!");
        };
    }
    drinkChoice = parseInt(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n")) - 1;
}

function fill() {
    let waterToAdd = parseInt(input("Write how many ml of water you want to add:"));
    let milkToAdd = parseInt(input("Write how many ml of milk you want to add:"));
    let beansToAdd = parseInt(input("Write how many grams of coffee beans you want to add:"));
    let cupsToAdd = parseInt(input("Write how many disposable coffee cups you want to add:"));

    water += waterToAdd;
    milk += milkToAdd;
    beans += beansToAdd;
    cups += cupsToAdd;
}

function take(){
    let withdrawal = parseInt(input("How much money would you like to take out?"));
    if (withdrawal <= money) {
        money -= withdrawal;
        console.log(`I gave you \$${money}`);
    } else {
        console.log("Sorry, that amount is larger than the money available.")
    };
}

function main() {
    water = 400;
    milk = 540;
    beans = 120;
    money = 550;
    cups = 9;

    let action = input("Write action (buy, fill, take, remaining, exit):\n");

    while (action !== "exit") {
        if (action == "buy") {
            buy();
        } else if (action == "fill") {
            fill();
        } else if (action == "take") {
            take();
        } else if (action == "remaining") {
            printRemaining();
        };
        action = input("Write action (buy, fill, take, remaining, exit):\n");
    };
}

main();