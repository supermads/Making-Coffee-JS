const input = require('sync-input');

function printState() {
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${beans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`\$${money} of money`);
}

function buy() {
    let drinkChoice = parseInt(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n")) - 1;
    // drinkIngredients = [[waterRequired, milkRequired, beansRequired, drinkCost], ...]
    let drinkIngredients = [[250, 0, 16, 4], [350, 75, 20, 7], [200, 100, 12, 6]];

    cups -= 1;
    water -= drinkIngredients[drinkChoice][0];
    milk -= drinkIngredients[drinkChoice][1];
    beans -= drinkIngredients[drinkChoice][2];
    money += drinkIngredients[drinkChoice][3];
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
    money = 0;
}

function main() {
    water = 400;
    milk = 540;
    beans = 120;
    money = 550;
    cups = 9;

    printState();

    let action = input("Write action (buy, fill, take):\n");

    if (action == "buy") {
        buy();
    } else if (action == "fill") {
        fill();
    } else if (action == "take") {
        take();
    };

    printState();
}

main();