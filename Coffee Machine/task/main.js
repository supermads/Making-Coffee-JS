function calculateCoffeeAvailable (waterInMachine, milkInMachine, beansInMachine){
    let waterPerCup = 200;
    let milkPerCup = 50;
    let beansPerCup = 15;

    let coffeeAvailable = 0;

    while (waterInMachine >= waterPerCup  & milkInMachine >= milkPerCup & beansInMachine >= beansPerCup){
        coffeeAvailable++;
        waterInMachine -= waterPerCup;
        milkInMachine -= milkPerCup;
        beansInMachine -= beansPerCup;
    };

    return coffeeAvailable;
}

function main() {
    const input = require('sync-input');
    let waterInMachine = input("Write how many ml of water the coffee machine has:");
    let milkInMachine = input("Write how many ml of milk the coffee machine has:");
    let beansInMachine = input("Write how many grams of coffee beans the coffee machine has:");
    let coffee = input("Write how many cups of coffee you will need:");

    let coffeeAvailable = calculateCoffeeAvailable(waterInMachine, milkInMachine, beansInMachine);

    if (coffeeAvailable == coffee) {
        console.log("Yes, I can make that amount of coffee");
    } else if (coffeeAvailable > coffee) {
        console.log(`Yes, I can make that amount of coffee (and even ${coffeeAvailable - coffee} more than that)`);
    } else {
        console.log(`No, I can make only ${coffeeAvailable} cups of coffee`);
    }
}

main();